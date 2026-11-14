// Recipe details page (owned by Member 3).
// Props: recipe (full recipe object), onBack().
// Also exports the saved-recipe helpers used by SavedRecipes.jsx.
// Saved recipes live in LocalStorage under "cravebetter.savedRecipes"
// as a JSON array of full recipe objects.

import { useState } from "react";
import FoodBuddy from "../components/FoodBuddy.jsx";
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
          search={false}
          fit="cover"
          alt={recipe.title}
          className="aspect-[4/3] w-full rounded-3xl border-2 border-line shadow-[0_5px_0_0_var(--color-berry-100)]"
        />

        <div className="mt-5">
          <span className="chip">{CATEGORY_LABELS[recipe.category] || recipe.category}</span>
          <h1 className="mt-2 text-4xl text-ink [overflow-wrap:anywhere]">{recipe.title}</h1>
          <p className="mt-2 text-ink-soft">{recipe.cookingTime}</p>
          {recipe.description && <p className="mt-2 text-ink-soft">{recipe.description}</p>}
          {recipe.sourceUrl && (
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              Recipe from{" "}
              <a
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-berry-700 underline decoration-2 underline-offset-4 hover:text-berry-600"
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
        {recipe.nutrition && (
          <section className="card">
            <h2 className="text-2xl text-ink">
              Nutrition per serving{recipe.nutritionEstimated ? " (estimate)" : ""}
            </h2>
            <dl className="mt-3 grid grid-cols-4 gap-2 text-center">
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
                <div key={label} className="flex flex-col-reverse rounded-2xl bg-berry-50 px-1 py-2">
                  <dt className="text-sm text-ink-soft">{label}</dt>
                  <dd className="font-extrabold text-ink">
                    {value}
                    <span className="text-sm font-normal"> {unit}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-sm text-ink-soft">
              {recipe.servings ? `${recipe.servings}. ` : ""}
              {recipe.nutritionEstimated
                ? "These figures are estimated by AI from the ingredient list. They are not measured or published, so treat them as a rough guide."
                : `Figures published by ${recipe.sourceName || "the recipe source"}. Cholesterol and trans fat are not published.`}
            </p>
          </section>
        )}

        {recipe.nutrients?.length > 0 && (
          <section className="rounded-3xl border-2 border-line bg-mint p-5">
            <h2 className="flex items-center gap-2 text-2xl text-ink">
              <FoodBuddy name="avocado" className="h-10 w-10" />
              Good for pregnancy
            </h2>
            <ul className="mt-3 space-y-2">
              {recipe.nutrients.map((nutrient) => (
                <li key={nutrient.name} className="rounded-2xl bg-surface/80 px-3 py-2">
                  <span className="font-extrabold text-ink">{nutrient.name}</span>
                  <span className="text-ink-soft"> from {nutrient.from.join(", ")}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {(recipe.cautions?.length > 0 || recipe.allergens?.length > 0) && (
          <section className="rounded-3xl border-2 border-line bg-butter p-5">
            <h2 className="text-2xl text-ink">Keep in mind</h2>
            <ul className="mt-3 space-y-2 text-ink">
              {recipe.allergens?.length > 0 && (
                <li>
                  <span className="font-extrabold">Allergens:</span> {recipe.allergens.join(", ")}.
                  Check labels, as other ingredients may contain allergens too.
                </li>
              )}
              {recipe.cautions?.map((caution) => (
                <li key={caution}>{caution}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="card">
          <h2 className="text-2xl text-ink">Ingredients</h2>
          <ul className="mt-2 divide-y-2 divide-dashed divide-line">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="py-2.5 text-ink">
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl text-ink">Instructions</h2>
          <ol className="mt-3 space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-berry-100 font-display text-lg leading-none font-bold text-berry-700"
                >
                  {index + 1}
                </span>
                <span className="text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <p className="px-1 text-[0.95rem] text-ink-soft">
          Check ingredient labels for allergens, and ask your healthcare provider about any dietary
          restrictions that apply to you.
        </p>
      </div>
    </article>
  );
}
