// Why each nutrient in a recipe's "nutrients" list matters in pregnancy (Member 2).
// The keys are the nutrient names used in recipes.js and extraRecipes.js.
// The wording follows the NHS pages "Have a healthy diet in pregnancy" and
// "Vitamins, supplements and nutrition in pregnancy". These are general facts
// about the nutrient, not a claim about how much a recipe contains.
//   figure: the key in recipe.nutrition that gives grams per serving, if any.

export const PREGNANCY_NUTRIENTS = {
  Folate: {
    why: "Helps your baby's brain and spinal cord form in early pregnancy. Food does not replace a folic acid supplement.",
  },
  Iron: {
    why: "Your body makes extra blood in pregnancy. Iron helps it carry oxygen to you and your baby.",
  },
  Calcium: {
    why: "Helps build your baby's bones and teeth.",
  },
  Protein: {
    why: "Supports your baby's growth, including muscles and organs.",
    figure: "protein",
  },
  "Omega-3": {
    why: "Omega-3 fats, found in oily fish, support your baby's brain and eye development.",
  },
  Fibre: {
    why: "Helps prevent constipation, which is common in pregnancy.",
    figure: "fibre",
  },
  "Vitamin C": {
    why: "Helps your body take in iron from plant foods and keeps cells healthy.",
  },
};
