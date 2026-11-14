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
    // One column on phones; on wide screens the photo, title and Save button
    // stay in view on the left while the recipe scrolls on the right.
    <article className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
      <div className="lg:sticky lg:top-20 lg:self-start">
        <FoodPhoto
          photo={recipe.image}
          query={recipe.title}
          fit="cover"
          alt={recipe.title}
          className="aspect-[4/3] w-full rounded-xl border border-line"
        />

        <div className="mt-5">
          <span className="chip">{CATEGORY_LABELS[recipe.category] || recipe.category}</span>
          <h1 className="mt-2 text-3xl text-ink [overflow-wrap:anywhere]">{recipe.title}</h1>
          <p className="mt-2 text-ink-soft">{recipe.cookingTime}</p>
          {recipe.description && <p className="mt-2 text-ink-soft">{recipe.description}</p>}
          {recipe.sourceUrl && (
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              Recipe from{" "}
              <a
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-berry-700 underline underline-offset-2 hover:text-berry-600"
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
          className={(saved ? "btn-secondary" : "btn-primary") + " mt-5 w-full sm:w-auto"}
        >
          {saved ? "Saved. Remove from saved" : "Save recipe"}
        </button>
        {saved && (
          <p className="mt-2 text-sm text-ink-soft">
            Saved in this browser. It will still be here when you come back.
          </p>
        )}
      </div>

      <div className="space-y-8">
        {recipe.nutrients?.length > 0 && (
          <section>
            <h2 className="text-xl text-ink">Good for pregnancy</h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {recipe.nutrients.map((nutrient) => (
                <li key={nutrient.name} className="py-2.5">
                  <span className="font-semibold text-ink">{nutrient.name}</span>
                  <span className="text-ink-soft"> from {nutrient.from.join(", ")}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {(recipe.cautions?.length > 0 || recipe.allergens?.length > 0) && (
          <section>
            <h2 className="text-xl text-ink">Keep in mind</h2>
            <ul className="mt-3 space-y-2 rounded-lg bg-berry-50 p-4 text-ink">
              {recipe.allergens?.length > 0 && (
                <li>
                  <span className="font-semibold">Allergens:</span> {recipe.allergens.join(", ")}.
                  Check labels, as other ingredients may contain allergens too.
                </li>
              )}
              {recipe.cautions?.map((caution) => (
                <li key={caution}>{caution}</li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-xl text-ink">Ingredients</h2>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="py-2.5 text-ink">
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl text-ink">Instructions</h2>
          <ol className="mt-3 space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="w-6 shrink-0 font-display text-xl leading-7 font-semibold text-berry-600"
                >
                  {index + 1}
                </span>
                <span className="text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <p className="border-t border-line pt-4 text-[0.95rem] text-ink-soft">
          Check ingredient labels for allergens, and ask your healthcare provider about any dietary
          restrictions that apply to you.
        </p>
      </div>
    </article>
  );
}
