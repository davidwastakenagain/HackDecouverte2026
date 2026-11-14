// Home page (Member 2).
// Props:
//   onSubmitCraving(craving) — call with the craving text to open Results.
//   onOpenAbout()            — optional; opens the "How it helps" page.

import { useState } from "react";
import { FoodPhoto } from "../components/RecipeCard.jsx";

const SUGGESTIONS = ["Cheeseburger", "Ice cream", "Fries", "Pizza", "Chocolate"];

const OPTIONS = [
  { title: "Quick & Healthy", text: "A recipe ready in about 25 minutes or less." },
  { title: "Worth the Wait", text: "A more involved recipe for when you have 30 to 60 minutes." },
  { title: "Nearby Food", text: "A map search for places close to you." },
];

export default function Home({ onSubmitCraving, onOpenAbout }) {
  const [value, setValue] = useState("");
  const craving = value.trim();

  function handleSubmit(event) {
    event.preventDefault();
    if (craving) onSubmitCraving(craving);
  }

  return (
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-start lg:gap-16">
      <div>
        <h1 className="text-4xl text-ink sm:text-5xl">What are you craving?</h1>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">
          Type it in. You'll get two recipes that go after the same craving, picked with pregnancy
          food-safety guidance in mind, and a place to look nearby.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor="craving-input" className="sr-only">
            Your craving
          </label>
          <input
            id="craving-input"
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="e.g. cheeseburger"
            maxLength={60}
            autoComplete="off"
            enterKeyHint="search"
            className="field min-w-0 flex-1 text-base"
          />
          <button type="submit" disabled={!craving} className="btn-primary shrink-0">
            Find alternatives
          </button>
        </form>

        <div className="mt-5 flex max-w-xl flex-wrap items-center gap-2">
          <span className="text-sm text-ink-soft">Popular:</span>
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onSubmitCraving(suggestion)}
              className="rounded-md border border-line bg-surface px-3 py-1 text-[0.95rem] text-ink transition-colors hover:border-ink-soft"
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Live photo of what's being typed, updated after a short pause. */}
        {craving && (
          <FoodPhoto
            query={craving}
            delay={400}
            alt=""
            className="mt-6 aspect-video w-full max-w-xl rounded-xl border border-line"
          />
        )}
      </div>

      <aside className="card">
        <h2 className="text-xl text-ink">What you get</h2>
        <ol className="mt-4 space-y-4">
          {OPTIONS.map((option, index) => (
            <li key={option.title} className="flex gap-3">
              <span className="font-display text-xl leading-6 font-semibold text-berry-600">
                {index + 1}
              </span>
              <span>
                <span className="block font-semibold text-ink">{option.title}</span>
                <span className="block text-ink-soft">{option.text}</span>
              </span>
            </li>
          ))}
        </ol>
        {onOpenAbout && (
          <button
            type="button"
            onClick={onOpenAbout}
            className="mt-5 font-semibold text-berry-700 underline underline-offset-2 hover:text-berry-600"
          >
            How it helps during pregnancy
          </button>
        )}
      </aside>
    </section>
  );
}
