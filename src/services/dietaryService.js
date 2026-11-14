// Dietary checks (Member 2).
// Compares a recipe with the user's dietary profile (userDataService.js):
//   - food restrictions hide recipes that contain the food;
//   - medicines hide the few foods the NHS says not to have with them, and add
//     a note to recipes with foods that need care.
//
// How a recipe is checked: its "allergens" list, plus a search of its
// ingredient lines for the words below. The word lists are deliberately wide
// (for example every "noodles" counts as gluten), so the filter may hide a
// recipe that would have been fine, rather than show one that is not.
// It still cannot see inside packaged ingredients, so the app always tells
// the user to check labels.
//
// Medicine notes come from the NHS medicine pages (nhs.uk/medicines), read on
// 14 Nov 2026: ferrous sulfate, levothyroxine, warfarin and nifedipine.
// Only these four are covered. This is not a full interaction checker.

const MEAT = ["meat", "chicken", "turkey", "beef", "pork", "lamb", "chorizo", "bacon", "ham", "sausage", "salami", "pepperoni", "prosciutto", "pancetta", "mince", "meatball", "drumstick", "steak", "veal", "duck", "lard"];
const FISH = ["fish", "salmon", "tuna", "haddock", "monkfish", "cod", "anchovy", "anchovies", "sardine", "mackerel", "trout", "tilapia", "worcestershire", "curry paste"];
const SHELLFISH = ["shellfish", "seafood", "prawn", "shrimp", "mussel", "squid", "calamari", "crab", "lobster", "clam", "oyster", "scallop", "curry paste"];
const GELATIN = ["gelatin", "gelatine"];
const DAIRY = ["milk", "butter", "cheese", "cheddar", "mozzarella", "parmesan", "ricotta", "feta", "halloumi", "paneer", "yogurt", "yoghurt", "cream", "custard", "ghee", "whey"];
const EGG = ["egg", "mayonnaise", "mayo", "meringue"];

// Food restrictions the user can tick.
//   allergens: labels from a recipe's "allergens" field that mean a conflict.
//   words: ingredient words that mean a conflict.
//   careWords + careNote: the recipe is still shown, with the note.
export const RESTRICTIONS = [
  { id: "milk", group: "allergy", label: "Milk and dairy", allergens: ["Milk"], words: [...DAIRY, "chocolate"] },
  { id: "egg", group: "allergy", label: "Eggs", allergens: ["Egg"], words: EGG },
  {
    id: "gluten",
    group: "allergy",
    label: "Wheat and gluten",
    allergens: ["Wheat (gluten)"],
    words: ["wheat", "flour", "bread", "breadcrumb", "bun", "pita", "tortilla", "pasta", "macaroni", "spaghetti", "lasagna", "lasagne", "penne", "fettuccine", "gnocchi", "noodle", "couscous", "vermicelli", "bulgur", "semolina", "seitan", "soy sauce", "granola", "oat", "cornflake", "cereal", "barley", "rye", "malt", "cracker", "bagel", "croissant", "pastry", "biscuit"],
  },
  { id: "fish", group: "allergy", label: "Fish", allergens: ["Fish"], words: FISH },
  { id: "shellfish", group: "allergy", label: "Shellfish", allergens: ["Shellfish"], words: SHELLFISH },
  { id: "soy", group: "allergy", label: "Soy", allergens: ["Soy"], words: ["soy", "soya", "tofu", "edamame", "miso", "tempeh", "tamari", "chocolate"] },
  { id: "peanut", group: "allergy", label: "Peanuts", allergens: ["Peanuts"], words: ["peanut", "satay"] },
  { id: "tree-nut", group: "allergy", label: "Tree nuts", allergens: ["Tree nuts"], words: ["nut", "pecan", "almond", "walnut", "cashew", "pistachio", "hazelnut", "macadamia", "pesto", "marzipan", "praline", "granola", "nutella"] },
  { id: "sesame", group: "allergy", label: "Sesame", allergens: ["Sesame"], words: ["sesame", "tahini", "hummus", "houmous"] },
  { id: "mustard", group: "allergy", label: "Mustard", allergens: ["Mustard"], words: ["mustard", "mayonnaise", "mayo", "curry powder"] },

  {
    id: "vegetarian",
    group: "diet",
    label: "Vegetarian",
    allergens: ["Fish", "Shellfish"],
    words: [...MEAT, ...FISH, ...SHELLFISH, ...GELATIN],
    careWords: ["parmesan"],
    careNote: () => "Parmesan is traditionally made with animal rennet. Look for a hard cheese labelled vegetarian.",
  },
  { id: "vegan", group: "diet", label: "Vegan", allergens: ["Fish", "Shellfish", "Milk", "Egg"], words: [...MEAT, ...FISH, ...SHELLFISH, ...GELATIN, ...DAIRY, ...EGG, "honey"] },
  { id: "pork", group: "diet", label: "No pork", allergens: [], words: ["pork", "chorizo", "bacon", "ham", "sausage", "salami", "pepperoni", "prosciutto", "pancetta", "lard", ...GELATIN] },
  { id: "beef", group: "diet", label: "No beef", allergens: [], words: ["beef", "steak", "veal", ...GELATIN] },
  {
    id: "added-sugar",
    group: "diet",
    label: "No added sugar",
    allergens: [],
    caution: "Contains added sugar",
    words: ["sugar", "honey", "syrup", "jam", "jelly", "chocolate", "ketchup", "sweet chilli sauce", "granola", "cornflake", "marshmallow", "caramel", "molasses", "treacle"],
  },
];

// Medicines the user can tick. See the NHS source note at the top of the file.
//   avoid: foods the NHS says not to have with the medicine; recipes with them are hidden.
//   careWords + careNote: recipes with these foods are still shown, with the note.
//   general: a reminder shown once on the results page, whatever the recipe.
export const MEDICATIONS = [
  {
    id: "iron",
    label: "Iron tablets",
    examples: "such as ferrous sulfate",
    careWords: [...DAIRY, ...EGG, "tea", "coffee"],
    careNote: (foods) =>
      `Contains ${foods}. The NHS advises leaving a 2-hour gap between ferrous sulfate (iron tablets) and tea, coffee, eggs or dairy, because they can reduce how much iron you take in.`,
  },
  {
    id: "levothyroxine",
    label: "Levothyroxine",
    examples: "for an underactive thyroid",
    general:
      "Levothyroxine: the NHS advises taking it on an empty stomach, 30 to 60 minutes before your first meal of the day or any drink with caffeine.",
  },
  {
    id: "warfarin",
    label: "Warfarin",
    examples: "a blood thinner",
    avoid: ["cranberry", "cranberries", "grapefruit"],
    avoidNote: "Warfarin: the NHS says not to have cranberry juice or cranberry products, and not to drink grapefruit juice.",
    careWords: ["broccoli", "spinach", "kale", "cabbage", "lettuce", "rocket", "chard", "watercress", "spring greens", "pak choi", "brussels sprout"],
    careNote: (foods) =>
      `Contains ${foods}, which is high in vitamin K. The NHS says you can still eat these foods while taking warfarin, but talk to your warfarin clinic for advice and before making big changes to your diet.`,
  },
  {
    id: "nifedipine",
    label: "Nifedipine",
    examples: "for blood pressure",
    avoid: ["grapefruit"],
    avoidNote: "Nifedipine: the NHS says not to eat grapefruit or drink grapefruit juice while taking it.",
  },
];

// "1 tbsp Peanut Butter" -> " tbsp peanut butter ": lower case, letters only,
// with a space at each end so whole words can be found.
function clean(text) {
  const plain = String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // drop accents: "purée" -> "puree"
    .replace(/[^a-z]+/g, " ")
    .trim();
  return ` ${plain} `;
}

// Ingredients whose name contains a word from the lists above without being
// that food. They are reworded before the search ("peanut butter" is not butter).
const NOT_WHAT_IT_SOUNDS_LIKE = [
  [" peanut butter ", " peanut spread "],
  [" almond butter ", " almond spread "],
  [" cocoa butter ", " cocoa fat "],
  [" butter bean", " bean"],
  [" coconut milk ", " coconut drink "],
  [" coconut cream ", " coconut drink "],
  [" oat milk ", " oat drink "],
  [" almond milk ", " almond drink "],
  [" soy milk ", " soy drink "],
  [" soya milk ", " soya drink "],
  [" cream of tartar ", " tartar "],
  [" water chestnut", " chestnut"],
  [" nutmeg ", " spice "],
  [" butternut ", " squash "],
];

function ingredientLines(recipe) {
  return (recipe?.ingredients ?? []).map((line) => {
    let text = clean(line);
    for (const [from, to] of NOT_WHAT_IT_SOUNDS_LIKE) text = text.replaceAll(from, to);
    return text;
  });
}

// The words from the list that appear in the lines, as whole words
// ("egg" matches "eggs" but not "eggplant").
function wordsFound(lines, words) {
  return words.filter((word) => {
    const phrase = clean(word).trim();
    return lines.some(
      (line) => line.includes(` ${phrase} `) || line.includes(` ${phrase}s `) || line.includes(` ${phrase}es `),
    );
  });
}

// "mushrooms, Coriander" -> ["mushroom", "coriander"]
function customFoods(avoidFoods) {
  return String(avoidFoods ?? "")
    .split(/[,;\n]/)
    .map((item) => clean(item).trim().replace(/(?<=[a-z]{3})s$/, ""))
    .filter((item) => item.length >= 3);
}

const listOf = (items) => [...new Set(items)].join(", ");

/**
 * Checks one recipe against a profile.
 * Returns { allowed, conflicts, notes }:
 *   allowed    false when the recipe has a food the profile rules out
 *   conflicts  why, as short labels: ["Milk and dairy", "Warfarin"]
 *   notes      things to know about a recipe that is allowed, mostly about medicines
 */
export function checkRecipe(recipe, profile) {
  const conflicts = [];
  const notes = [];
  if (!recipe || !profile) return { allowed: true, conflicts, notes };

  const lines = ingredientLines(recipe);
  const allergens = recipe.allergens ?? [];
  const cautions = recipe.cautions ?? [];

  for (const rule of RESTRICTIONS) {
    if (!profile.restrictions.includes(rule.id)) continue;
    const conflict =
      rule.allergens.some((label) => allergens.includes(label)) ||
      (rule.caution && cautions.some((caution) => caution.startsWith(rule.caution))) ||
      wordsFound(lines, rule.words).length > 0;
    if (conflict) conflicts.push(rule.label);
    else if (rule.careWords && wordsFound(lines, rule.careWords).length > 0) notes.push(rule.careNote());
  }

  // Foods the user typed in. These are also looked for in the title.
  const titleAndLines = [...lines, clean(recipe.title)];
  for (const food of customFoods(profile.avoidFoods)) {
    if (wordsFound(titleAndLines, [food]).length > 0) conflicts.push(food);
  }

  for (const medicine of MEDICATIONS) {
    if (!profile.medications.includes(medicine.id)) continue;
    if (medicine.avoid && wordsFound(lines, medicine.avoid).length > 0) {
      conflicts.push(medicine.label);
      continue;
    }
    if (medicine.avoid && wordsFound(lines, ["fruit juice", "juice of your choice"]).length > 0) {
      notes.push(`Uses fruit juice. ${medicine.avoidNote}`);
    }
    if (medicine.careWords) {
      const foods = wordsFound(lines, medicine.careWords);
      if (foods.length > 0) notes.push(medicine.careNote(listOf(foods)));
    }
  }

  return { allowed: conflicts.length === 0, conflicts, notes };
}

/**
 * Notes about the profile that do not depend on a recipe: general medicine
 * reminders, and a warning when the craving itself is a food the NHS says not
 * to have with one of the user's medicines.
 */
export function getProfileNotes(craving, profile) {
  const notes = [];
  const cravingLine = [clean(craving)];
  for (const medicine of MEDICATIONS) {
    if (!profile.medications.includes(medicine.id)) continue;
    if (medicine.avoid && wordsFound(cravingLine, medicine.avoid).length > 0) notes.push(medicine.avoidNote);
    if (medicine.general) notes.push(medicine.general);
  }
  return notes;
}

/** The profile's food restrictions as labels, for display: ["Eggs", "Vegetarian", "mushroom"]. */
export function restrictionLabels(profile) {
  return [
    ...RESTRICTIONS.filter((rule) => profile.restrictions.includes(rule.id)).map((rule) => rule.label),
    ...customFoods(profile.avoidFoods),
  ];
}

/** The profile's ticked medicines as labels: ["Iron tablets"]. */
export function medicationLabels(profile) {
  return MEDICATIONS.filter((medicine) => profile.medications.includes(medicine.id)).map((medicine) => medicine.label);
}

/** A short text that is the same for two profiles that filter the same way. */
export function profileKey(profile) {
  return JSON.stringify([[...profile.restrictions].sort(), [...profile.medications].sort(), customFoods(profile.avoidFoods)]);
}
