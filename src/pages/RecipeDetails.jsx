// Recipe details page (owned by Member 3).
// Props: recipe (full recipe object), onBack().
// Also exports the saved-recipe helpers used by SavedRecipes.jsx.
// Saved recipes live in LocalStorage under "cravebetter.savedRecipes"
// as a JSON array of full recipe objects.

import { useState } from "react";
import { FoodPhoto } from "../components/RecipeCard.jsx";

const STORAGE_KEY = "cravebetter.savedRecipes";

export function getSavedRecipes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function writeSavedRecipes(recipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch {
    // Storage can be unavailable (e.g. private mode); fail quietly.
  }
}

export function isRecipeSaved(id) {
  return getSavedRecipes().some((recipe) => recipe.id === id);
}

export function saveRecipe(recipe) {
  if (isRecipeSaved(recipe.id)) return;
  writeSavedRecipes([...getSavedRecipes(), recipe]);
}

export function removeRecipe(id) {
  writeSavedRecipes(getSavedRecipes().filter((recipe) => recipe.id !== id));
}

const CATEGORY_LABELS = {
  quick: "Quick & Healthy",
  elaborate: "Worth the Wait",
  nearby: "Nearby Food",
};

export default function RecipeDetails({ recipe }) {
  const [saved, setSaved] = useState(() => isRecipeSaved(recipe.id));

  function toggleSaved() {
    if (saved) {
      removeRecipe(recipe.id);
      setSaved(false);
    } else {
      saveRecipe(recipe);
      setSaved(true);
    }
  }

  return (
    <article className="space-y-5">
      <FoodPhoto
        photo={recipe.image}
        query={recipe.title}
        emoji={recipe.category === "elaborate" ? "🍲" : "🥗"}
        alt={recipe.title}
        className="aspect-[4/3] w-full rounded-2xl text-3xl"
      />

      <div>
        <span className="text-xs font-semibold tracking-wide text-sage-500 uppercase">
          {CATEGORY_LABELS[recipe.category] || recipe.category}
        </span>
        <h2 className="mt-1 text-2xl font-semibold text-ink">{recipe.title}</h2>
        <p className="mt-1 text-sm text-ink-soft">⏱ {recipe.cookingTime}</p>
        {recipe.description && (
          <p className="mt-2 text-ink-soft">{recipe.description}</p>
        )}
        {recipe.sourceUrl && (
          <p className="mt-2 text-sm text-ink-soft">
            Recipe from{" "}
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sage-700 underline"
            >
              {recipe.sourceName || "the original source"}
            </a>
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={toggleSaved}
        aria-pressed={saved}
        className={
          "w-full rounded-full px-4 py-3 font-medium transition " +
          (saved
            ? "border border-sage-500 bg-white text-sage-700"
            : "bg-sage-500 text-white hover:bg-sage-700")
        }
      >
        {saved ? "✓ Saved · Tap to remove" : "🔖 Save recipe"}
      </button>

      {recipe.nutrition && (
        <section>
          <h3 className="mb-2 text-lg font-semibold text-sage-700">
            Nutrition per serving
          </h3>
          <dl className="grid grid-cols-4 gap-2 rounded-2xl bg-white p-4 text-center">
            {[
              ["Calories", recipe.nutrition.kcal, "kcal"],
              ["Fat", recipe.nutrition.fat, "g"],
              ["Saturates", recipe.nutrition.saturates, "g"],
              ["Carbs", recipe.nutrition.carbs, "g"],
              ["Sugars", recipe.nutrition.sugars, "g"],
              ["Fibre", recipe.nutrition.fibre, "g"],
              ["Protein", recipe.nutrition.protein, "g"],
              ["Salt", recipe.nutrition.salt, "g"],
            ].map(([label, value, unit]) => (
              <div key={label}>
                <dd className="font-semibold text-ink">
                  {value}
                  <span className="text-xs font-normal"> {unit}</span>
                </dd>
                <dt className="text-xs text-ink-soft">{label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-1 px-1 text-xs text-ink-soft">
            {recipe.servings ? `${recipe.servings}. ` : ""}Figures published by{" "}
            {recipe.sourceName || "the recipe source"}. Cholesterol and trans fat are not published.
          </p>
        </section>
      )}

      {recipe.nutrients?.length > 0 && (
        <section>
          <h3 className="mb-2 text-lg font-semibold text-sage-700">
            Good for pregnancy
          </h3>
          <ul className="space-y-1.5 rounded-2xl bg-white p-4">
            {recipe.nutrients.map((nutrient) => (
              <li key={nutrient.name} className="text-ink">
                <span className="font-semibold">{nutrient.name}</span>
                <span className="text-sm text-ink-soft"> from {nutrient.from.join(", ")}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(recipe.cautions?.length > 0 || recipe.allergens?.length > 0) && (
        <section>
          <h3 className="mb-2 text-lg font-semibold text-sage-700">Keep in mind</h3>
          <ul className="space-y-1.5 rounded-2xl bg-white p-4 text-sm text-ink">
            {recipe.allergens?.length > 0 && (
              <li>
                <span className="font-semibold">Allergens:</span> {recipe.allergens.join(", ")}. Check
                labels, as other ingredients may contain allergens too.
              </li>
            )}
            {recipe.cautions?.map((caution) => (
              <li key={caution}>{caution}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h3 className="mb-2 text-lg font-semibold text-sage-700">Ingredients</h3>
        <ul className="space-y-1.5 rounded-2xl bg-white p-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex gap-2 text-ink">
              <span className="text-sage-500">•</span>
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-sage-700">
          Instructions
        </h3>
        <ol className="space-y-3">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="flex gap-3 rounded-2xl bg-white p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sm font-semibold text-sage-700">
                {index + 1}
              </span>
              <span className="text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <p className="rounded-2xl bg-cream-dark p-3 text-sm text-ink-soft">
        Check ingredient labels for allergens, and ask your healthcare provider
        about any dietary restrictions that apply to you.
      </p>
    </article>
  );
}
