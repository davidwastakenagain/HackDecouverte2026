// Estimated nutrition and pregnancy notes for recipes that have no published
// figures (Member 2). Used by the recipe server (index.js) for AI-written
// recipes and by estimate-extras.js for the team-written recipes.
//
// The model fills in a fixed form: numbers per serving, and choices from fixed
// lists for nutrients, allergens and pregnancy notes. The wording shown in the
// app for each note is written here, not by the model.
//
// These are estimates from the ingredient list. The app labels them as such.

import { z } from "zod";

export const NUTRIENT_NAMES = ["Folate", "Iron", "Calcium", "Protein", "Omega-3", "Fibre", "Vitamin C"];

export const ALLERGEN_NAMES = [
  "Milk",
  "Egg",
  "Wheat (gluten)",
  "Fish",
  "Shellfish",
  "Peanuts",
  "Tree nuts",
  "Soy",
  "Sesame",
  "Mustard",
  "Celery",
];

// Pregnancy notes the model may attach, with the sentence shown in the app.
// The wording matches the notes on the published recipes in src/data/recipes.js.
export const CAUTION_TEXT = {
  cook_through:
    "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
  oily_fish:
    "Contains oily fish. The NHS advises no more than 2 portions of oily fish a week in pregnancy.",
  tuna: "Contains tuna. The NHS advises no more than 4 medium cans of tuna a week in pregnancy.",
  pasteurised_dairy: "Use pasteurised milk, yogurt and cheese.",
  salty: "Can be salty. Go easy on any extra salt.",
  added_sugar: "Contains added sugar, so it's best as an occasional treat.",
};

// The part of the form about nutrition, added to each recipe the model returns.
export const NutritionForm = {
  servings: z.number().describe("How many servings the recipe makes, a whole number from 1 to 8"),
  nutrition: z
    .object({
      kcal: z.number(),
      fat: z.number(),
      saturates: z.number(),
      carbs: z.number(),
      sugars: z.number(),
      fibre: z.number(),
      protein: z.number(),
      salt: z.number(),
    })
    .describe("Estimate for ONE serving. kcal in kilocalories, everything else in grams"),
  nutrients: z
    .array(
      z.object({
        name: z.enum(NUTRIENT_NAMES),
        from: z.array(z.string()).describe("The ingredients in this recipe that provide it, lowercase"),
      }),
    )
    .describe("Only nutrients this recipe is a meaningful source of. Two to five entries"),
  allergens: z.array(z.enum(ALLERGEN_NAMES)).describe("Common allergens in the ingredients"),
  cautions: z.array(z.enum(Object.keys(CAUTION_TEXT))).describe("Pregnancy notes that apply"),
};

// Instructions for filling in the form, appended to the model's instructions.
export const NUTRITION_INSTRUCTIONS = `For each recipe also fill in:
- servings: how many servings it makes.
- nutrition: your best estimate for ONE serving, worked out from the ingredient quantities. kcal must agree with the fat, carbs and protein you give (9, 4 and 4 kcal per gram). salt is grams of salt, not sodium.
- nutrients: which of Folate, Iron, Calcium, Protein, Omega-3, Fibre and Vitamin C the recipe is a meaningful source of, each with the ingredients that provide it. List only ingredients that are in the recipe.
- allergens: the common allergens in the ingredients.
- cautions: choose every one that applies.
  cook_through: the recipe contains meat, poultry, fish, shellfish or eggs.
  oily_fish: it contains salmon, mackerel, sardines, trout or herring.
  tuna: it contains tuna.
  pasteurised_dairy: it contains milk, yogurt, cream or cheese.
  salty: it uses salty ingredients such as soy sauce, stock, cured meat, olives, capers or a lot of cheese.
  added_sugar: it has added sugar, honey or syrup.`;

const round = (value, places) => Math.round(value * 10 ** places) / 10 ** places;

/**
 * Checks and tidies the nutrition part of a recipe the model returned.
 * Returns { servings, nutrition, nutrients, allergens, cautions } in the shape
 * used by src/data/recipes.js. nutrition is null when the figures do not add
 * up, so the app shows no figures instead of wrong ones.
 */
export function tidyNutritionForm(raw) {
  const n = raw.nutrition ?? {};
  const figures = [n.kcal, n.fat, n.saturates, n.carbs, n.sugars, n.fibre, n.protein, n.salt];
  const fromMacros = 9 * n.fat + 4 * n.carbs + 4 * n.protein;
  const addsUp =
    figures.every((value) => Number.isFinite(value) && value >= 0) &&
    n.kcal >= 5 &&
    n.kcal <= 1500 &&
    Math.abs(n.kcal - fromMacros) <= Math.max(60, 0.25 * n.kcal) &&
    n.saturates <= n.fat + 0.5 &&
    n.sugars <= n.carbs + 0.5 &&
    n.salt <= 6;

  const servings = Math.min(8, Math.max(1, Math.round(raw.servings) || 1));
  const seen = new Set();
  const nutrients = (raw.nutrients ?? [])
    .filter((item) => NUTRIENT_NAMES.includes(item.name) && !seen.has(item.name) && seen.add(item.name))
    .map((item) => ({ name: item.name, from: (item.from ?? []).map((text) => String(text).toLowerCase().trim()).filter(Boolean).slice(0, 4) }))
    .filter((item) => item.from.length > 0);

  return {
    servings: `Serves ${servings}`,
    nutrition: addsUp
      ? {
          kcal: Math.round(n.kcal),
          fat: round(n.fat, 1),
          saturates: round(n.saturates, 1),
          carbs: round(n.carbs, 1),
          sugars: round(n.sugars, 1),
          fibre: round(n.fibre, 1),
          protein: round(n.protein, 1),
          salt: round(n.salt, 2),
        }
      : null,
    nutrients,
    allergens: [...new Set(raw.allergens ?? [])].filter((name) => ALLERGEN_NAMES.includes(name)),
    cautions: [...new Set(raw.cautions ?? [])].filter((key) => CAUTION_TEXT[key]).map((key) => CAUTION_TEXT[key]),
  };
}
