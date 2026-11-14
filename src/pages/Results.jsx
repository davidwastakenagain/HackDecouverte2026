// Results page (Member 2).
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import { useEffect, useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import {
  getCravingNutrition,
  getFreshRecommendations,
  isAiEnabled,
  isKnownCraving,
} from "../services/recommendationService.js";

// Nutrients compared between the craving and the recipes. For the last two, more is better.
const COMPARED = [
  { key: "kcal", label: "Calories", unit: " kcal" },
  { key: "saturates", label: "Saturated fat", unit: " g" },
  { key: "sugars", label: "Sugars", unit: " g" },
  { key: "salt", label: "Salt", unit: " g" },
  { key: "fibre", label: "Fibre", unit: " g", moreIsBetter: true },
  { key: "protein", label: "Protein", unit: " g", moreIsBetter: true },
];

const tidy = (number) => Math.round(number * 10) / 10;

// One recipe's figure for a nutrient, with the difference from the craving
// underneath. A dash means the recipe has no published figures.
function RecipeFigure({ recipe, cravingFood, row }) {
  const value = recipe.nutrition?.[row.key];
  if (value == null) return <span className="text-ink-soft">–</span>;
  const cravingValue = cravingFood?.[row.key];
  const difference = cravingValue != null ? tidy(value - cravingValue) : null;
  const better = difference > 0 === Boolean(row.moreIsBetter);
  return (
    <>
      {value}
      {row.unit}
      {difference !== null && (
        <span
          className={`block text-sm ${difference === 0 ? "text-ink-soft" : better ? "text-good" : "text-warn"}`}
        >
          {difference === 0 ? "same" : `${difference > 0 ? "+" : "−"}${Math.abs(difference)}${row.unit}`}
        </span>
      )}
    </>
  );
}

// Nutrition of one serving of each recipe next to one portion of the craved
// food. Team-written and AI-written recipes have estimated figures, marked
// "estimate". A recipe with no figures shows a dash; if neither recipe has
// figures, only the craving's figures are given.
function Comparison({ cravingFood, quick, elaborate }) {
  const hasRecipeFigures = Boolean(quick.nutrition || elaborate.nutrition);
  if (!cravingFood && !hasRecipeFigures) return null;

  if (!hasRecipeFigures) {
    return (
      <p className="mt-6 max-w-2xl text-[0.95rem] text-ink-soft">
        For reference, {cravingFood.label} ({cravingFood.portion}) has about {cravingFood.kcal}{" "}
        kcal, {cravingFood.saturates} g saturated fat, {cravingFood.sugars} g sugars and{" "}
        {cravingFood.salt} g salt (USDA FoodData Central; brands and portion sizes vary). These
        recipes have no nutrition figures to compare.
      </p>
    );
  }

  return (
    <section className="mt-8 max-w-3xl">
      <h2 className="text-xl text-ink">How they compare</h2>
      <p className="mt-1 text-[0.95rem] text-ink-soft">
        {cravingFood
          ? `One serving of each recipe next to ${cravingFood.label} (${cravingFood.portion}).`
          : "Nutrition for one serving of each recipe."}
      </p>
      <table className="mt-3 w-full border-collapse text-sm sm:text-[0.95rem]">
        <thead>
          <tr className="border-b border-line text-left align-bottom text-ink-soft">
            <th scope="col" className="py-2 pr-2 font-semibold">
              Per serving
            </th>
            {cravingFood && (
              <th scope="col" className="px-2 py-2 text-right font-semibold">
                Your craving
              </th>
            )}
            <th scope="col" className="px-2 py-2 text-right font-semibold">
              Quick &amp; Healthy
              {quick.nutritionEstimated && <span className="block font-normal">estimate</span>}
            </th>
            <th scope="col" className="py-2 pl-2 text-right font-semibold">
              Worth the Wait
              {elaborate.nutritionEstimated && <span className="block font-normal">estimate</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARED.map((row) => (
            <tr key={row.key} className="border-b border-line align-top">
              <th scope="row" className="py-2 pr-2 text-left font-normal text-ink">
                {row.label}
              </th>
              {cravingFood && (
                <td className="px-2 py-2 text-right text-ink">
                  {cravingFood[row.key] != null ? `${cravingFood[row.key]}${row.unit}` : "–"}
                </td>
              )}
              <td className="px-2 py-2 text-right text-ink">
                <RecipeFigure recipe={quick} cravingFood={cravingFood} row={row} />
              </td>
              <td className="py-2 pl-2 text-right text-ink">
                <RecipeFigure recipe={elaborate} cravingFood={cravingFood} row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-ink-soft">
        Recipe figures are per serving.
        {[quick, elaborate].some((recipe) => recipe.nutrition && !recipe.nutritionEstimated) &&
          " Those not marked as estimates are published by BBC Good Food."}
        {[quick, elaborate].some((recipe) => recipe.nutritionEstimated) &&
          " Figures marked “estimate” are worked out by AI from the ingredient list, not measured, so treat them as a rough guide."}
        {cravingFood &&
          " Craving figures are for a typical portion, from USDA FoodData Central; brands and portion sizes vary."}
        {(!quick.nutrition || !elaborate.nutrition) &&
          " A dash means the recipe has no figures."}
      </p>
    </section>
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

  const shownTitles = useRef([]); // titles already shown for this craving
  const nextBatch = useRef(null); // the next refresh, requested ahead of time
  const visit = useRef(0); // lets us ignore answers that arrive after the craving changed

  // Shows a batch of recommendations. With AI on, it also requests the next
  // batch straight away, so pressing refresh does not mean another wait.
  async function show(batchPromise, thisVisit) {
    setIsLoading(true);
    const batch = await batchPromise;
    if (thisVisit !== visit.current) return;
    shownTitles.current = [...shownTitles.current, batch.quick.title, batch.elaborate.title].slice(-20);
    setRecommendations(batch);
    setIsLoading(false);
    nextBatch.current = batch.source === "ai" ? getFreshRecommendations(craving, shownTitles.current) : null;
    remembered = { craving, batch, shownTitles: shownTitles.current, nextBatch: nextBatch.current };
  }

  useEffect(() => {
    const thisVisit = ++visit.current;
    setRefreshCount(0);

    if (remembered?.craving === craving) {
      shownTitles.current = remembered.shownTitles;
      nextBatch.current = remembered.nextBatch;
      setRecommendations(remembered.batch);
      setIsLoading(false);
      return () => {
        visit.current++;
      };
    }

    shownTitles.current = [];
    nextBatch.current = null;
    setRecommendations(null);
    // The timer stops React's development double-run from asking twice.
    const timer = setTimeout(() => show(getFreshRecommendations(craving, []), thisVisit), 0);
    return () => {
      clearTimeout(timer);
      visit.current++;
    };
  }, [craving]);

  function handleRefresh() {
    setRefreshCount((count) => count + 1);
    show(nextBatch.current ?? getFreshRecommendations(craving, shownTitles.current), visit.current);
  }

  const fromAi = recommendations?.source === "ai";
  // Only when the craving names a food we have figures for, so the comparison
  // is with what was typed and not with a different food of the same kind.
  const cravingFood = getCravingNutrition(craving, { keywordsOnly: true });

  return (
    <section>
      <p className="text-ink-soft">Instead of</p>
      <h1 className="text-3xl text-ink [overflow-wrap:anywhere] sm:text-4xl">{craving}</h1>

      {recommendations && !fromAi && !isKnownCraving(craving) && (
        <p className="mt-4 max-w-2xl rounded-lg bg-berry-50 px-4 py-3 text-ink">
          We don't have ideas for that exact craving yet, so here are some all-round favourites.
        </p>
      )}

      {/* One column on phones, three across from tablet width up. */}
      <div
        className={`mt-6 grid gap-4 transition-opacity md:grid-cols-3 md:gap-5 ${isLoading && recommendations ? "opacity-50" : ""}`}
        aria-live="polite"
        aria-busy={isLoading}
      >
        {!recommendations && (
          <>
            <div className="h-28 animate-pulse rounded-xl bg-line/60 md:h-80" />
            <div className="h-28 animate-pulse rounded-xl bg-line/60 md:h-80" />
          </>
        )}

        {recommendations && (
          <>
            {/* RecipeCard shows the category and cooking time itself. */}
            <RecipeCard
              key={recommendations.quick.id}
              recipe={recommendations.quick}
              onSelect={onSelectRecipe}
            />
            <RecipeCard
              key={recommendations.elaborate.id}
              recipe={recommendations.elaborate}
              onSelect={onSelectRecipe}
            />
          </>
        )}

        <NearbyFood key={refreshCount} craving={craving} />
      </div>

      {!recommendations && (
        <p className="mt-4 text-ink-soft" role="status">
          {isAiEnabled() ? "Writing two recipes for you. This takes a few seconds." : "Finding ideas."}
        </p>
      )}

      {recommendations && (
        <Comparison
          cravingFood={cravingFood}
          quick={recommendations.quick}
          elaborate={recommendations.elaborate}
        />
      )}

      {fromAi && (
        <p className="mt-4 max-w-2xl text-sm text-ink-soft">
          These recipes were written by AI and have not been reviewed. Check the ingredients and
          cooking steps before you make them.
        </p>
      )}

      <button
        type="button"
        onClick={handleRefresh}
        disabled={isLoading}
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        {isLoading ? "Finding ideas…" : "Show three new ideas"}
      </button>
    </section>
  );
}
