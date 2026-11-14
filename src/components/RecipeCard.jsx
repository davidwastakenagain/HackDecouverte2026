// Recipe card (owned by Member 3). Used by Results and SavedRecipes.
// Props: recipe (recipe object), onSelect(recipe).
// Also exports FoodPhoto, which shows a live photo of a food from Wikipedia or
// TheMealDB (both free, no key). RecipeDetails uses it, and Home can use it for the craving input.

import { useEffect, useState } from "react";

const CATEGORY_LABELS = {
  quick: "Quick & Healthy",
  elaborate: "Worth the Wait",
  nearby: "Nearby Food",
};

const CATEGORY_EMOJI = {
  quick: "🥗",
  elaborate: "🍲",
  nearby: "📍",
};

// ---------------------------------------------------------------------------
// Live food photos
// ---------------------------------------------------------------------------

const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Words that describe how a dish is made, not what it is.
const DESCRIPTORS = new Set(
  "healthy healthier light lighter easy quick simple homemade baked oven grilled roasted cooked hard crispy loaded stuffed mini whole wheat lean low fat sugar free style".split(" ")
);
// Words never searched on their own: joining words, and flavours that would
// match unrelated dishes ("cinnamon" finds roast lamb).
const NOT_ALONE = new Set(
  "with on in over and of for the a an sweet sour spicy cinnamon lemon herb herbs honey garlic vanilla cocoa ginger cream nice".split(" ")
);

const wordsOf = (text) => String(text ?? "").toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/).filter(Boolean);

// Turns a recipe title or craving into searches, most specific first:
// "Healthy Turkey Burger with Sweet Potato Wedges" ->
// "turkey burger with sweet potato wedges", "turkey burger", "burger".
// The last word before "with" is usually the dish itself; other single
// words ("french", "cinnamon") find unrelated dishes, so they are not tried.
function searchTerms(text) {
  const phrase = wordsOf(text).filter((word) => !DESCRIPTORS.has(word)).join(" ");
  const [mainDish] = phrase.split(/ (?:with|on|over|in) /);
  const dish = wordsOf(mainDish).pop() ?? "";
  const dishTerms = NOT_ALONE.has(dish) ? [] : [dish, dish.endsWith("burger") ? "burger" : ""];
  return [...new Set([phrase, mainDish, ...dishTerms].filter((term) => term.length >= 3))];
}

// Photo of a dish from TheMealDB: { url, full } where full means the dish name
// contains every word typed; "" if none matches, or null if the request failed.
async function findDishPhoto(key) {
  const titleWords = wordsOf(key);
  for (const term of searchTerms(key)) {
    let meals;
    try {
      const response = await fetch(SEARCH_URL + encodeURIComponent(term));
      meals = (await response.json()).meals ?? [];
    } catch {
      return null; // offline or blocked
    }
    // Only whole-word matches ("cake" must not match "Pancakes"). For the
    // exact text typed, the last word may be unfinished ("ice crea" -> "Ice Cream").
    const pattern = term === key ? `\\b${term}` : `\\b${term}(s|es)?\\b`;
    const matches = meals.filter((meal) => new RegExp(pattern).test(meal.strMeal.toLowerCase()));
    if (!matches.length) continue;
    // Prefer the dish that shares the most words with the title.
    const shared = (meal) => titleWords.filter((word) => meal.strMeal.toLowerCase().includes(word)).length;
    const best = matches.reduce((a, b) => (shared(b) > shared(a) ? b : a));
    const typed = titleWords.filter((word) => word.length >= 3 && !DESCRIPTORS.has(word));
    return { url: `${best.strMealThumb}/medium`, full: shared(best) >= typed.length };
  }
  return "";
}

// Everyday foods and brands ("burger", "Hershey's chocolate bar", "Doritos")
// come from Wikipedia (free, no key): the lead picture of the article, if
// Wikipedia describes it as a food or drink.
const WIKI_PAGE_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const WIKI_URL =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=10&prop=pageimages|description&piprop=thumbnail&pithumbsize=600&gsrsearch=";

const FOOD_DESCRIPTION =
  /\b(food|dish|dishes|sandwich|dessert|snack|drink|beverage|confection|confectionery|chocolate|candy|sweet|fruit|vegetable|cuisine|bread|cheese|meat|pasta|sauce|soup|cake|pastry|cookie|biscuit|cereal|chips|crisps|noodles?|rice|pizza|ice cream|frozen|potato|potatoes|egg|fish|seafood|burger|soda|soft drink|juice|spread|condiment|pickle|pie|dough|fried|baked|meal|breakfast|pancake|dumpling|stew|salad|sausage|chicken|beef|pork|nut|berry|bean|yogurt|milk|tortilla|wafer|patty|bar|roll|cracker|pretzel|popcorn|syrup|butter|cream|doughnut|donut|waffle|gum|jelly|lollipop|licorice|marshmallow)\b/i;
const NOT_FOOD_DESCRIPTION =
  /\b(restaurant|chain|company|corporation|manufacturer|film|song|album|band|episode|series|character|video game|novel|book|city|town|village|person|player|politician|singer|actor|species|genus|family of|disambiguation|list of)\b/i;

// Short cravings that mean something more specific on Wikipedia.
const WIKI_ALIASES = {
  burger: "hamburger", fries: "french fries", chips: "potato chips", soda: "soft drink", pop: "soft drink",
  wings: "buffalo wing", nuggets: "chicken nugget", shake: "milkshake", coke: "coca-cola",
};

const isFoodPage = (description) => FOOD_DESCRIPTION.test(description ?? "") && !NOT_FOOD_DESCRIPTION.test(description ?? "");

// Photo of a food from Wikipedia, "" if no result is a food, or null if the request failed.
async function findWikipediaPhoto(text) {
  const key = WIKI_ALIASES[text] ?? text;
  // 1. The article with exactly this name ("pizza", "kit kat"). These answers
  //    are cached by Wikipedia, so this is fast and rarely refused.
  try {
    const response = await fetch(WIKI_PAGE_URL + encodeURIComponent(key.replace(/ /g, "_")) + "?redirect=true");
    if (response.ok) {
      const page = await response.json();
      if (page.type === "standard" && page.thumbnail && isFoodPage(page.description)) return page.thumbnail.source;
    }
  } catch {
    return null; // offline or blocked
  }
  // 2. A search, for longer text ("hersheys chocolate bar"): the first result
  //    that is a food. Wikipedia limits how many searches it accepts per minute.
  try {
    const response = await fetch(WIKI_URL + encodeURIComponent(key));
    if (!response.ok) return null; // too many requests: the caller falls back
    const pages = Object.values((await response.json()).query?.pages ?? {});
    const food = pages.sort((a, b) => a.index - b.index).find((page) => page.thumbnail && isFoodPage(page.description));
    return food ? food.thumbnail.source : "";
  } catch {
    return null;
  }
}

const photoCache = new Map(); // text -> Promise of a photo URL, or "" if none found

// Finds a photo URL for a food or branded product, or "" if there is none.
// Order: Wikipedia (everyday foods and brands), then a TheMealDB dish.
function findFoodPhoto(text) {
  const key = String(text ?? "").trim().toLowerCase();
  if (key.length < 3) return Promise.resolve("");
  if (!photoCache.has(key)) {
    photoCache.set(
      key,
      (async () => {
        const wiki = await findWikipediaPhoto(key);
        if (wiki) return wiki;
        const dish = await findDishPhoto(key);
        if (dish) return dish.url;
        // Don't remember failed requests, so the next try can succeed.
        if (wiki === null || dish === null) photoCache.delete(key);
        return "";
      })()
    );
  }
  return photoCache.get(key);
}

/**
 * Shows a photo of a food, scaled to fit inside its box without cropping
 * (set the box size with className).
 * Props: photo (the recipe's own image URL; when given, no search is made),
 * query (food name to search for when there is no photo), fallback (image URL
 * to use if the search finds nothing), emoji (shown if there is no image at
 * all), delay (ms to wait after query changes, useful while typing), alt, className.
 * While a new photo loads, the previous one stays visible.
 */
export function FoodPhoto({ photo = "", query, fallback = "", emoji = "🍽️", delay = 0, alt = "", className = "" }) {
  const [found, setFound] = useState(null); // { query, url }
  const [broken, setBroken] = useState([]); // URLs that failed to load

  useEffect(() => {
    if (photo) return undefined;
    let current = true;
    const timer = setTimeout(() => {
      findFoodPhoto(query).then((url) => current && setFound({ query, url }));
    }, delay);
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [photo, query, delay]);

  const isLoading = !photo && found?.query !== query;
  const src = [photo, found?.url, fallback].find((url) => url && !broken.includes(url));

  return (
    <span className={`relative block overflow-hidden bg-sage-100 ${className}`}>
      {src ? (
        <img
          key={src}
          src={src}
          alt={alt}
          onError={() => setBroken((list) => [...list, src])}
          className={`h-full w-full object-contain transition-opacity duration-300 ${isLoading ? "opacity-60" : ""}`}
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-full w-full items-center justify-center text-[2em] ${isLoading ? "animate-pulse" : ""}`}
        >
          {emoji}
        </span>
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------

export default function RecipeCard({ recipe, onSelect }) {
  if (!recipe) return null;

  return (
    <button
      type="button"
      onClick={() => onSelect(recipe)}
      className="flex w-full items-center gap-3 rounded-2xl border border-sage-100 bg-white p-3 text-left shadow-sm transition hover:border-sage-300 active:scale-[0.99]"
    >
      <FoodPhoto
        photo={recipe.image}
        query={recipe.title}
        emoji={CATEGORY_EMOJI[recipe.category] || "🍽️"}
        className="h-20 w-20 shrink-0 rounded-xl text-2xl"
      />

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold tracking-wide text-sage-500 uppercase">
          {CATEGORY_LABELS[recipe.category] || recipe.category}
        </span>
        <span className="block font-semibold text-ink">{recipe.title}</span>
        {recipe.description && (
          <span className="block truncate text-sm text-ink-soft">
            {recipe.description}
          </span>
        )}
        <span className="mt-1 block text-xs text-ink-soft">
          ⏱ {recipe.cookingTime}
          {recipe.nutrition && ` · ${recipe.nutrition.kcal} kcal per serving`}
        </span>
      </span>
    </button>
  );
}
