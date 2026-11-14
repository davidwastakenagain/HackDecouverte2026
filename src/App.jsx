// App shell (owned by Member 1).
// Keeps track of which screen is showing and passes props to each page.
// The props each page receives are documented in CLAUDE.md, section 6.
//
// Layout: a site header on every screen (with the navigation links on wider
// screens), the page in a centered column that grows up to 72rem, a footer,
// and a tab bar fixed to the bottom on phones.

import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";
import FoodBuddy from "./components/FoodBuddy.jsx";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import SavedRecipes from "./pages/SavedRecipes.jsx";
import About from "./pages/About.jsx";

// The sections shown in the header and the phone tab bar.
const NAV_ITEMS = [
  { screen: "home", label: "Cravings" },
  { screen: "saved", label: "Saved" },
  { screen: "about", label: "How it helps" },
];

export default function App() {
  // screen is one of: "home", "results", "recipe", "saved", "about"
  const [screen, setScreen] = useState("home");
  const [craving, setCraving] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // Remembers where the recipe was opened from, so Back returns there.
  const [recipeOpenedFrom, setRecipeOpenedFrom] = useState("results");

  // Each screen starts at the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  function handleSubmitCraving(newCraving) {
    setCraving(newCraving);
    setScreen("results");
  }

  function handleSelectRecipe(recipe) {
    setSelectedRecipe(recipe);
    setRecipeOpenedFrom(screen);
    setScreen("recipe");
  }

  let onBack;
  let backLabel;
  if (screen === "results") {
    onBack = () => setScreen("home");
    backLabel = "Change craving";
  }
  if (screen === "recipe") {
    onBack = () => setScreen(recipeOpenedFrom);
    backLabel = recipeOpenedFrom === "saved" ? "Back to saved recipes" : "Back to your options";
  }

  // Which navigation item is highlighted.
  let section = "home";
  if (screen === "saved" || (screen === "recipe" && recipeOpenedFrom === "saved")) section = "saved";
  if (screen === "about") section = "about";

  return (
    <div className="flex min-h-dvh flex-col">
      <Header items={NAV_ITEMS} current={section} onNavigate={setScreen} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-12 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mb-5 inline-flex items-center gap-1.5 rounded-full border-2 border-line bg-surface py-1.5 pr-4 pl-3 text-[0.95rem] font-extrabold text-ink-soft shadow-[0_3px_0_0_var(--color-line)] transition-transform hover:-translate-y-0.5 hover:text-ink active:translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
            {backLabel}
          </button>
        )}

        {screen === "home" && (
          <Home onSubmitCraving={handleSubmitCraving} onOpenAbout={() => setScreen("about")} />
        )}

        {screen === "results" && (
          <Results craving={craving} onSelectRecipe={handleSelectRecipe} onBack={onBack} />
        )}

        {screen === "recipe" && selectedRecipe && (
          <RecipeDetails recipe={selectedRecipe} onBack={onBack} />
        )}

        {screen === "saved" && <SavedRecipes onSelectRecipe={handleSelectRecipe} />}

        {screen === "about" && <About onStart={() => setScreen("home")} />}
      </main>

      {/* The bottom padding keeps the footer clear of the phone tab bar. */}
      <footer className="border-t-2 border-line bg-surface/70 pb-24 md:pb-0">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <FoodBuddy name="avocado" className="h-10 w-10 shrink-0" />
          <p className="text-sm text-ink-soft">
            Cravely offers food suggestions only. It is not medical advice. Check with your
            healthcare provider about what is right for you.
          </p>
        </div>
      </footer>

      <BottomNavigation items={NAV_ITEMS} current={section} onNavigate={setScreen} />
    </div>
  );
}
