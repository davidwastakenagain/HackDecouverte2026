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
 * Shows a photo of a food in a box whose size is set with className.
 * Props: photo (the recipe's own image URL; when given, no search is made),
 * query (food name to search for when there is no photo), fallback (image URL
 * to use if the search finds nothing), fit ("contain" scales the photo to fit
 * inside the box without cropping; "cover" fills the box and crops the edges),
 * delay (ms to wait after query changes, useful while typing), alt, className.
 * While a new photo loads, the previous one stays visible. If there is no
 * photo at all, a plain plate outline is shown.
 */
export function FoodPhoto({ photo = "", query, fallback = "", fit = "contain", delay = 0, alt = "", className = "" }) {
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
    <span className={`relative block overflow-hidden bg-berry-50 ${className}`}>
      {src ? (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setBroken((list) => [...list, src])}
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${fit === "cover" ? "object-cover" : "object-contain"} ${isLoading ? "opacity-60" : ""}`}
        />
      ) : (
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center text-berry-600/30 ${isLoading ? "animate-pulse" : ""}`}
        >
          <svg viewBox="0 0 24 24" className="h-1/3 max-h-12 w-1/3 max-w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
          </svg>
        </span>
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------

// A row on phones (photo on the left); from tablet width up, a card with the
// photo on top, so cards sit side by side in a grid.
export default function RecipeCard({ recipe, onSelect }) {
  if (!recipe) return null;

  return (
    <button
      type="button"
      onClick={() => onSelect(recipe)}
      className="flex h-full w-full items-start gap-4 overflow-hidden rounded-xl border border-line bg-surface p-3 text-left transition-colors hover:border-ink-soft md:flex-col md:items-stretch md:gap-0 md:p-0"
    >
      <FoodPhoto
        photo={recipe.image}
        query={recipe.title}
        fit="cover"
        className="h-24 w-24 shrink-0 rounded-lg md:aspect-[4/3] md:h-auto md:w-full md:rounded-none"
      />

      <span className="block min-w-0 flex-1 md:p-4">
        <span className="chip">{CATEGORY_LABELS[recipe.category] || recipe.category}</span>
        <span className="mt-2 block font-display text-lg leading-snug font-semibold text-ink">
          {recipe.title}
        </span>
        {recipe.description && (
          <span className="mt-1 line-clamp-2 text-[0.95rem] text-ink-soft">{recipe.description}</span>
        )}
        <span className="mt-2 block text-sm text-ink-soft">
          {recipe.cookingTime}
          {recipe.nutrition && ` · ${recipe.nutrition.kcal} kcal per serving`}
        </span>
      </span>
    </button>
  );
}
