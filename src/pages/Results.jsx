// Results page (Member 2).
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import { useEffect, useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import { getCravingNutrition, getFreshRecommendations, isKnownCraving } from "../services/recommendationService.js";

// Nutrients compared between the craving and a recipe. For the last two, more is better.
const COMPARED = [
  { key: "kcal", label: "Calories", unit: " kcal" },
  { key: "saturates", label: "Saturated fat", unit: " g" },
  { key: "sugars", label: "Sugars", unit: " g" },
  { key: "salt", label: "Salt", unit: " g" },
  { key: "fibre", label: "Fibre", unit: " g", moreIsBetter: true },
  { key: "protein", label: "Protein", unit: " g", moreIsBetter: true },
];

const tidy = (number) => Math.round(number * 10) / 10;

// Nutrition of one recipe serving next to one portion of the craved food,
// with the difference. Without craving figures it shows the recipe's alone.
function Comparison({ recipe, cravingFood }) {
  if (!recipe.nutrition) return null;
  return (
    <table className="mt-1.5 w-full rounded-xl bg-white px-2 text-xs text-ink">
      <thead>
        <tr className="text-left text-ink-soft">
          <th className="px-2 py-1 font-medium">Per serving</th>
          {cravingFood && <th className="px-2 py-1 text-right font-medium">Craving</th>}
          <th className="px-2 py-1 text-right font-medium">This recipe</th>
          {cravingFood && <th className="px-2 py-1 text-right font-medium">Difference</th>}
        </tr>
      </thead>
      <tbody>
        {COMPARED.map(({ key, label, unit, moreIsBetter }) => {
          const recipeValue = recipe.nutrition[key];
          const cravingValue = cravingFood?.[key];
          const difference = cravingFood && cravingValue != null ? tidy(recipeValue - cravingValue) : null;
          const better = difference !== null && difference !== 0 && difference > 0 === Boolean(moreIsBetter);
          return (
            <tr key={key} className="border-t border-sage-100">
              <td className="px-2 py-1">{label}</td>
              {cravingFood && <td className="px-2 py-1 text-right">{cravingValue != null ? `${cravingValue}${unit}` : "–"}</td>}
              <td className="px-2 py-1 text-right">{recipeValue}{unit}</td>
              {cravingFood && (
                <td className={`px-2 py-1 text-right font-semibold ${difference === null || difference === 0 ? "text-ink-soft" : better ? "text-sage-700" : "text-red-700"}`}>
                  {difference === null ? "–" : `${difference > 0 ? "+" : difference < 0 ? "−" : ""}${Math.abs(difference)}${unit}`}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Label({ title, detail }) {
  return (
    <p className="mb-1.5 flex items-baseline justify-between gap-2 px-1">
      <span className="text-xs font-semibold uppercase tracking-wide text-sage-700">{title}</span>
      <span className="text-xs text-ink-soft">{detail}</span>
    </p>
  );
}

// The last recommendations shown. Opening a recipe leaves this page, so this
// lets Back return to the same recipes instead of loading different ones.
let remembered = null;

export default function Results({ craving, onSelectRecipe }) {
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Counts refreshes. Used as a key so NearbyFood loads a new option too.
  const [refreshCount, setRefreshCount] = useState(0);

  const visit = useRef(0); // lets us ignore answers that arrive after the craving changed

  async function show(batchPromise, thisVisit) {
    setIsLoading(true);
    const batch = await batchPromise;
    if (thisVisit !== visit.current) return;
    setRecommendations(batch);
    setIsLoading(false);
    remembered = { craving, batch };
  }

  useEffect(() => {
    const thisVisit = ++visit.current;
    setRefreshCount(0);

    if (remembered?.craving === craving) {
      setRecommendations(remembered.batch);
      setIsLoading(false);
      return () => {
        visit.current++;
      };
    }

    setRecommendations(null);
    // The timer stops React's development double-run from asking twice.
    const timer = setTimeout(() => show(getFreshRecommendations(craving), thisVisit), 0);
    return () => {
      clearTimeout(timer);
      visit.current++;
    };
  }, [craving]);

  function handleRefresh() {
    setRefreshCount((count) => count + 1);
    show(getFreshRecommendations(craving), visit.current);
  }

  const cravingFood = getCravingNutrition(craving);

  return (
    <section>
      <p className="text-sm text-ink-soft">Instead of</p>
      <h2 className="text-2xl font-bold leading-tight text-ink [overflow-wrap:anywhere]">{craving}</h2>

      {recommendations && !isKnownCraving(craving) && (
        <p className="mt-3 rounded-xl bg-sage-100 px-3 py-2 text-sm text-ink">
          We don't have ideas for that exact craving yet, so here are some all-round favourites.
        </p>
      )}

      <div className="mt-4 space-y-4" aria-live="polite" aria-busy={isLoading}>
        {!recommendations && (
          <p className="rounded-2xl bg-sage-100 px-4 py-8 text-center text-sm text-ink-soft">
            Finding ideas…
          </p>
        )}

        {recommendations && (
          <div className={`space-y-4 transition-opacity ${isLoading ? "opacity-50" : ""}`}>
            {cravingFood && (
              <p className="rounded-xl bg-sage-100 px-3 py-2 text-sm text-ink">
                Compared with <span className="font-semibold">{cravingFood.label}</span> ({cravingFood.portion}):{" "}
                {cravingFood.kcal} kcal, {cravingFood.saturates} g saturated fat, {cravingFood.sugars} g sugars,{" "}
                {cravingFood.salt} g salt, {cravingFood.cholesterol} mg cholesterol.
              </p>
            )}
            {/* RecipeCard shows the category and cooking time itself. */}
            {[recommendations.quick, recommendations.elaborate].map((recipe) => (
              <div key={recipe.id}>
                <RecipeCard recipe={recipe} onSelect={onSelectRecipe} />
                <Comparison recipe={recipe} cravingFood={cravingFood} />
              </div>
            ))}
            <p className="px-1 text-xs text-ink-soft">
              Recipe figures are per serving, as published by BBC Good Food.
              {cravingFood && " Craving figures are for a typical portion, from USDA FoodData Central; brands and portion sizes vary."}
            </p>
          </div>
        )}

        <div>
          <Label title="Nearby Food" detail="close to you" />
          <NearbyFood key={refreshCount} craving={craving} />
        </div>
      </div>

      <button
        type="button"
        onClick={handleRefresh}
        disabled={isLoading}
        className="mt-5 w-full rounded-full bg-sage-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Finding ideas…" : "↻ Show me 3 new ideas"}
      </button>

    </section>
  );
}
