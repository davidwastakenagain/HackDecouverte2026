// Results page (Member 2).
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import { useEffect, useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import { getFreshRecommendations, isAiEnabled, isKnownCraving } from "../services/recommendationService.js";

function Label({ title, detail }) {
  return (
    <p className="mb-1.5 flex items-baseline justify-between gap-2 px-1">
      <span className="text-xs font-semibold uppercase tracking-wide text-sage-700">{title}</span>
      <span className="text-xs text-ink-soft">{detail}</span>
    </p>
  );
}

export default function Results({ craving, onSelectRecipe, onBack }) {
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
  }

  useEffect(() => {
    const thisVisit = ++visit.current;
    shownTitles.current = [];
    nextBatch.current = null;
    setRecommendations(null);
    setRefreshCount(0);
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
      <p className="text-sm text-ink-soft">Instead of</p>
      <h2 className="text-2xl font-bold leading-tight text-ink [overflow-wrap:anywhere]">{craving}</h2>

      {recommendations && !fromAi && !isKnownCraving(craving) && (
        <p className="mt-3 rounded-xl bg-sage-100 px-3 py-2 text-sm text-ink">
          We don't have ideas for that exact craving yet, so here are some all-round favourites.
        </p>
      )}

      <div className="mt-4 space-y-4" aria-live="polite" aria-busy={isLoading}>
        {!recommendations && (
          <p className="rounded-2xl bg-sage-100 px-4 py-8 text-center text-sm text-ink-soft">
            {isAiEnabled() ? "Writing two recipes for you. This takes a few seconds…" : "Finding ideas…"}
          </p>
        )}

        {recommendations && (
          <div className={`space-y-4 transition-opacity ${isLoading ? "opacity-50" : ""}`}>
            <div>
              <Label title="Quick & Healthy" detail="about 10–15 min" />
              <RecipeCard
                key={recommendations.quick.id}
                recipe={recommendations.quick}
                onSelect={onSelectRecipe}
              />
            </div>
            <div>
              <Label title="Worth the Wait" detail="about 30–45 min" />
              <RecipeCard
                key={recommendations.elaborate.id}
                recipe={recommendations.elaborate}
                onSelect={onSelectRecipe}
              />
            </div>
          </div>
        )}

        <div>
          <Label title="Nearby Food" detail="close to you" />
          <NearbyFood key={refreshCount} craving={craving} />
        </div>
      </div>

      {fromAi && (
        <p className="mt-3 px-1 text-xs text-ink-soft">
          These recipes were written by AI and have not been reviewed. Check the ingredients and
          cooking steps before you make them.
        </p>
      )}

      <button
        type="button"
        onClick={handleRefresh}
        disabled={isLoading}
        className="mt-5 w-full rounded-full bg-sage-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Finding ideas…" : "↻ Show me 3 new ideas"}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="mt-2 w-full rounded-full px-4 py-2 text-sm font-medium text-sage-700 hover:underline"
      >
        Try a different craving
      </button>
    </section>
  );
}
