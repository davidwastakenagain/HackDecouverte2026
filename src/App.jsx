// App shell (owned by Member 1).
// Keeps track of which screen is showing and passes props to each page.
// The props each page receives are documented in CLAUDE.md, section 6.

import { useState } from "react";
import Header from "./components/Header.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import SavedRecipes from "./pages/SavedRecipes.jsx";

const TITLES = {
  home: "CraveBetter",
  results: "Your options",
  recipe: "Recipe",
  saved: "Saved recipes",
};

export default function App() {
  // screen is one of: "home", "results", "recipe", "saved"
  const [screen, setScreen] = useState("home");
  const [craving, setCraving] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // Remembers where the recipe was opened from, so Back returns there.
  const [recipeOpenedFrom, setRecipeOpenedFrom] = useState("results");

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
  if (screen === "results") onBack = () => setScreen("home");
  if (screen === "recipe") onBack = () => setScreen(recipeOpenedFrom);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-blush-50 shadow-xl">
      <Header
        title={TITLES[screen]}
        onBack={onBack}
        brand={screen === "home"}
      />

      <main className="flex-1 px-4 pt-2 pb-28">
        {screen === "home" && <Home onSubmitCraving={handleSubmitCraving} />}

        {screen === "results" && (
          <Results
            craving={craving}
            onSelectRecipe={handleSelectRecipe}
            onBack={onBack}
          />
        )}

        {screen === "recipe" && selectedRecipe && (
          <RecipeDetails recipe={selectedRecipe} onBack={onBack} />
        )}

        {screen === "saved" && (
          <SavedRecipes onSelectRecipe={handleSelectRecipe} />
        )}

        <p className="mt-8 text-center text-xs text-ink-soft">
          CraveBetter offers food suggestions only. It is not medical advice.
          Check with your healthcare provider about what is right for you.
        </p>
      </main>

      <BottomNavigation
        current={screen === "saved" ? "saved" : "home"}
        onNavigate={setScreen}
      />
    </div>
  );
}
