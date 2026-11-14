// Results page (Member 2).
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import { getRecommendations, isKnownCraving } from "../services/recommendationService.js";

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
  // Counts refreshes. Used as a key so NearbyFood loads a new option too.
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    setRecommendations(getRecommendations(craving));
    setRefreshCount(0);
  }, [craving]);

  function handleRefresh() {
    setRecommendations(getRecommendations(craving));
    setRefreshCount((count) => count + 1);
  }

  if (!recommendations) return null;
  const { quick, elaborate } = recommendations;

  return (
    <section>
      <p className="text-sm text-ink-soft">Instead of</p>
      <h2 className="text-2xl font-bold leading-tight text-ink [overflow-wrap:anywhere]">{craving}</h2>

      {!isKnownCraving(craving) && (
        <p className="mt-3 rounded-xl bg-sage-100 px-3 py-2 text-sm text-ink">
          We don't have ideas for that exact craving yet, so here are some all-round favourites.
        </p>
      )}

      <div className="mt-4 space-y-4" aria-live="polite">
        <div>
          <Label title="Quick & Healthy" detail="about 10–15 min" />
          <RecipeCard key={quick.id} recipe={quick} onSelect={onSelectRecipe} />
        </div>
        <div>
          <Label title="Worth the Wait" detail="about 30–45 min" />
          <RecipeCard key={elaborate.id} recipe={elaborate} onSelect={onSelectRecipe} />
        </div>
        <div>
          <Label title="Nearby Food" detail="close to you" />
          <NearbyFood key={refreshCount} craving={craving} />
        </div>
      </div>

      <button
        type="button"
        onClick={handleRefresh}
        className="mt-5 w-full rounded-full bg-sage-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-ink"
      >
        ↻ Show me 3 new ideas
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
