// Shared recipe data (owned by Member 1; Member 2 may add entries).
// Every recipe must follow the structure in CLAUDE.md, section 5.
// category is "quick", "elaborate" or "nearby".

export const recipes = [
  {
    id: "recipe-001",
    title: "Healthy Cheeseburger",
    category: "quick",
    cookingTime: "15 minutes",
    description: "A healthier burger alternative",
    image: "",
    ingredients: [
      "Whole wheat bun",
      "Lean ground turkey",
      "Pasteurized cheddar slice",
      "Lettuce and tomato",
    ],
    instructions: [
      "Prepare ingredients",
      "Cook the turkey patty until it is fully cooked through",
      "Assemble the burger",
    ],
  },
  {
    id: "recipe-002",
    title: "Baked Turkey Burger with Sweet Potato Wedges",
    category: "elaborate",
    cookingTime: "40 minutes",
    description: "A homemade burger night with oven-baked wedges",
    image: "",
    ingredients: [
      "Lean ground turkey",
      "Whole wheat buns",
      "Sweet potatoes",
      "Olive oil",
      "Pasteurized cheddar",
      "Lettuce, tomato and onion",
    ],
    instructions: [
      "Heat the oven to 220°C",
      "Cut the sweet potatoes into wedges, toss in olive oil and bake for 30 minutes",
      "Shape the turkey into patties and cook until fully cooked through",
      "Toast the buns and assemble the burgers",
      "Serve with the wedges",
    ],
  },
];
