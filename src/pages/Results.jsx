// Results page (Member 2).
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import { useEffect, useRef, useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import { getFreshRecommendations, isKnownCraving } from "../services/recommendationService.js";

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
