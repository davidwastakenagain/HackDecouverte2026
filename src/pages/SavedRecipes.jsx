// Saved recipes page (owned by Member 3).
// Props: onSelectRecipe(recipe) — call with a full recipe object to open it.
// Reads saved recipes from LocalStorage ("cravebetter.savedRecipes")
// through the helpers in RecipeDetails.jsx.

import { useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import { getSavedRecipes, removeRecipe } from "./RecipeDetails.jsx";

export default function SavedRecipes({ onSelectRecipe }) {
  const [savedRecipes, setSavedRecipes] = useState(getSavedRecipes);

  function handleRemove(id) {
    removeRecipe(id);
    setSavedRecipes(getSavedRecipes());
  }

  if (savedRecipes.length === 0) {
    return (
      <section className="rounded-2xl bg-white p-6 text-center">
        <p className="text-4xl" aria-hidden="true">
          🔖
        </p>
        <h2 className="mt-2 font-semibold text-ink">No saved recipes yet</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Open a recipe and tap "Save recipe" to keep it here.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-3">
      <p className="text-sm text-ink-soft">
        {savedRecipes.length} saved{" "}
        {savedRecipes.length === 1 ? "recipe" : "recipes"}
      </p>
      {savedRecipes.map((recipe) => (
        <div key={recipe.id} className="space-y-1">
          <RecipeCard recipe={recipe} onSelect={onSelectRecipe} />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => handleRemove(recipe.id)}
              className="rounded-full px-3 py-1 text-sm text-ink-soft hover:bg-cream-dark hover:text-ink"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
