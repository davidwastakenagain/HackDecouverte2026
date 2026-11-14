// Saved recipes page (owned by Member 3).
// Props: onSelectRecipe(recipe) — call with a full recipe object to open it.
// Reads saved recipes from LocalStorage ("cravebetter.savedRecipes")
// through the helpers in RecipeDetails.jsx. LocalStorage keeps them after the
// site is closed, in the same browser on the same device.

import { useState } from "react";
import FoodBuddy from "../components/FoodBuddy.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import { getSavedRecipes, removeRecipe } from "./RecipeDetails.jsx";

export default function SavedRecipes({ onSelectRecipe }) {
  const [savedRecipes, setSavedRecipes] = useState(getSavedRecipes);

  function handleRemove(id) {
    removeRecipe(id);
    setSavedRecipes(getSavedRecipes());
  }

  return (
    <section>
      <h1 className="text-4xl text-ink sm:text-5xl">Saved recipes</h1>

      {savedRecipes.length === 0 ? (
        <div className="card mt-6 flex max-w-xl flex-col items-center px-6 py-8 text-center">
          <FoodBuddy name="cookie" className="h-28 w-28 animate-wiggle" />
          <p className="mt-3 font-display text-2xl font-bold text-ink">No saved recipes yet</p>
          <p className="mt-1 text-ink-soft">
            Open a recipe and choose "Save recipe" to keep it here. Saved recipes stay in this
            browser on this device, even after you close the site.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-2 text-ink-soft">
            {savedRecipes.length} saved {savedRecipes.length === 1 ? "recipe" : "recipes"}
          </p>
          {/* One column on phones, two on tablets, three on wide screens. */}
          <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {savedRecipes.map((recipe) => (
              <li key={recipe.id} className="flex flex-col">
                <div className="flex-1">
                  <RecipeCard recipe={recipe} onSelect={onSelectRecipe} />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(recipe.id)}
                  aria-label={`Remove ${recipe.title}`}
                  className="mt-2 self-end rounded-full px-3 py-1 text-sm font-extrabold text-ink-soft hover:bg-berry-100 hover:text-berry-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
