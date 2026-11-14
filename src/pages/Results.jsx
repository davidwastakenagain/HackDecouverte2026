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
import { getProfile, isProfileEmpty } from "../services/userDataService.js";
import {
  checkRecipe,
  getProfileNotes,
  medicationLabels,
  profileKey,
  restrictionLabels,
} from "../services/dietaryService.js";
import { PREGNANCY_NUTRIENTS } from "../data/pregnancyNutrients.js";

const CATEGORY_LABELS = { quick: "Quick & Healthy", elaborate: "Worth the Wait" };

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
  const value = recipe?.nutrition?.[row.key];
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
  // Either recipe can be missing when the dietary profile rules it out.
  const shown = [quick, elaborate].filter(Boolean);
  const hasRecipeFigures = shown.some((recipe) => recipe.nutrition);
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
              {quick?.nutritionEstimated && <span className="block font-normal">estimate</span>}
            </th>
            <th scope="col" className="py-2 pl-2 text-right font-semibold">
              Worth the Wait
              {elaborate?.nutritionEstimated && <span className="block font-normal">estimate</span>}
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
        {shown.some((recipe) => recipe.nutrition && !recipe.nutritionEstimated) &&
          " Those not marked as estimates are published by BBC Good Food."}
        {shown.some((recipe) => recipe.nutritionEstimated) &&
          " Figures marked “estimate” are worked out by AI from the ingredient list, not measured, so treat them as a rough guide."}
        {cravingFood &&
          " Craving figures are for a typical portion, from USDA FoodData Central; brands and portion sizes vary."}
        {(!quick?.nutrition || !elaborate?.nutrition) &&
          " A dash means the recipe has no figures."}
      </p>
    </section>
  );
}

// What one recipe gives that matters in pregnancy: each nutrient its
// ingredients provide, why it matters for mother and baby, and the grams per
// serving where the recipe has a figure. Below it, any notes for this user's
// medicines or diet (from dietaryService.js).
function Highlights({ recipe, profile }) {
  const nutrients = (recipe.nutrients ?? []).filter((nutrient) => PREGNANCY_NUTRIENTS[nutrient.name]);
  const { notes } = checkRecipe(recipe, profile);
  if (nutrients.length === 0 && notes.length === 0) return null;

  return (
    <article className="card">
      <span className="chip">{CATEGORY_LABELS[recipe.category] || recipe.category}</span>
      <h3 className="mt-2 font-display text-lg leading-snug font-semibold text-ink">{recipe.title}</h3>

      {nutrients.length > 0 && (
        <ul className="mt-3 space-y-2">
          {nutrients.map((nutrient) => {
            const fact = PREGNANCY_NUTRIENTS[nutrient.name];
            const grams = fact.figure ? recipe.nutrition?.[fact.figure] : null;
            return (
              <li key={nutrient.name} className="rounded-lg border-l-4 border-berry-600 bg-berry-50 px-3 py-2">
                <span className="font-semibold text-berry-700">{nutrient.name}</span>
                {grams != null && (
                  <span className="font-semibold text-ink">
                    {" "}
                    · {recipe.nutritionEstimated ? "about " : ""}
                    {grams} g per serving
                  </span>
                )}
                <span className="block text-ink">{fact.why}</span>
                <span className="block text-sm text-ink-soft">From {nutrient.from.join(", ")}.</span>
              </li>
            );
          })}
        </ul>
      )}

      {notes.length > 0 && (
        <div className="mt-3 rounded-lg border border-line p-3">
          <p className="font-semibold text-ink">For you</p>
          <ul className="mt-1 space-y-1.5 text-[0.95rem] text-ink">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

// Shown in place of a recipe card when the dietary profile rules out every
// recipe of that kind.
function NoRecipe({ category }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-4">
      <span className="chip self-start">{CATEGORY_LABELS[category]}</span>
      <p className="mt-2 font-display text-lg leading-snug font-semibold text-ink">
        No recipe fits your food needs
      </p>
      <p className="mt-1 text-[0.95rem] text-ink-soft">
        Every recipe of this kind has something you asked us to leave out. You can change your food
        needs on the Cravings page.
      </p>
    </div>
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
  // The saved dietary profile. It can only change on the Cravings page, so it
  // is read once when this page opens.
  const [profile] = useState(getProfile);
  const profileId = profileKey(profile);

  const shownTitles = useRef([]); // titles already shown for this craving
  const nextBatch = useRef(null); // the next refresh, requested ahead of time
  const visit = useRef(0); // lets us ignore answers that arrive after the craving changed

  // Shows a batch of recommendations. With AI on, it also requests the next
  // batch straight away, so pressing refresh does not mean another wait.
  async function show(batchPromise, thisVisit) {
    setIsLoading(true);
    const batch = await batchPromise;
    if (thisVisit !== visit.current) return;
    const titles = [batch.quick, batch.elaborate].filter(Boolean).map((recipe) => recipe.title);
    shownTitles.current = [...shownTitles.current, ...titles].slice(-20);
    setRecommendations(batch);
    setIsLoading(false);
    nextBatch.current = batch.source === "ai" ? getFreshRecommendations(craving, shownTitles.current) : null;
    remembered = { craving, profileId, batch, shownTitles: shownTitles.current, nextBatch: nextBatch.current };
  }

  useEffect(() => {
    const thisVisit = ++visit.current;
    setRefreshCount(0);

    if (remembered?.craving === craving && remembered.profileId === profileId) {
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

  const leftOut = restrictionLabels(profile);
  const medicines = medicationLabels(profile);
  const profileNotes = getProfileNotes(craving, profile);
  const shownRecipes = recommendations
    ? [recommendations.quick, recommendations.elaborate].filter(Boolean)
    : [];

  return (
    <section>
      <p className="text-ink-soft">Instead of</p>
      <h1 className="text-3xl text-ink [overflow-wrap:anywhere] sm:text-4xl">{craving}</h1>

      {!isProfileEmpty(profile) && (
        <div className="mt-4 max-w-2xl rounded-lg border border-line bg-surface px-4 py-3 text-[0.95rem] text-ink">
          <p className="[overflow-wrap:anywhere]">
            <span className="font-semibold">Matched to your food needs.</span>
            {leftOut.length > 0 && ` Leaving out: ${leftOut.join(", ")}.`}
            {medicines.length > 0 && ` Medicines checked: ${medicines.join(", ")}.`}
            {profile.otherMedications.trim() &&
              ` Not checked: ${profile.otherMedications.trim()}. Ask your pharmacist about food and this medicine.`}
          </p>
          {profileNotes.map((note) => (
            <p key={note} className="mt-2 font-semibold text-warn">
              {note}
            </p>
          ))}
          <p className="mt-2 text-sm text-ink-soft">
            Recipes are matched on their ingredient lists. Always check the labels of packaged
            ingredients, and follow the advice of your own doctor, midwife or pharmacist.
          </p>
        </div>
      )}

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
            {recommendations.quick ? (
              <RecipeCard
                key={recommendations.quick.id}
                recipe={recommendations.quick}
                onSelect={onSelectRecipe}
              />
            ) : (
              <NoRecipe category="quick" />
            )}
            {recommendations.elaborate ? (
              <RecipeCard
                key={recommendations.elaborate.id}
                recipe={recommendations.elaborate}
                onSelect={onSelectRecipe}
              />
            ) : (
              <NoRecipe category="elaborate" />
            )}
          </>
        )}

        <NearbyFood key={refreshCount} craving={craving} />
      </div>

      {!recommendations && (
        <p className="mt-4 text-ink-soft" role="status">
          {isAiEnabled() ? "Writing two recipes for you. This takes a few seconds." : "Finding ideas."}
        </p>
      )}

      {shownRecipes.some((recipe) => recipe.nutrients?.length > 0 || checkRecipe(recipe, profile).notes.length > 0) && (
        <section className="mt-8">
          <h2 className="text-xl text-ink">Good for you and your baby</h2>
          <p className="mt-1 max-w-2xl text-[0.95rem] text-ink-soft">
            The nutrients in these recipes that matter most in pregnancy, and what they do.
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-2 md:gap-5">
            {shownRecipes.map((recipe) => (
              <Highlights key={recipe.id} recipe={recipe} profile={profile} />
            ))}
          </div>
          <p className="mt-2 max-w-3xl text-sm text-ink-soft">
            Nutrients are worked out from each recipe's ingredients, following NHS guidance on
            eating well in pregnancy. Only protein and fibre have a measured or estimated amount.
            This is general information, not medical advice.
          </p>
        </section>
      )}

      {shownRecipes.length > 0 && (
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
