// Home page (Member 2).
// Props:
//   onSubmitCraving(craving) — call with the craving text to open Results.
//   onOpenAbout()            — optional; opens the "How it helps" page.

import { useState } from "react";
import FoodBuddy from "../components/FoodBuddy.jsx";
import { FoodPhoto } from "../components/RecipeCard.jsx";
import DietaryProfile from "../components/DietaryProfile.jsx";
import { getCravingNutrition } from "../services/recommendationService.js";
import {
  addSearch,
  clearSearchHistory,
  clearUserData,
  getProfile,
  getSearchHistory,
  isProfileEmpty,
} from "../services/userDataService.js";

// Popular cravings, each with its food buddy.
const SUGGESTIONS = [
  { label: "Cheeseburger", buddy: "burger" },
  { label: "Ice cream", buddy: "icecream" },
  { label: "Fries", buddy: "fries" },
  { label: "Pizza", buddy: "pizza" },
  { label: "Chocolate", buddy: "cookie" },
];

const OPTIONS = [
  { title: "Quick & Healthy", text: "A recipe ready in 30 minutes or less.", buddy: "avocado", fill: "bg-mint" },
  { title: "Worth the Wait", text: "A more involved recipe for when you have 30 to 90 minutes.", buddy: "pizza", fill: "bg-butter" },
  { title: "Nearby Food", text: "A map search for places close to you.", buddy: "boba", fill: "bg-lilac" },
];

// A little group of food buddies. Decoration only.
function BuddyGroup({ className = "" }) {
  return (
    <div className={`flex items-end justify-center ${className}`} aria-hidden="true">
      <FoodBuddy name="strawberry" className="h-[38%] w-auto -rotate-12 animate-float [animation-delay:-1s]" />
      <FoodBuddy name="boba" className="-mx-[3%] h-full w-auto animate-float" />
      <FoodBuddy name="avocado" className="h-[46%] w-auto rotate-12 animate-float [animation-delay:-2s]" />
    </div>
  );
}

export default function Home({ onSubmitCraving, onOpenAbout }) {
  const [value, setValue] = useState("");
  const craving = value.trim();
  // Both are kept in this browser by userDataService.js.
  const [profile, setProfile] = useState(getProfile);
  const [history, setHistory] = useState(getSearchHistory);

  // Remembers the search, then opens the results.
  function search(text) {
    addSearch(text);
    onSubmitCraving(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (craving) search(craving);
  }

  function handleClearHistory() {
    clearSearchHistory();
    setHistory([]);
  }

  function handleClearAll() {
    clearUserData();
    setProfile(getProfile());
    setHistory([]);
  }

  return (
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-start lg:gap-14">
      <div>
        {/* On phones the buddies sit above the heading; on wide screens they are in the side column. */}
        <BuddyGroup className="mb-3 h-28 lg:hidden" />

        <h1 className="text-center text-4xl text-ink sm:text-5xl lg:text-left lg:text-6xl">
          What are you craving?
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-ink-soft lg:mx-0 lg:text-left">
          Type it in. You'll get two recipes that go after the same craving, picked with pregnancy
          food-safety guidance in mind, and a place to look nearby.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row lg:mx-0"
        >
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

        <div className="mx-auto mt-6 max-w-xl lg:mx-0">
          <p className="text-center text-sm font-bold text-ink-soft lg:text-left">Popular cravings</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 lg:justify-start">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion.label}
                type="button"
                onClick={() => search(suggestion.label)}
                className="group flex items-center gap-1 rounded-full border-2 border-line bg-surface py-1 pr-3.5 pl-1.5 font-bold text-ink shadow-[0_3px_0_0_var(--color-line)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
              >
                <FoodBuddy name={suggestion.buddy} className="h-8 w-8 group-hover:animate-wiggle" />
                {suggestion.label}
              </button>
            ))}
          </div>
        </div>

        {history.length > 0 && (
          <div className="mx-auto mt-5 max-w-xl lg:mx-0">
            <p className="text-center text-sm font-bold text-ink-soft lg:text-left">Your recent searches</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {history.map((item) => (
                <button
                  key={item.craving}
                  type="button"
                  onClick={() => search(item.craving)}
                  className="max-w-full truncate rounded-full border-2 border-line bg-surface px-3.5 py-1 font-bold text-ink shadow-[0_3px_0_0_var(--color-line)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  {item.craving}
                </button>
              ))}
              <button
                type="button"
                onClick={handleClearHistory}
                className="px-1 text-sm font-extrabold text-berry-700 underline decoration-2 underline-offset-4 hover:text-berry-600"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Live photo of what's being typed. Known cravings ("burger", "kit kat")
            use their stored Wikipedia photo straight away; anything else is
            searched for after a short pause. */}
        {craving && (
          <FoodPhoto
            photo={getCravingNutrition(craving, { keywordsOnly: true })?.image}
            query={craving}
            delay={600}
            alt=""
            className="mx-auto mt-6 aspect-video w-full max-w-xl rounded-3xl border-2 border-line lg:mx-0"
          />
        )}

        <div className="mx-auto max-w-xl lg:mx-0">
          <DietaryProfile profile={profile} onChange={setProfile} />

          {(history.length > 0 || !isProfileEmpty(profile)) && (
            <button
              type="button"
              onClick={handleClearAll}
              className="mt-3 text-sm font-bold text-ink-soft underline underline-offset-4 hover:text-ink"
            >
              Delete my food needs and search history from this browser
            </button>
          )}
        </div>
      </div>

      <aside>
        <BuddyGroup className="hidden h-44 lg:flex" />
        <div className="card lg:-mt-3">
          <h2 className="text-2xl text-ink">What you get</h2>
          <ol className="mt-3 space-y-3">
            {OPTIONS.map((option) => (
              <li key={option.title} className={`flex items-center gap-3 rounded-2xl p-2.5 ${option.fill}`}>
                <FoodBuddy name={option.buddy} className="h-12 w-12 shrink-0" />
                <span>
                  <span className="block leading-snug font-extrabold text-ink">{option.title}</span>
                  <span className="block text-[0.95rem] leading-snug text-ink-soft">{option.text}</span>
                </span>
              </li>
            ))}
          </ol>
          {onOpenAbout && (
            <button
              type="button"
              onClick={onOpenAbout}
              className="mt-4 font-extrabold text-berry-700 underline decoration-2 underline-offset-4 hover:text-berry-600"
            >
              How it helps during pregnancy
            </button>
          )}
        </div>
      </aside>
    </section>
  );
}
