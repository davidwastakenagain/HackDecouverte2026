// PLACEHOLDER — Member 3 replaces this file.
// Props: recipe (recipe object), onSelect(recipe).

export default function RecipeCard({ recipe, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(recipe)}
      className="block w-full rounded-2xl border border-dashed border-sage-300 bg-white p-4 text-left"
    >
      <span className="block font-semibold text-ink">{recipe.title}</span>
      <span className="block text-sm text-ink-soft">
        RecipeCard placeholder · {recipe.category} · {recipe.cookingTime}
      </span>
    </button>
  );
}
