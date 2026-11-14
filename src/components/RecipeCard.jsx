// Recipe card (owned by Member 3). Used by Results and SavedRecipes.
// Props: recipe (recipe object), onSelect(recipe).
// Also exports FoodPhoto, which shows a live photo of a food from TheMealDB
// (free, no key). RecipeDetails uses it, and Home can use it for the craving input.

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

const photoCache = new Map(); // text -> Promise of a photo URL, or "" if none found

// Finds a photo URL for a food, or "" if there is none.
function findFoodPhoto(text) {
  const key = String(text ?? "").trim().toLowerCase();
  if (!photoCache.has(key)) {
    const titleWords = wordsOf(key);
    photoCache.set(
      key,
      (async () => {
        for (const term of searchTerms(key)) {
          let meals;
          try {
            const response = await fetch(SEARCH_URL + encodeURIComponent(term));
            meals = (await response.json()).meals ?? [];
          } catch {
            return ""; // offline or blocked: use the fallback
          }
          // Only whole-word matches ("cake" must not match "Pancakes"). For the
          // exact text typed, the last word may be unfinished ("ice crea" -> "Ice Cream").
          const pattern = term === key ? `\\b${term}` : `\\b${term}(s|es)?\\b`;
          const matches = meals.filter((meal) => new RegExp(pattern).test(meal.strMeal.toLowerCase()));
          if (!matches.length) continue;
          // Prefer the dish that shares the most words with the title.
          const shared = (meal) => titleWords.filter((word) => meal.strMeal.toLowerCase().includes(word)).length;
          const best = matches.reduce((a, b) => (shared(b) > shared(a) ? b : a));
          return `${best.strMealThumb}/medium`;
        }
        return "";
      })()
    );
  }
  return photoCache.get(key);
}

/**
 * Shows a live photo of `query`, cropped to fill its box (set the size with className).
 * Props: query (food name), fallback (image URL to use if no photo is found),
 * emoji (shown if there is no image at all), delay (ms to wait after query
 * changes, useful while typing), alt, className.
 * While a new photo loads, the previous one stays visible.
 */
export function FoodPhoto({ query, fallback = "", emoji = "🍽️", delay = 0, alt = "", className = "" }) {
  const [found, setFound] = useState(null); // { query, url }
  const [broken, setBroken] = useState([]); // URLs that failed to load

  useEffect(() => {
    let current = true;
    const timer = setTimeout(() => {
      findFoodPhoto(query).then((url) => current && setFound({ query, url }));
    }, delay);
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [query, delay]);

  const isLoading = found?.query !== query;
  const src = [found?.url, fallback].find((url) => url && !broken.includes(url));

  return (
    <span className={`relative block overflow-hidden bg-sage-100 ${className}`}>
      {src ? (
        <img
          key={src}
          src={src}
          alt={alt}
          onError={() => setBroken((list) => [...list, src])}
          className={`h-full w-full object-cover transition-opacity duration-300 ${isLoading ? "opacity-60" : ""}`}
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
        query={recipe.title}
        fallback={recipe.image}
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
        </span>
      </span>
    </button>
  );
}
