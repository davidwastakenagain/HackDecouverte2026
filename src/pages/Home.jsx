// Home page (Member 2).
// Props: onSubmitCraving(craving) — call with the craving text to open Results.

import { useState } from "react";
import { FoodPhoto } from "../components/RecipeCard.jsx";
import { getCravingNutrition } from "../services/recommendationService.js";

const SUGGESTIONS = ["Cheeseburger", "Ice cream", "Fries", "Pizza", "Chocolate"];

const STEPS = [
  { title: "Quick & Healthy", text: "A simple recipe ready in 30 minutes or less." },
  { title: "Worth the Wait", text: "A more elaborate recipe for when you have 30–90 minutes." },
  { title: "Nearby Food", text: "An option to look for at a place close to you." },
];

export default function Home({ onSubmitCraving }) {
  const [value, setValue] = useState("");
  const craving = value.trim();

  function handleSubmit(event) {
    event.preventDefault();
    if (craving) onSubmitCraving(craving);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold leading-tight text-ink">What are you craving?</h2>
      <p className="mt-1 text-sm text-ink-soft">
        Tell us what you feel like eating and we'll suggest three lighter ways to enjoy it.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
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
          className="w-full rounded-2xl border border-sage-300 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft focus:border-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-300"
        />
        {/* Live photo of what's being typed. Known cravings ("burger", "kit kat")
            use their stored Wikipedia photo straight away; anything else is
            searched for after a short pause. */}
        <FoodPhoto
          photo={getCravingNutrition(craving, { keywordsOnly: true })?.image}
          query={craving}
          delay={600}
          emoji="🍽️"
          className="mt-3 aspect-video w-full rounded-2xl text-4xl"
        />
        <button
          type="submit"
          disabled={!craving}
          className="mt-3 w-full rounded-full bg-sage-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          Find alternatives
        </button>
      </form>

      <p className="mt-5 text-sm font-medium text-ink">Popular cravings</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onSubmitCraving(suggestion)}
            className="rounded-full border border-sage-300 bg-white px-3 py-1.5 text-sm text-ink transition hover:border-sage-700 hover:bg-sage-100"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-sage-100 p-4">
        <p className="text-sm font-semibold text-ink">You'll get three options</p>
        <ol className="mt-2 space-y-2">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-3 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-700 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span className="text-ink-soft">
                <span className="font-semibold text-ink">{step.title}.</span> {step.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
