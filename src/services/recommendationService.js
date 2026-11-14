// Recommendation service (Member 2).
// getRecommendations(craving) returns { quick: recipe, elaborate: recipe }.
// Calling it again for the same craving returns different options (refresh).
//
// How it picks recipes:
//   1. The craving text is cleaned up and split into words.
//   2. Words and phrases are looked up in CRAVING_GROUPS ("big mac" -> burger).
//      Small typos still match ("chocolat" -> chocolate).
//   3. The craving gets a taste profile (sweet, salty, crunchy...) from the
//      groups it matched and from describing words like "something crunchy".
//   4. Every recipe gets a score: matching the craving's group counts most,
//      then how close the group's taste profile is, then words the craving
//      shares with the recipe's title and ingredients.
//   5. The best-scoring recipes are returned first. Refresh moves down the list.
//
// Recipes live in src/data/recipes.js. A recipe belongs to a group through its
// id: "burger-quick-1" is in the "burger" group. The published ones are real
// BBC Good Food recipes (via TheMealDB) with nutrition per serving, filtered
// for pregnancy food safety; each keeps its own photo. extraRecipes.js fills
// the craving groups those do not cover.
// When the optional AI server is running, getFreshRecommendations asks it
// instead and falls back to these recipes (see the end of this file).

import { recipes as publishedRecipes } from "../data/recipes.js";
import { extraRecipes } from "../data/extraRecipes.js";
import { cravingNutrition } from "../data/cravingNutrition.js";
import { getProfile } from "./userDataService.js";
import { checkRecipe, profileKey, restrictionLabels } from "./dietaryService.js";

// Published recipes first, so they win ties; the extras fill gaps.
const recipes = [...publishedRecipes, ...extraRecipes];

// Each group: the words people use for that craving, and its taste profile.
const CRAVING_GROUPS = {
  burger: {
    terms: ["burger", "cheeseburger", "hamburger", "big mac", "whopper", "slider", "mcdonalds", "burger king", "wendys", "five guys", "in n out", "patty", "sloppy joe", "fast food", "quarter pounder", "a and w", "harveys"],
    traits: { savory: 1, meaty: 1, cheesy: 0.5, warm: 0.5, carb: 0.5, fried: 0.3 },
  },
  "ice-cream": {
    terms: ["ice cream", "ice cream sandwich", "icecream", "gelato", "sundae", "milkshake", "shake", "frozen yogurt", "froyo", "popsicle", "mcflurry", "sorbet", "blizzard", "dairy queen", "frosty", "ice", "ice pop", "soft serve", "creamsicle", "banana split", "yogurt", "parfait"],
    traits: { sweet: 1, cold: 1, creamy: 1 },
  },
  fries: {
    terms: ["fries", "fry", "french fries", "poutine", "tater tots", "wedges", "potato wedges", "onion rings", "potato", "potatoes", "mashed potatoes", "curly fries", "sweet potato", "hash browns", "baked potato"],
    traits: { salty: 1, fried: 1, crunchy: 0.7, carb: 0.7, warm: 0.5, savory: 0.5 },
  },
  pizza: {
    terms: ["pizza", "calzone", "garlic bread", "pepperoni", "dominos", "pizza hut", "little caesars", "flatbread", "stromboli", "cheese", "cheesy bread", "mozzarella sticks", "mozzarella", "margherita", "pizza pocket"],
    traits: { cheesy: 1, savory: 1, carb: 0.8, warm: 0.6 },
  },
  chocolate: {
    terms: ["chocolate", "chocolate cake", "chocolate chip cookies", "chocolate cookies", "brownie", "nutella", "cocoa", "fudge", "kit kat", "snickers", "oreo", "reeses", "twix", "hershey", "mousse", "hot chocolate", "kinder", "ferrero", "truffle", "chocolate bar", "mars bar", "toblerone", "smores", "chocolate milk", "pudding"],
    traits: { chocolate: 1, sweet: 1, creamy: 0.3 },
  },
  "fried-chicken": {
    terms: ["fried chicken", "chicken nuggets", "nuggets", "wings", "chicken wings", "tenders", "chicken tenders", "chicken strips", "chicken fingers", "kfc", "popeyes", "chick fil a", "popcorn chicken", "schnitzel", "karaage", "mcnuggets", "drumsticks", "crispy chicken", "chicken sandwich"],
    traits: { fried: 1, meaty: 1, crunchy: 0.8, savory: 0.8, salty: 0.5, warm: 0.5 },
  },
  pasta: {
    terms: ["pasta", "mac and cheese", "mac n cheese", "mac cheese", "macaroni", "spaghetti", "alfredo", "lasagna", "lasagne", "fettuccine", "penne", "carbonara", "ravioli", "gnocchi", "kraft dinner", "bolognese", "linguine", "tortellini", "italian", "pesto", "meat sauce"],
    traits: { carb: 1, creamy: 0.7, cheesy: 0.7, savory: 0.7, warm: 0.7 },
  },
  tacos: {
    terms: ["taco", "burrito", "nachos", "quesadilla", "taco bell", "chipotle", "mexican", "enchilada", "fajita", "guacamole", "salsa", "tex mex", "tortilla", "queso", "burrito bowl", "tostada", "tamale", "refried beans"],
    traits: { savory: 1, spicy: 0.5, cheesy: 0.5, meaty: 0.5, carb: 0.5, warm: 0.5, crunchy: 0.3 },
  },
  asian: {
    terms: ["chinese", "chinese food", "takeout", "take out", "takeaway", "fried rice", "rice", "noodles", "ramen", "instant noodles", "stir fry", "orange chicken", "general tso", "pad thai", "dumplings", "lo mein", "chow mein", "egg roll", "spring roll", "pho", "teriyaki", "thai", "korean", "japanese", "vietnamese", "panda express", "bibimbap", "wonton", "udon", "soy sauce", "potstickers", "cup noodles"],
    traits: { savory: 1, salty: 0.7, carb: 0.7, warm: 0.7, fried: 0.3 },
  },
  seafood: {
    terms: ["sushi", "fish", "fish and chips", "shrimp", "prawns", "salmon", "tuna", "seafood", "crab", "lobster", "fish sticks", "fish fingers", "calamari", "california roll", "sashimi", "poke", "oysters", "scallops", "cod", "tilapia", "filet o fish", "fish tacos", "clam chowder", "smoked salmon"],
    traits: { savory: 1, fresh: 0.5, salty: 0.5, meaty: 0.3 },
  },
  snacks: {
    terms: ["chips", "potato chips", "crisps", "doritos", "cheetos", "popcorn", "pretzels", "crackers", "lays", "pringles", "ruffles", "cheezies", "goldfish", "snack", "nuts", "peanuts", "takis", "tortilla chips", "cheese puffs", "trail mix", "salt"],
    traits: { salty: 1, crunchy: 1, savory: 0.5, fried: 0.4 },
  },
  sour: {
    terms: ["pickles", "sour", "vinegar", "lemon", "lime", "olives", "salt and vinegar", "sauerkraut", "pickled", "citrus", "grapefruit", "sweet and sour", "pickle juice", "dill"],
    traits: { sour: 1, salty: 0.5, fresh: 0.5, crunchy: 0.3 },
  },
  candy: {
    terms: ["candy", "candies", "gummies", "gummy", "gummy bears", "skittles", "sour patch", "lollipop", "licorice", "marshmallows", "sweets", "sugar", "jelly beans", "starburst", "haribo", "cotton candy", "caramel", "toffee", "jello", "jelly", "fruit snacks", "fruit", "grapes", "watermelon", "mango", "strawberries", "strawberry", "apple", "berries", "pineapple", "peach", "orange", "banana", "melon", "cherries", "sour candy", "swedish fish", "nerds"],
    traits: { sweet: 1, fruity: 0.8, cold: 0.2 },
  },
  bakery: {
    terms: ["cake", "donut", "doughnut", "cookie", "cupcake", "muffin", "pastry", "pastries", "croissant", "pie", "cinnamon roll", "cinnabon", "cheesecake", "tim hortons", "timbits", "krispy kreme", "danish", "scone", "banana bread", "bread", "baked goods", "tart", "churros", "beignet", "macaron", "biscuit", "baklava", "cookie dough", "apple pie", "pop tart", "shortcake", "tiramisu"],
    traits: { sweet: 1, carb: 0.8, warm: 0.4, creamy: 0.2 },
  },
  breakfast: {
    terms: ["breakfast", "pancakes", "waffles", "french toast", "egg", "omelette", "omelet", "cereal", "bagel", "toast", "mcmuffin", "brunch", "oatmeal", "porridge", "granola", "crepes", "ihop", "eggs benedict", "scrambled eggs", "breakfast sandwich", "maple syrup"],
    traits: { warm: 0.7, carb: 0.7, savory: 0.5, sweet: 0.5 },
  },
  sandwich: {
    terms: ["sandwich", "sub", "subway", "hot dog", "hotdog", "grilled cheese", "wrap", "blt", "deli", "panini", "club sandwich", "philly cheesesteak", "cheesesteak", "peanut butter", "hoagie", "tuna melt", "corn dog", "banh mi", "reuben", "bun", "meatball sub", "pogo"],
    traits: { savory: 1, carb: 0.8, meaty: 0.5, cheesy: 0.4 },
  },
  drinks: {
    terms: ["soda", "pop", "coke", "coca cola", "pepsi", "sprite", "juice", "slushie", "slush", "slurpee", "bubble tea", "boba", "coffee", "iced coffee", "frappuccino", "starbucks", "energy drink", "lemonade", "drink", "thirsty", "tea", "iced tea", "smoothie", "root beer", "fanta", "mountain dew", "dr pepper", "red bull", "latte", "gatorade", "kombucha", "wine", "beer", "cocktail", "alcohol", "milk", "ginger ale", "sparkling water"],
    traits: { drink: 1, sweet: 0.7, cold: 0.7 },
  },
  spicy: {
    terms: ["spicy", "hot sauce", "curry", "jalapeno", "buffalo", "sriracha", "chili", "chilli", "indian", "butter chicken", "tikka masala", "vindaloo", "hot wings", "wasabi", "tabasco", "kimchi", "spice", "nashville hot", "biryani", "samosa", "hot cheetos", "spicy noodles", "buffalo wings"],
    traits: { spicy: 1, savory: 0.8, warm: 0.6 },
  },
  meat: {
    terms: ["steak", "bbq", "barbecue", "ribs", "bacon", "sausage", "meat", "kebab", "kabob", "shawarma", "gyro", "beef", "pork", "lamb", "brisket", "pulled pork", "meatballs", "jerky", "ham", "roast", "roast beef", "donair", "souvlaki", "chicken", "salami", "pork chops", "rotisserie chicken", "turkey"],
    traits: { meaty: 1, savory: 1, warm: 0.5, salty: 0.4 },
  },
  general: {
    terms: ["soup", "salad", "stew", "healthy", "vegetables", "veggies", "avocado toast", "comfort food", "home cooked", "casserole", "chicken soup"],
    traits: { savory: 0.6, warm: 0.5, fresh: 0.5 },
  },
};

// Describing words that say what kind of food someone wants.
const TRAIT_WORDS = {
  sweet: { sweet: 1 }, sugary: { sweet: 1 }, dessert: { sweet: 1 }, treat: { sweet: 1 },
  salty: { salty: 1 }, savory: { savory: 1 }, savoury: { savory: 1 }, umami: { savory: 1 },
  crunchy: { crunchy: 1 }, crispy: { crunchy: 1 }, crisp: { crunchy: 1 },
  creamy: { creamy: 1 }, smooth: { creamy: 1 }, rich: { creamy: 0.7, chocolate: 0.3 }, buttery: { creamy: 0.6, carb: 0.4 },
  cheesy: { cheesy: 1 }, melty: { cheesy: 1 },
  hot: { warm: 0.6, spicy: 0.6 }, fiery: { spicy: 1 },
  cold: { cold: 1 }, frozen: { cold: 1 }, icy: { cold: 1 }, chilled: { cold: 1 }, refreshing: { cold: 0.7, fresh: 0.7 },
  tangy: { sour: 1 }, tart: { sour: 1 }, zesty: { sour: 0.8, fresh: 0.4 },
  fried: { fried: 1 }, greasy: { fried: 1 }, oily: { fried: 1 }, junk: { fried: 0.7, salty: 0.7 },
  meaty: { meaty: 1 }, protein: { meaty: 1 }, juicy: { meaty: 0.5, fruity: 0.5 },
  carbs: { carb: 1 }, carb: { carb: 1 }, starchy: { carb: 1 }, doughy: { carb: 1 },
  chocolatey: { chocolate: 1 }, chocolaty: { chocolate: 1 },
  fruity: { fruity: 1 },
  warm: { warm: 1 }, cozy: { warm: 1 }, comforting: { warm: 1 }, comfort: { warm: 1 },
  fresh: { fresh: 1 }, light: { fresh: 1 },
  fizzy: { drink: 1 }, bubbly: { drink: 1 },
  chewy: { sweet: 0.6, carb: 0.4 },
};

// Words that say nothing about the food itself.
const STOP_WORDS = new Set(["i", "im", "a", "an", "the", "and", "or", "of", "with", "some", "something", "anything", "want", "need", "crave", "craving", "really", "very", "so", "like", "for", "me", "my", "to", "eat", "have", "get", "food", "big", "good", "bad", "just", "right", "now", "please", "that", "is", "it", "in", "on", "from", "would", "love", "feel", "mood", "more", "lot", "lots", "kind", "type", "any"]);

const FALLBACK_GROUP = "general";
// Refresh cycles through 3 to 5 recipes per category: the ones that score at
// least half as well as the best match.
const MIN_POOL = 3;
const MAX_POOL = 5;

// "Jalapeño Poppers!" -> "jalapeno poppers"
function normalize(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// Rough singular form, so "tacos" matches "taco" and "sandwiches" matches "sandwich".
function stem(word) {
  if (word.length > 4 && /(ch|sh|x|ss)es$/.test(word)) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s") && !/(ss|us|is)$/.test(word)) return word.slice(0, -1);
  return word;
}

const toWords = (text) => normalize(text).split(" ").filter(Boolean).map(stem);

// Number of single-letter edits between two words (for typos).
function editDistance(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    previous = current;
  }
  return previous[b.length];
}

// ----- Built once when the app loads -----

const TERMS = []; // { groupId, words }
for (const [groupId, group] of Object.entries(CRAVING_GROUPS)) {
  for (const term of group.terms) TERMS.push({ groupId, words: toWords(term) });
}
TERMS.sort((a, b) => b.words.length - a.words.length); // longest phrases first

const TRAITS_BY_WORD = {};
for (const [word, traits] of Object.entries(TRAIT_WORDS)) TRAITS_BY_WORD[stem(word)] = traits;

const groupOf = (recipe) => recipe.id.replace(/-(quick|elaborate)-\d+$/, "");

// Recipes this service can recommend, with their searchable words.
const INDEX = recipes
  .filter((recipe) => CRAVING_GROUPS[groupOf(recipe)])
  .map((recipe) => ({
    recipe,
    groupId: groupOf(recipe),
    titleWords: new Set(toWords(recipe.title)),
    ingredientWords: new Set(toWords(recipe.ingredients.join(" "))),
  }));

function similarity(a, b) {
  let dot = 0;
  let sizeA = 0;
  let sizeB = 0;
  for (const value of Object.values(a)) sizeA += value * value;
  for (const [key, value] of Object.entries(b)) {
    sizeB += value * value;
    dot += value * (a[key] ?? 0);
  }
  return sizeA && sizeB ? dot / Math.sqrt(sizeA * sizeB) : 0;
}

function addTraits(target, traits, weight) {
  for (const [key, value] of Object.entries(traits)) target[key] = (target[key] ?? 0) + value * weight;
}

// Works out what a craving is about: which groups it names and its taste profile.
function understand(craving) {
  const words = toWords(craving);
  const used = words.map(() => false);
  const describing = words.map((word) => Boolean(TRAITS_BY_WORD[word])); // "sweet", "crunchy"
  const groupScores = {};
  const traits = {};

  // Exact words and phrases. Longer phrases are checked first, so
  // "fish and chips" is seafood rather than chips.
  let lastFood = null; // the food named last, e.g. "burger" in "cheese burger"
  let lastFoodEnd = -1;
  for (const term of TERMS) {
    for (let start = 0; start + term.words.length <= words.length; start++) {
      const matches = term.words.every((word, i) => !used[start + i] && words[start + i] === word);
      if (!matches) continue;
      term.words.forEach((_, i) => (used[start + i] = true));
      groupScores[term.groupId] = Math.max(groupScores[term.groupId] ?? 0, 10 * term.words.length);
      const end = start + term.words.length - 1;
      if (end > lastFoodEnd) {
        lastFood = term.groupId;
        lastFoodEnd = end;
      }
    }
  }

  // When a craving names several foods, the last one is usually the dish and
  // the others describe it: "cheese burger", "peanut butter cookies",
  // "chicken noodle soup". Give the last one a clear lead.
  if (lastFood && Object.keys(groupScores).length > 1) groupScores[lastFood] += 15;

  words.forEach((word, i) => {
    if (used[i] || STOP_WORDS.has(word)) return;

    if (TRAITS_BY_WORD[word]) {
      addTraits(traits, TRAITS_BY_WORD[word], 1);
      used[i] = true;
      return;
    }

    // Typos: the closest single-word term, if it is close enough.
    if (word.length < 5) return;
    const allowed = word.length >= 8 ? 2 : 1;
    let best = null;
    let bestDistance = allowed + 1;
    for (const term of TERMS) {
      if (term.words.length !== 1 || term.words[0].length < 4) continue;
      const distance = editDistance(word, term.words[0]);
      if (distance < bestDistance) {
        best = term;
        bestDistance = distance;
      }
    }
    if (best) {
      groupScores[best.groupId] = Math.max(groupScores[best.groupId] ?? 0, 6);
      used[i] = true;
    }
  });

  for (const [groupId, score] of Object.entries(groupScores)) {
    addTraits(traits, CRAVING_GROUPS[groupId].traits, score / 10);
  }

  // Words to look for in recipe titles, and the ones nothing above recognised,
  // which are also looked for in ingredients ("avocado", "lentil").
  const isSearchable = (word) => word.length >= 3 && !STOP_WORDS.has(word);
  const titleWords = words.filter((word, i) => !describing[i] && isSearchable(word));
  const unknownWords = words.filter((word, i) => !used[i] && isSearchable(word));
  return { groupScores, traits, titleWords, unknownWords };
}

// Ranks the recipes of one category for a craving, best first. Recipes that
// the dietary profile rules out are left out before ranking, so the next-best
// match takes their place. The pool is empty when no recipe is left.
function rank(category, { groupScores, traits, titleWords, unknownWords }, profile) {
  const allowed = INDEX.filter(
    (entry) => entry.recipe.category === category && checkRecipe(entry.recipe, profile).allowed,
  );
  const scored = allowed.map((entry) => {
    let wordScore = 0;
    for (const word of titleWords) {
      if (entry.titleWords.has(word)) wordScore += 5;
    }
    for (const word of unknownWords) {
      if (!entry.titleWords.has(word) && entry.ingredientWords.has(word)) wordScore += 3;
    }
    const score =
      (groupScores[entry.groupId] ?? 0) +
      6 * similarity(traits, CRAVING_GROUPS[entry.groupId].traits) +
      wordScore;
    return { entry, score, wordScore };
  });

  const understood =
    Object.keys(groupScores).length > 0 ||
    Object.keys(traits).length > 0 ||
    scored.some((item) => item.wordScore > 0);

  if (scored.length === 0) return { understood, pool: [] };
  if (!understood) {
    const fallback = scored.filter((item) => item.entry.groupId === FALLBACK_GROUP);
    // If the profile rules out every all-round recipe, use any that is left.
    const pool = fallback.length > 0 ? fallback : scored.slice(0, MAX_POOL);
    return { understood, pool: pool.map((item) => item.entry.recipe) };
  }
  scored.sort((a, b) => b.score - a.score);
  const related = scored.filter((item) => item.score > 0).length;
  const closeEnough = scored.filter((item) => item.score >= scored[0].score / 2).length;
  const size = Math.max(1, Math.min(MAX_POOL, related, Math.max(MIN_POOL, closeEnough)));
  return { understood, pool: scored.slice(0, size).map((item) => item.entry.recipe) };
}

// Remembers the ranked recipes and the refresh position for each craving,
// separately for each dietary profile.
const cache = new Map();

function lookUp(craving) {
  const profile = getProfile();
  const key = `${normalize(craving)}|${profileKey(profile)}`;
  if (!cache.has(key)) {
    const meaning = understand(craving);
    const quick = rank("quick", meaning, profile);
    const elaborate = rank("elaborate", meaning, profile);
    cache.set(key, {
      quick: quick.pool,
      elaborate: elaborate.pool,
      understood: quick.understood || elaborate.understood,
      calls: 0,
    });
  }
  return cache.get(key);
}

// Every built-in recipe carries its own photo (recipe.image), so none is added here.
// Recipes that conflict with the saved dietary profile (userDataService.js)
// are never returned. quick or elaborate is null when the profile rules out
// every recipe of that kind.
export function getRecommendations(craving) {
  const entry = lookUp(craving);
  const position = entry.calls++;
  return {
    quick: entry.quick[position % entry.quick.length] ?? null,
    elaborate: entry.elaborate[position % entry.elaborate.length] ?? null,
  };
}

// False when nothing in the craving was recognised. In that case
// getRecommendations returns general all-round ideas.
export function isKnownCraving(craving) {
  return lookUp(craving).understood;
}

/**
 * Typical nutrition of the food being craved, per usual portion, from USDA
 * data (src/data/cravingNutrition.js), or null if the craving is not recognised.
 * Returns { label, portion, usdaName, kcal, fat, saturates, carbs, sugars,
 * fibre, protein, salt, cholesterol, image }. Used to compare with a recommended recipe.
 * keywordsOnly: only match foods named in the craving, not its wider craving group.
 */
export function getCravingNutrition(craving, { keywordsOnly = false } = {}) {
  const text = ` ${normalize(craving)} `;
  if (!text.trim()) return null;

  // The longest keyword found in the craving wins ("chicken sandwich" over "sandwich").
  let best = null;
  let bestLength = 0;
  for (const food of cravingNutrition) {
    for (const keyword of food.keywords) {
      const phrase = normalize(keyword);
      if (phrase.length > bestLength && (text.includes(` ${phrase} `) || text.includes(` ${phrase}s `))) {
        best = food;
        bestLength = phrase.length;
      }
    }
  }
  if (best || keywordsOnly) return best;

  // Otherwise the typical food of the craving's group ("whopper" -> burger).
  const { groupScores } = understand(craving);
  const [groupId] = Object.entries(groupScores).sort((a, b) => b[1] - a[1])[0] ?? [];
  return (groupId && cravingNutrition.find((food) => food.group === groupId)) || null;
}

// ---------------------------------------------------------------------------
// AI recommendations (optional)
//
// When VITE_RECOMMENDATION_API_URL is set in .env.local, getFreshRecommendations
// asks the recommendation server (server/index.js) to write the two recipes
// with AI. If the setting is missing, the server is not running, or its answer
// is unusable, the built-in recipes above are used instead.
// ---------------------------------------------------------------------------

const AI_TIMEOUT_MS = 30000;

const aiUrl = () => import.meta.env?.VITE_RECOMMENDATION_API_URL || "";

// True when the app is set up to ask the recommendation server.
export function isAiEnabled() {
  return Boolean(aiUrl());
}

const isText = (value, max) => typeof value === "string" && value.trim().length > 0 && value.length <= max;
const isTextList = (value) =>
  Array.isArray(value) && value.length >= 2 && value.length <= 12 && value.every((item) => isText(item, 400));

// Turns the server's answer into a recipe in the shared structure, or throws.
function toRecipe(raw, category) {
  if (
    !raw ||
    !isText(raw.title, 100) ||
    !isText(raw.cookingTime, 30) ||
    !isText(raw.description, 250) ||
    !isTextList(raw.ingredients) ||
    !isTextList(raw.instructions)
  ) {
    throw new Error(`The recommendation server returned an invalid ${category} recipe`);
  }
  return {
    id: `ai-${category}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: raw.title.trim(),
    category,
    cookingTime: raw.cookingTime.trim(),
    description: raw.description.trim(),
    image: "",
    ingredients: raw.ingredients.map((item) => item.trim()),
    instructions: raw.instructions.map((item) => item.trim()),
    ...estimatedExtras(raw),
  };
}

const NUTRITION_KEYS = ["kcal", "fat", "saturates", "carbs", "sugars", "fibre", "protein", "salt"];

// The server's estimated nutrition and pregnancy notes for an AI recipe, in the
// same fields the published recipes use. Anything malformed is left out, so
// the recipe page simply does not show that section.
function estimatedExtras(raw) {
  const extras = {};
  if (isText(raw.servings, 20)) extras.servings = raw.servings;
  const n = raw.nutrition;
  if (n && NUTRITION_KEYS.every((key) => Number.isFinite(n[key]) && n[key] >= 0)) {
    extras.nutrition = Object.fromEntries(NUTRITION_KEYS.map((key) => [key, n[key]]));
    extras.nutritionEstimated = true;
  }
  if (Array.isArray(raw.nutrients)) {
    extras.nutrients = raw.nutrients
      .filter((item) => isText(item?.name, 20) && Array.isArray(item.from) && item.from.length > 0 && item.from.every((text) => isText(text, 60)))
      .map((item) => ({ name: item.name, from: item.from }));
  }
  if (Array.isArray(raw.allergens)) extras.allergens = raw.allergens.filter((item) => isText(item, 30));
  if (Array.isArray(raw.cautions)) extras.cautions = raw.cautions.filter((item) => isText(item, 200));
  return extras;
}

async function askServer(craving, avoidTitles) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);
  try {
    const response = await fetch(aiUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Only food restrictions are sent, so the recipes can leave those foods
      // out. Medicines stay in this browser.
      body: JSON.stringify({ craving, avoidTitles, avoidFoods: restrictionLabels(getProfile()) }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Recommendation server responded ${response.status}`);
    const answer = await response.json();
    return { quick: toRecipe(answer.quick, "quick"), elaborate: toRecipe(answer.elaborate, "elaborate") };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Like getRecommendations, but uses AI when the recommendation server is set up.
 * Returns a Promise of { quick, elaborate, source }, where source is "ai" or "built-in".
 * avoidTitles: recipe titles already shown, so a refresh gives new ones.
 */
export async function getFreshRecommendations(craving, avoidTitles = []) {
  if (isAiEnabled() && String(craving ?? "").trim()) {
    try {
      // AI recipes have no image; RecipeCard shows a drawing of that kind of food.
      // Their nutrition figures are estimates (nutritionEstimated: true).
      const written = await askServer(craving, avoidTitles);
      // The AI is asked to follow the dietary profile, but every recipe is
      // checked here too. One that conflicts is swapped for a built-in recipe.
      const profile = getProfile();
      const fits = (recipe) => checkRecipe(recipe, profile).allowed;
      if (fits(written.quick) && fits(written.elaborate)) return { ...written, source: "ai" };
      const builtIn = getRecommendations(craving);
      if (!fits(written.quick) && !fits(written.elaborate)) return { ...builtIn, source: "built-in" };
      return {
        quick: fits(written.quick) ? written.quick : builtIn.quick,
        elaborate: fits(written.elaborate) ? written.elaborate : builtIn.elaborate,
        source: "ai",
      };
    } catch (error) {
      console.warn("AI recommendations unavailable, using the built-in recipes instead:", error);
    }
  }
  return { ...getRecommendations(craving), source: "built-in" };
}
