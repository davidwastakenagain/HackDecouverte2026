// Results page (Member 2).
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import { useEffect, useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import { getFreshRecommendations, isAiEnabled, isKnownCraving } from "../services/recommendationService.js";

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
