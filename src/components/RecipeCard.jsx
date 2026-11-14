// Recipe card (owned by Member 3). Used by Results and SavedRecipes.
// Props: recipe (recipe object), onSelect(recipe).

const CATEGORY_LABELS = {
  quick: "Quick & Healthy",
  elaborate: "Worth the Wait",
  nearby: "Nearby Food",
};

const CATEGORY_EMOJI = {
  quick: "🥗",
  elaborate: "🍲",
  nearby: "📍",
};

export default function RecipeCard({ recipe, onSelect }) {
  if (!recipe) return null;

  return (
    <button
      type="button"
      onClick={() => onSelect(recipe)}
      className="flex w-full items-center gap-3 rounded-2xl border border-sage-100 bg-white p-3 text-left shadow-sm transition hover:border-sage-300 active:scale-[0.99]"
    >
      {recipe.image ? (
        <img
          src={recipe.image}
          alt=""
          className="h-20 w-20 shrink-0 rounded-xl object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-3xl"
        >
          {CATEGORY_EMOJI[recipe.category] || "🍽️"}
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-semibold tracking-wide text-sage-500 uppercase">
          {CATEGORY_LABELS[recipe.category] || recipe.category}
        </span>
        <span className="block font-semibold text-ink">{recipe.title}</span>
        {recipe.description && (
          <span className="block truncate text-sm text-ink-soft">
            {recipe.description}
          </span>
        )}
        <span className="mt-1 block text-xs text-ink-soft">
          ⏱ {recipe.cookingTime}
        </span>
      </span>
    </button>
  );
}
