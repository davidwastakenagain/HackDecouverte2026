// PLACEHOLDER — Member 2 replaces this file.
// getRecommendations(craving) returns { quick: recipe, elaborate: recipe }.
// Calling it again for the same craving should return different options.

import { recipes } from "../data/recipes.js";

export function getRecommendations(craving) {
  return {
    quick: recipes.find((recipe) => recipe.category === "quick"),
    elaborate: recipes.find((recipe) => recipe.category === "elaborate"),
  };
}
