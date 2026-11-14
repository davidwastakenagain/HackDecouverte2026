// PLACEHOLDER — Member 2 replaces this file.
// Props: craving (string), onSelectRecipe(recipe), onBack().
// Uses RecipeCard (Member 3) for the two recipes and NearbyFood (Member 4)
// for the third recommendation.

import RecipeCard from "../components/RecipeCard.jsx";
import NearbyFood from "../components/NearbyFood.jsx";
import { getRecommendations } from "../services/recommendationService.js";

export default function Results({ craving, onSelectRecipe }) {
  const { quick, elaborate } = getRecommendations(craving);

  return (
    <section className="space-y-3">
      <div className="rounded-2xl border border-dashed border-sage-300 bg-sage-100 p-4">
        <h2 className="font-semibold text-sage-700">Results (placeholder)</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Member 2 builds the three recommendations for "{craving}" here.
        </p>
      </div>
      <RecipeCard recipe={quick} onSelect={onSelectRecipe} />
      <RecipeCard recipe={elaborate} onSelect={onSelectRecipe} />
      <NearbyFood craving={craving} />
    </section>
  );
}
