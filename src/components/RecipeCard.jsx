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

// Branded foods ("Hershey's chocolate bar", "Doritos") come from Open Food Facts
// (free, no key), which looks products up by brand. Its search allows about
// 10 requests a minute, so it is only asked when no dish matched.
const PRODUCTS_URL =
  "https://world.openfoodfacts.org/api/v2/search?fields=product_name,image_front_url,image_front_small_url&page_size=24&brands_tags=";

// Open Food Facts brand tags: "Hershey's" -> "hershey-s", "Kit Kat" -> "kit-kat".
const brandTag = (text) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// The brand is usually the first word or two: "hersheys chocolate bar".
function brandGuesses(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const first = brandTag(words[0] ?? "");
  const guesses = words.length >= 2 ? [brandTag(`${words[0]} ${words[1]}`), first] : [first];
  // Brands are tagged both ways: "hersheys" and "hershey-s".
  guesses.push(first.endsWith("-s") ? first.replace(/-s$/, "s") : first.replace(/([a-z])s$/, "$1-s"));
  return [...new Set(guesses)].filter((tag) => tag.length >= 3);
}

// Photo of a branded product, "" if none matches, or null if the request failed.
async function findProductPhoto(key) {
  for (const brand of brandGuesses(key)) {
    let products;
    try {
      const response = await fetch(PRODUCTS_URL + encodeURIComponent(brand));
      if (!response.ok) return null; // e.g. too many requests
      products = (await response.json()).products ?? [];
    } catch {
      return null;
    }
    // When more than the brand was typed ("hersheys chocolate bar"), the
    // product name must share one of those other words.
    const otherWords = wordsOf(key).filter((word) => word.length >= 3 && !brand.includes(word));
    const shared = (product) => otherWords.filter((word) => (product.product_name ?? "").toLowerCase().includes(word)).length;
    const withPhoto = products.filter((product) => product.image_front_url || product.image_front_small_url);
    const matches = otherWords.length ? withPhoto.filter((product) => shared(product) > 0) : withPhoto;
    if (!matches.length) continue;
    const best = matches.reduce((a, b) => (shared(b) > shared(a) ? b : a));
    return best.image_front_url || best.image_front_small_url;
  }
  return "";
}

// Photos of popular craving brands, looked up once on Open Food Facts so they
// show instantly without a request. aliases are what people type.
const BRAND_PHOTOS = [
  // BRAND_PHOTOS_START
  // BRAND_PHOTOS_END
];

const brandPhotoFor = (key) =>
  BRAND_PHOTOS.find(({ aliases }) =>
    aliases.some((alias) => new RegExp(`(^|[^a-z])${alias.replace(/[.*+?^${}()|[\]\\&]/g, "\\$&")}($|[^a-z])`).test(key))
  )?.image ?? "";

const photoCache = new Map(); // text -> Promise of a photo URL, or "" if none found

// Finds a photo URL for a food or branded product, or "" if there is none.
// Order: a known brand, a dish matching every word typed, any branded product
// (Open Food Facts), then a dish matching some of the words.
function findFoodPhoto(text) {
  const key = String(text ?? "").trim().toLowerCase();
  const brand = brandPhotoFor(key);
  if (brand) return Promise.resolve(brand);
  if (!photoCache.has(key)) {
    photoCache.set(
      key,
      (async () => {
        const dish = await findDishPhoto(key);
        if (dish?.full) return dish.url;
        const product = await findProductPhoto(key);
        if (product) return product;
        if (dish) return dish.url;
        // Don't remember failed requests, so the next try can succeed.
        if (dish === null || product === null) photoCache.delete(key);
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
        <span className="mt-2 block text-sm text-ink-soft">{recipe.cookingTime}</span>
      </span>
    </button>
  );
}
