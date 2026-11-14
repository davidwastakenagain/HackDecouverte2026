// PLACEHOLDER — Member 2 replaces this file.
// Props: onSubmitCraving(craving) — call with the craving text to open Results.

export default function Home({ onSubmitCraving }) {
  return (
    <section className="rounded-2xl border border-dashed border-sage-300 bg-sage-100 p-4">
      <h2 className="font-semibold text-sage-700">Home (placeholder)</h2>
      <p className="mt-1 text-sm text-ink-soft">
        Member 2 builds the craving input here.
      </p>
      <button
        type="button"
        onClick={() => onSubmitCraving("cheeseburger")}
        className="mt-3 rounded-full bg-sage-500 px-4 py-2 text-sm font-medium text-white"
      >
        Test: submit "cheeseburger"
      </button>
    </section>
  );
}
