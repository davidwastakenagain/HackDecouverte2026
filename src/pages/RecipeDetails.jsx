// PLACEHOLDER — Member 3 replaces this file.
// Props: recipe (full recipe object), onBack().
// Saved recipes go in LocalStorage under "cravebetter.savedRecipes".

export default function RecipeDetails({ recipe }) {
  return (
    <section className="rounded-2xl border border-dashed border-sage-300 bg-sage-100 p-4">
      <h2 className="font-semibold text-sage-700">
        Recipe details (placeholder)
      </h2>
      <p className="mt-1 text-sm text-ink-soft">
        Member 3 builds the ingredients, instructions and save button for "
        {recipe.title}" here.
      </p>
    </section>
  );
}
