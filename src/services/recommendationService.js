// Recommendation service (Member 2).
// getRecommendations(craving) returns { quick: recipe, elaborate: recipe }.
// Calling it again for the same craving returns different options (refresh).
//
// Recipes come from src/data/recipes.js. A recipe belongs to a craving group
// through its id: "burger-quick-1" is in the "burger" group.

import { recipes } from "../data/recipes.js";

const CRAVING_GROUPS = [
  { id: "burger", keywords: ["burger", "cheeseburger", "hamburger", "big mac", "whopper", "slider"] },
  { id: "ice-cream", keywords: ["ice cream", "icecream", "gelato", "sundae", "milkshake", "frozen yogurt", "froyo", "popsicle", "mcflurry"] },
  { id: "fries", keywords: ["fries", "french fries", "chips", "poutine", "tater tots", "potato wedges", "hash brown", "onion rings"] },
  { id: "pizza", keywords: ["pizza", "calzone", "garlic bread", "pepperoni"] },
  { id: "chocolate", keywords: ["chocolate", "brownie", "cookie", "candy", "cake", "donut", "doughnut", "sweet", "dessert", "nutella", "cupcake"] },
];

// Used when the craving doesn't match any group above.
const GENERAL_GROUP = "general";

// Finds the group for a craving, or null. The longest matching keyword wins,
// so "chocolate ice cream" is ice cream, not chocolate.
function findGroup(craving) {
  const text = String(craving ?? "").toLowerCase();
  let best = null;
  let bestLength = 0;
  for (const group of CRAVING_GROUPS) {
    for (const keyword of group.keywords) {
      if (keyword.length > bestLength && text.includes(keyword)) {
        best = group.id;
        bestLength = keyword.length;
      }
    }
  }
  return best;
}

// Recipe ids already returned, oldest first, per group and category.
const shownIds = {};

function pickNext(groupId, category) {
  const pool = recipes.filter(
    (recipe) => recipe.category === category && recipe.id.startsWith(`${groupId}-`),
  );
  const key = `${groupId}:${category}`;
  const shown = shownIds[key] ?? [];

  // Prefer something not shown yet. Once everything has been shown, go back
  // to the one shown longest ago, so a refresh never repeats the current card.
  const unseen = pool.filter((recipe) => !shown.includes(recipe.id));
  const choice =
    unseen.length > 0
      ? unseen[Math.floor(Math.random() * unseen.length)]
      : pool.find((recipe) => recipe.id === shown[0]) ?? pool[0];

  shownIds[key] = [...shown.filter((id) => id !== choice.id), choice.id];
  return choice;
}

export function getRecommendations(craving) {
  const groupId = findGroup(craving) ?? GENERAL_GROUP;
  return {
    quick: pickNext(groupId, "quick"),
    elaborate: pickNext(groupId, "elaborate"),
  };
}

// True when we have recipes written for this craving. When false,
// getRecommendations returns general all-round ideas instead.
export function isKnownCraving(craving) {
  return findGroup(craving) !== null;
}
