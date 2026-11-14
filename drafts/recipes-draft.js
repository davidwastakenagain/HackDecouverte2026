// DRAFT recipes for src/data/recipes.js (written by Member 3 for Member 2 / Member 1).
// Not imported by the app. To use: copy the entries into the `recipes` array
// in src/data/recipes.js.
//
// All recipes are original, follow the recipe structure in CLAUDE.md section 5,
// and follow these rules: meat, poultry, eggs and seafood fully cooked;
// pasteurized dairy only; no high-mercury fish; no alcohol; allergens listed
// in the description. They are food ideas, not medical advice.

export const draftRecipes = [
  // 1. Nutrient-focused home cooking
  {
    id: "recipe-101",
    title: "Veggie Egg Scramble Wrap",
    category: "quick",
    cookingTime: "10 minutes",
    description:
      "A warm breakfast-style wrap with eggs and spinach. Allergens: egg, wheat, dairy.",
    image: "",
    ingredients: [
      "2 eggs",
      "1 handful baby spinach",
      "1/4 red bell pepper, diced",
      "1 whole wheat tortilla",
      "2 tbsp shredded pasteurized cheddar",
    ],
    instructions: [
      "Cook the pepper in a lightly oiled pan for 2 minutes",
      "Add the spinach and stir until wilted",
      "Add the beaten eggs and stir until fully set with no runny parts",
      "Spoon onto the warm tortilla, top with cheese and roll up",
    ],
  },
  {
    id: "recipe-102",
    title: "Beef and Lentil Cottage Pie with Sweet Potato Top",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "A cozy baked pie with extra iron from beef and lentils. Allergens: dairy.",
    image: "",
    ingredients: [
      "300 g lean ground beef",
      "1 cup cooked brown lentils",
      "1 onion and 2 carrots, diced",
      "1 cup low-sodium beef broth",
      "2 large sweet potatoes",
      "2 tbsp pasteurized milk",
    ],
    instructions: [
      "Heat the oven to 200°C",
      "Boil the peeled sweet potatoes until soft, then mash with the milk",
      "Brown the beef with the onion and carrots until no pink remains",
      "Stir in the lentils and broth and simmer for 5 minutes",
      "Spread into a baking dish, top with the mash and bake for 20 minutes",
    ],
  },

  // 2. Everyday family cooking
  {
    id: "recipe-103",
    title: "Chocolate Banana Nice Cream",
    category: "quick",
    cookingTime: "10 minutes",
    description:
      "A creamy frozen treat for ice cream cravings, made from frozen bananas. Allergens: dairy.",
    image: "",
    ingredients: [
      "2 ripe bananas, sliced and frozen",
      "1 tbsp unsweetened cocoa powder",
      "2–3 tbsp pasteurized milk",
      "Optional: a few dark chocolate chips",
    ],
    instructions: [
      "Put the frozen banana, cocoa and milk in a blender",
      "Blend, scraping down the sides, until smooth like soft-serve",
      "Top with chocolate chips and serve right away",
    ],
  },
  {
    id: "recipe-104",
    title: "Banana Oat Chocolate Chip Muffins",
    category: "elaborate",
    cookingTime: "35 minutes",
    description:
      "Soft muffins with oats and less sugar, for cake cravings. Allergens: egg, wheat, dairy.",
    image: "",
    ingredients: [
      "2 ripe bananas, mashed",
      "1 egg",
      "1/3 cup pasteurized plain yogurt",
      "1 cup rolled oats",
      "3/4 cup whole wheat flour",
      "1 tsp baking powder",
      "1/4 cup dark chocolate chips",
    ],
    instructions: [
      "Heat the oven to 180°C and line a muffin tin",
      "Mix the banana, egg and yogurt",
      "Stir in the oats, flour and baking powder, then the chocolate chips",
      "Fill the tin and bake for 20–22 minutes until a toothpick comes out clean",
    ],
  },

  // 3. Plant-based
  {
    id: "recipe-105",
    title: "Smashed Chickpea Salad Sandwich",
    category: "quick",
    cookingTime: "10 minutes",
    description:
      "A plant-based sandwich with no fish or mercury concerns. Allergens: wheat, egg (mayonnaise).",
    image: "",
    ingredients: [
      "1 can chickpeas, drained",
      "1 tbsp mayonnaise (store-bought, made with pasteurized egg)",
      "1 celery stalk, finely diced",
      "1 tsp lemon juice",
      "2 slices whole grain bread",
      "Lettuce",
    ],
    instructions: [
      "Mash the chickpeas with a fork, leaving some texture",
      "Mix in the mayonnaise, celery and lemon juice",
      "Spread on the bread with lettuce and close the sandwich",
    ],
  },
  {
    id: "recipe-106",
    title: "Black Bean Sweet Potato Burgers",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "Hearty baked veggie burgers for burger cravings. Allergens: wheat.",
    image: "",
    ingredients: [
      "1 can black beans, drained",
      "1 small sweet potato, cooked and mashed",
      "1/2 cup rolled oats",
      "1 tsp cumin and 1 tsp smoked paprika",
      "4 whole wheat buns",
      "Lettuce, tomato and avocado",
    ],
    instructions: [
      "Heat the oven to 190°C",
      "Mash the beans and mix with the sweet potato, oats and spices",
      "Shape into 4 patties and place on a lined tray",
      "Bake for 25 minutes, flipping halfway",
      "Serve in the buns with lettuce, tomato and avocado",
    ],
  },

  // 4. Mediterranean
  {
    id: "recipe-107",
    title: "Veggie Pita Pizza",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A quick personal pizza on whole wheat pita for pizza cravings. Allergens: wheat, dairy.",
    image: "",
    ingredients: [
      "1 whole wheat pita",
      "3 tbsp tomato sauce",
      "1/4 cup shredded pasteurized mozzarella",
      "Sliced mushrooms, peppers and spinach",
      "1 tsp dried oregano",
    ],
    instructions: [
      "Heat the oven to 220°C",
      "Spread the sauce on the pita and add the vegetables and cheese",
      "Sprinkle with oregano",
      "Bake for 8–10 minutes until the cheese is bubbling",
    ],
  },
  {
    id: "recipe-108",
    title: "Lemon Herb Salmon with Roasted Potatoes and Green Beans",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "A one-tray dinner with salmon, a lower-mercury fish rich in omega-3s. Allergens: fish.",
    image: "",
    ingredients: [
      "2 salmon fillets",
      "400 g baby potatoes, halved",
      "200 g green beans",
      "2 tbsp olive oil",
      "1 lemon",
      "1 tsp dried dill or parsley",
    ],
    instructions: [
      "Heat the oven to 200°C",
      "Toss the potatoes in half the oil and roast for 20 minutes",
      "Add the green beans and salmon to the tray, drizzle with the rest of the oil, lemon juice and herbs",
      "Roast for 12–15 minutes until the salmon flakes easily and is opaque all the way through",
    ],
  },

  // 5. Greek
  {
    id: "recipe-109",
    title: "Chicken Pita with Cucumber Yogurt Sauce",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "Greek-inspired chicken pita with a cool yogurt sauce. Allergens: wheat, dairy.",
    image: "",
    ingredients: [
      "250 g chicken breast, cut into strips",
      "1 tsp dried oregano and a squeeze of lemon",
      "1/2 cup pasteurized plain Greek yogurt",
      "1/4 cucumber, grated",
      "2 whole wheat pitas",
      "Tomato and red onion slices",
    ],
    instructions: [
      "Season the chicken with oregano and lemon",
      "Cook in a pan for 6–8 minutes until no pink remains inside",
      "Mix the yogurt and cucumber to make the sauce",
      "Fill the warm pitas with chicken, vegetables and sauce",
    ],
  },
  {
    id: "recipe-110",
    title: "Oven-Baked Giant Beans with Tomato and Dill",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "Greek-style baked beans in a rich tomato sauce, high in fiber and folate. Allergens: dairy if topped with feta.",
    image: "",
    ingredients: [
      "2 cans butter beans, drained",
      "1 onion and 1 carrot, diced",
      "1 can crushed tomatoes",
      "2 tbsp olive oil",
      "2 tbsp fresh dill, chopped",
      "Optional: crumbled pasteurized feta",
    ],
    instructions: [
      "Heat the oven to 190°C",
      "Soften the onion and carrot in the oil for 5 minutes",
      "Add the tomatoes and simmer for 10 minutes",
      "Stir in the beans and dill, pour into a baking dish and bake for 25 minutes",
      "Top with feta if you like and serve with whole grain bread",
    ],
  },

  // 6. Middle Eastern
  {
    id: "recipe-111",
    title: "Hummus Snack Plate with Warm Pita",
    category: "quick",
    cookingTime: "10 minutes",
    description:
      "A crunchy, salty snack plate for chip cravings. Allergens: sesame, wheat.",
    image: "",
    ingredients: [
      "1/2 cup hummus",
      "1 whole wheat pita, cut into triangles",
      "Cucumber, carrot and bell pepper sticks",
      "A few olives",
      "Pinch of paprika",
    ],
    instructions: [
      "Toast the pita triangles in a dry pan or oven for 3–4 minutes until crisp",
      "Spoon the hummus into a bowl and sprinkle with paprika",
      "Arrange the vegetables, olives and pita around it",
    ],
  },
  {
    id: "recipe-112",
    title: "Baked Falafel Bowls with Tahini Sauce",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "Crispy oven-baked falafel instead of deep-fried, for fried food cravings. Allergens: sesame, wheat.",
    image: "",
    ingredients: [
      "1 can chickpeas, drained and patted dry",
      "1 small onion and 1 garlic clove",
      "1 cup fresh parsley",
      "1 tsp cumin and 1 tsp coriander",
      "2 tbsp whole wheat flour",
      "2 tbsp tahini and the juice of 1 lemon",
      "Cooked bulgur or brown rice, tomato and cucumber",
    ],
    instructions: [
      "Heat the oven to 200°C",
      "Pulse the chickpeas, onion, garlic, parsley, spices and flour in a food processor",
      "Shape into small patties and bake on an oiled tray for 25 minutes, flipping halfway",
      "Whisk the tahini, lemon juice and a little water into a sauce",
      "Serve the falafel over bulgur with tomato, cucumber and sauce",
    ],
  },

  // 7. Moroccan / North African
  {
    id: "recipe-113",
    title: "Spiced Chickpea Couscous with Apricots",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A sweet and savory couscous bowl with warm spices. Allergens: wheat, tree nuts if using almonds.",
    image: "",
    ingredients: [
      "3/4 cup whole wheat couscous",
      "1 cup low-sodium vegetable broth",
      "1 can chickpeas, drained",
      "4 dried apricots, chopped",
      "1/2 tsp cinnamon and 1 tsp cumin",
      "Optional: toasted sliced almonds",
    ],
    instructions: [
      "Bring the broth to a boil with the spices",
      "Pour over the couscous, cover and leave for 5 minutes",
      "Fluff with a fork and stir in the chickpeas and apricots",
      "Top with almonds if you like",
    ],
  },
  {
    id: "recipe-114",
    title: "Chicken and Vegetable Tagine-Style Stew",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "A slow-simmered, warmly spiced chicken stew. Allergens: none of the common ones (check your broth label).",
    image: "",
    ingredients: [
      "4 boneless chicken thighs",
      "1 onion, sliced",
      "2 carrots and 1 zucchini, chopped",
      "1 can chickpeas, drained",
      "1 can diced tomatoes",
      "1 tsp each cumin, ginger and cinnamon",
      "Cooked brown rice or couscous to serve",
    ],
    instructions: [
      "Brown the chicken in a large pot, then set aside",
      "Soften the onion with the spices for 3 minutes",
      "Add the carrots, tomatoes and chicken, cover and simmer for 20 minutes",
      "Add the zucchini and chickpeas and simmer 10 more minutes until the chicken is cooked through",
      "Serve over rice or couscous",
    ],
  },

  // 8. Persian
  {
    id: "recipe-115",
    title: "Fresh Herb Baked Frittata",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A green, herb-packed egg dish inspired by Persian kuku, cooked until fully set. Allergens: egg.",
    image: "",
    ingredients: [
      "4 eggs",
      "1 cup chopped parsley, cilantro and dill",
      "2 green onions, sliced",
      "1/2 tsp turmeric",
      "1 tbsp olive oil",
    ],
    instructions: [
      "Beat the eggs with the herbs, green onions and turmeric",
      "Heat the oil in a small non-stick pan and pour in the mixture",
      "Cover and cook on low for 8–10 minutes",
      "Check that the center is firm with no runny egg, then slice and serve",
    ],
  },
  {
    id: "recipe-116",
    title: "Red Lentil and Spinach Stew with Saffron Rice",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "A comforting lentil stew with lots of iron and folate from lentils and spinach. Allergens: none of the common ones.",
    image: "",
    ingredients: [
      "1 cup red lentils, rinsed",
      "1 onion, diced",
      "2 cups spinach",
      "1 tsp turmeric and 1 dried lime or the juice of 1 lime",
      "3 cups low-sodium vegetable broth",
      "1 cup basmati rice and a pinch of saffron",
    ],
    instructions: [
      "Cook the rice with the saffron soaked in 2 tbsp hot water",
      "Soften the onion with the turmeric",
      "Add the lentils and broth and simmer for 20 minutes",
      "Stir in the spinach and lime and cook until wilted",
      "Serve the stew over the saffron rice",
    ],
  },

  // 9. Indian
  {
    id: "recipe-117",
    title: "Paneer and Pea Masala Wrap",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A spiced paneer wrap with pasteurized paneer for protein and calcium. Allergens: dairy, wheat.",
    image: "",
    ingredients: [
      "150 g pasteurized paneer, cubed",
      "1/2 cup frozen peas",
      "1/2 onion and 1 tomato, chopped",
      "1 tsp garam masala and 1/2 tsp turmeric",
      "2 whole wheat chapatis or tortillas",
    ],
    instructions: [
      "Soften the onion in a little oil, then add the tomato and spices",
      "Add the paneer and peas and cook for 5 minutes until hot all the way through",
      "Spoon into the warm chapatis and roll up",
    ],
  },
  {
    id: "recipe-118",
    title: "Yogurt-Spiced Baked Chicken with Basmati Rice",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "Tender oven-baked chicken in a spiced yogurt marinade, a lighter take on takeout curry. Allergens: dairy.",
    image: "",
    ingredients: [
      "4 boneless chicken thighs",
      "1/2 cup pasteurized plain yogurt",
      "1 tbsp grated ginger and 2 garlic cloves",
      "2 tsp garam masala and 1 tsp paprika",
      "1 cup basmati rice",
      "Cucumber and red onion salad",
    ],
    instructions: [
      "Mix the yogurt, ginger, garlic and spices, coat the chicken and rest for 10 minutes",
      "Heat the oven to 210°C",
      "Bake the chicken for 25 minutes until it reaches 74°C inside",
      "Cook the rice while the chicken bakes",
      "Serve with the cucumber salad",
    ],
  },

  // 10. Indian-American home cooking
  {
    id: "recipe-119",
    title: "Masala Scrambled Eggs on Toast",
    category: "quick",
    cookingTime: "10 minutes",
    description:
      "Fully cooked eggs with onion, tomato and gentle spices. Allergens: egg, wheat.",
    image: "",
    ingredients: [
      "3 eggs",
      "1/4 onion and 1 small tomato, chopped",
      "1/4 tsp turmeric and 1/4 tsp cumin",
      "Fresh cilantro",
      "2 slices whole grain toast",
    ],
    instructions: [
      "Cook the onion in a little oil for 2 minutes, then add the tomato and spices",
      "Add the beaten eggs and stir until completely set",
      "Top with cilantro and serve on toast",
    ],
  },
  {
    id: "recipe-120",
    title: "Coconut Chickpea Curry with Brown Rice",
    category: "elaborate",
    cookingTime: "35 minutes",
    description:
      "A creamy, mild vegetable curry with chickpeas and spinach. Allergens: none of the common ones (coconut is a fruit, not a tree nut, but some people react to it).",
    image: "",
    ingredients: [
      "1 can chickpeas, drained",
      "1 can light coconut milk",
      "1 can diced tomatoes",
      "1 onion, 2 garlic cloves, 1 tbsp ginger",
      "2 tsp curry powder",
      "2 cups spinach",
      "1 cup brown rice",
    ],
    instructions: [
      "Start cooking the brown rice",
      "Soften the onion, garlic and ginger, then stir in the curry powder",
      "Add the tomatoes, coconut milk and chickpeas and simmer for 15 minutes",
      "Stir in the spinach until wilted and serve over the rice",
    ],
  },

  // 11. Japanese
  {
    id: "recipe-121",
    title: "Cooked Salmon Rice Bowl",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "Everything you like about a sushi bowl, made with fully cooked salmon. Allergens: fish, soy, sesame.",
    image: "",
    ingredients: [
      "1 salmon fillet",
      "1 cup cooked rice",
      "1/2 avocado, sliced",
      "1/4 cucumber, sliced",
      "1 tsp low-sodium soy sauce",
      "Toasted sesame seeds and a sheet of nori",
    ],
    instructions: [
      "Cook the salmon in a pan for 4 minutes per side until opaque and flaky all the way through",
      "Flake it over the warm rice",
      "Add the avocado and cucumber",
      "Drizzle with soy sauce and top with sesame seeds and torn nori",
    ],
  },
  {
    id: "recipe-122",
    title: "Oven-Baked Chicken Katsu with Cabbage Salad",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "Crispy panko chicken baked instead of fried, for fried chicken cravings. Allergens: egg, wheat, soy.",
    image: "",
    ingredients: [
      "2 chicken breasts, halved horizontally",
      "1 egg, beaten",
      "1 cup panko breadcrumbs",
      "1 tbsp olive oil",
      "2 cups shredded cabbage",
      "1 tbsp rice vinegar and 1 tsp low-sodium soy sauce",
    ],
    instructions: [
      "Heat the oven to 210°C",
      "Toss the panko in the oil and toast in a dry pan until golden",
      "Dip the chicken in egg, then press into the panko",
      "Bake on a rack for 20–25 minutes until no pink remains inside",
      "Toss the cabbage with vinegar and soy sauce and serve alongside",
    ],
  },

  // 12. Korean
  {
    id: "recipe-123",
    title: "Sweet Soy Beef Lettuce Wraps",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "Korean-inspired savory-sweet beef in crisp lettuce cups. Allergens: soy, sesame.",
    image: "",
    ingredients: [
      "250 g lean ground beef",
      "1 tbsp low-sodium soy sauce",
      "1 tsp honey and 1 tsp sesame oil",
      "1 garlic clove, grated",
      "Butter lettuce leaves",
      "Grated carrot and green onion",
    ],
    instructions: [
      "Brown the beef with the garlic until no pink remains",
      "Stir in the soy sauce, honey and sesame oil",
      "Spoon into lettuce leaves and top with carrot and green onion",
    ],
  },
  {
    id: "recipe-124",
    title: "Veggie Bibimbap with a Fully Cooked Egg",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "A colorful rice bowl with seasoned vegetables, cooked beef and a firm egg. Allergens: egg, soy, sesame.",
    image: "",
    ingredients: [
      "1 cup short-grain rice",
      "150 g lean ground beef",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "2 cups spinach",
      "2 eggs",
      "1 tbsp gochujang (optional, spicy) and 1 tsp sesame oil",
    ],
    instructions: [
      "Cook the rice",
      "Sauté each vegetable separately for 2–3 minutes with a drop of sesame oil",
      "Cook the beef until no pink remains",
      "Fry the eggs until both the white and yolk are firm",
      "Arrange everything over the rice and top with gochujang if you like",
    ],
  },

  // 13. Chinese
  {
    id: "recipe-125",
    title: "Garlic Broccoli and Tofu Stir-Fry",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A quick takeout-style stir-fry with plant protein. Allergens: soy.",
    image: "",
    ingredients: [
      "200 g firm tofu, cubed",
      "2 cups broccoli florets",
      "2 garlic cloves, sliced",
      "1 tbsp low-sodium soy sauce",
      "1 tsp cornstarch mixed with 3 tbsp water",
      "Cooked brown rice",
    ],
    instructions: [
      "Pan-fry the tofu in a little oil until golden on all sides",
      "Add the broccoli and garlic with a splash of water and cook for 4 minutes",
      "Add the soy sauce and cornstarch mixture and stir until glossy",
      "Serve over brown rice",
    ],
  },
  {
    id: "recipe-126",
    title: "Baked Sweet and Sour Chicken",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "A lighter take on a takeout favorite with baked chicken and pineapple. Allergens: egg, soy.",
    image: "",
    ingredients: [
      "2 chicken breasts, cubed",
      "1 egg and 1/3 cup cornstarch",
      "1 red and 1 green bell pepper, chopped",
      "1 cup pineapple chunks",
      "3 tbsp ketchup, 2 tbsp rice vinegar, 1 tbsp honey, 1 tbsp low-sodium soy sauce",
      "Cooked rice",
    ],
    instructions: [
      "Heat the oven to 210°C",
      "Toss the chicken in cornstarch, then egg, and spread on a lined tray",
      "Bake for 20 minutes, turning once, until cooked through",
      "Simmer the sauce ingredients with the peppers and pineapple for 5 minutes",
      "Toss the chicken in the sauce and serve with rice",
    ],
  },

  // 14. Vietnamese
  {
    id: "recipe-127",
    title: "Lemongrass Chicken Noodle Salad",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A fresh, bright noodle bowl with cooked chicken and crunchy vegetables. Allergens: fish (fish sauce), peanut if topped.",
    image: "",
    ingredients: [
      "200 g chicken breast, thinly sliced",
      "1 tsp lemongrass paste",
      "100 g rice vermicelli",
      "Shredded lettuce, cucumber and carrot",
      "Fresh mint and cilantro",
      "1 tbsp fish sauce, 1 tbsp lime juice, 1 tsp sugar, 2 tbsp water",
    ],
    instructions: [
      "Soak or boil the noodles as the package says, then rinse",
      "Cook the chicken with the lemongrass until no pink remains",
      "Mix the fish sauce, lime, sugar and water into a dressing",
      "Pile noodles, vegetables, herbs and chicken in a bowl and pour over the dressing",
    ],
  },
  {
    id: "recipe-128",
    title: "Chicken Noodle Pho-Style Soup",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "A gently spiced chicken noodle soup with every ingredient cooked. Allergens: fish (fish sauce).",
    image: "",
    ingredients: [
      "2 chicken breasts",
      "6 cups low-sodium chicken broth",
      "1 onion, halved, and a thumb of ginger",
      "1 cinnamon stick and 2 star anise",
      "200 g flat rice noodles",
      "1 tbsp fish sauce",
      "Bean sprouts (blanched), basil and lime",
    ],
    instructions: [
      "Char the onion and ginger in a dry pan for 5 minutes",
      "Simmer them in the broth with the spices and chicken for 20 minutes",
      "Remove the chicken, check it is cooked through, and shred it",
      "Strain the broth and season with fish sauce",
      "Cook the noodles, blanch the bean sprouts for 1 minute, then assemble bowls",
    ],
  },

  // 15. Thai
  {
    id: "recipe-129",
    title: "Peanut Chicken Noodles",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "Silky noodles in a creamy peanut-lime sauce. Allergens: peanut, soy, wheat.",
    image: "",
    ingredients: [
      "150 g whole wheat noodles",
      "200 g chicken breast, sliced",
      "2 tbsp natural peanut butter",
      "1 tbsp low-sodium soy sauce and 1 tbsp lime juice",
      "1 tsp honey",
      "Shredded red cabbage and carrot",
    ],
    instructions: [
      "Cook the noodles",
      "Cook the chicken in a pan until no pink remains",
      "Whisk the peanut butter, soy sauce, lime, honey and a splash of hot water",
      "Toss the noodles, chicken and vegetables in the sauce",
    ],
  },
  {
    id: "recipe-130",
    title: "Coconut Red Curry with Chicken and Vegetables",
    category: "elaborate",
    cookingTime: "35 minutes",
    description:
      "A fragrant, mild coconut curry with lots of vegetables. Allergens: fish (fish sauce), shellfish (some curry pastes contain shrimp; check the label).",
    image: "",
    ingredients: [
      "2 chicken breasts, sliced",
      "1–2 tbsp red curry paste",
      "1 can light coconut milk",
      "1 red bell pepper, 1 cup green beans, 1 cup broccoli",
      "1 tsp fish sauce and 1 tsp brown sugar",
      "Jasmine or brown rice",
    ],
    instructions: [
      "Start cooking the rice",
      "Fry the curry paste in a little oil for 1 minute",
      "Add the coconut milk and chicken and simmer for 10 minutes",
      "Add the vegetables and cook 8 more minutes until the chicken is cooked through",
      "Season with fish sauce and sugar and serve over rice",
    ],
  },

  // 16. Mexican
  {
    id: "recipe-131",
    title: "Black Bean and Corn Quesadilla",
    category: "quick",
    cookingTime: "10 minutes",
    description:
      "A crispy, cheesy quesadilla with beans for fiber and protein. Allergens: wheat, dairy.",
    image: "",
    ingredients: [
      "2 whole wheat tortillas",
      "1/2 cup black beans, drained",
      "1/4 cup corn",
      "1/3 cup shredded pasteurized cheese",
      "Salsa and plain pasteurized yogurt to serve",
    ],
    instructions: [
      "Spread the beans, corn and cheese on one tortilla and top with the other",
      "Cook in a dry pan for 3 minutes per side until golden and melted",
      "Cut into wedges and serve with salsa and yogurt",
    ],
  },
  {
    id: "recipe-132",
    title: "Turkey and Veggie Taco Bake",
    category: "elaborate",
    cookingTime: "40 minutes",
    description:
      "All the taco flavors in one baked dish for taco and nacho cravings. Allergens: dairy.",
    image: "",
    ingredients: [
      "400 g lean ground turkey",
      "1 onion and 1 zucchini, diced",
      "1 can black beans, drained",
      "1 cup tomato salsa",
      "2 tsp cumin and 1 tsp chili powder",
      "6 corn tortillas, torn",
      "1/2 cup shredded pasteurized cheese",
    ],
    instructions: [
      "Heat the oven to 190°C",
      "Brown the turkey with the onion, zucchini and spices until fully cooked",
      "Stir in the beans and salsa",
      "Layer the tortillas and filling in a baking dish, finishing with cheese",
      "Bake for 20 minutes until bubbling",
    ],
  },

  // 17. Latin American
  {
    id: "recipe-133",
    title: "Sweet Plantain and Black Bean Bowl",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "Caramelized plantain with seasoned beans and rice. Allergens: none of the common ones.",
    image: "",
    ingredients: [
      "1 ripe (yellow-black) plantain, sliced",
      "1 can black beans",
      "1 cup cooked rice",
      "1/2 avocado",
      "1/2 tsp cumin and a squeeze of lime",
    ],
    instructions: [
      "Pan-cook the plantain in a little oil for 3 minutes per side until golden",
      "Warm the beans with the cumin",
      "Serve the rice, beans, plantain and avocado together with a squeeze of lime",
    ],
  },
  {
    id: "recipe-134",
    title: "Chicken and Root Vegetable Stew",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "A hearty Latin-style chicken soup with corn, potato and squash. Allergens: none of the common ones.",
    image: "",
    ingredients: [
      "4 bone-in chicken thighs, skin removed",
      "1 onion, 2 garlic cloves",
      "2 potatoes and 2 cups squash, cubed",
      "2 corn cobs, cut into rounds",
      "6 cups low-sodium chicken broth",
      "Fresh cilantro and lime",
    ],
    instructions: [
      "Soften the onion and garlic in a large pot",
      "Add the chicken and broth and simmer for 15 minutes",
      "Add the potatoes, squash and corn and simmer 20 more minutes",
      "Check the chicken is cooked through, then shred it back into the pot",
      "Serve with cilantro and lime",
    ],
  },

  // 18. Caribbean
  {
    id: "recipe-135",
    title: "Jerk-Spiced Chicken Wrap",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A spicy-sweet chicken wrap with mango. Allergens: wheat, dairy (yogurt).",
    image: "",
    ingredients: [
      "200 g chicken breast, sliced",
      "1–2 tsp jerk seasoning (choose a low-salt one)",
      "1/2 mango, diced",
      "Shredded lettuce",
      "2 tbsp pasteurized plain yogurt",
      "2 whole wheat tortillas",
    ],
    instructions: [
      "Toss the chicken in the jerk seasoning",
      "Cook in a pan for 6–8 minutes until no pink remains",
      "Fill the tortillas with lettuce, chicken, mango and yogurt and roll up",
    ],
  },
  {
    id: "recipe-136",
    title: "Baked Jerk Chicken with Sweet Potato Fries",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "Oven-baked spiced chicken with crispy baked fries, for fries and fried chicken cravings. Allergens: none of the common ones.",
    image: "",
    ingredients: [
      "4 chicken drumsticks or thighs",
      "1 tbsp jerk seasoning",
      "2 sweet potatoes, cut into fries",
      "2 tbsp olive oil",
      "1/2 tsp smoked paprika",
      "Lime wedges",
    ],
    instructions: [
      "Heat the oven to 210°C",
      "Rub the chicken with jerk seasoning and half the oil",
      "Toss the fries in the rest of the oil and paprika, spread on a separate tray",
      "Bake both for 30–35 minutes, turning the fries halfway",
      "Make sure the chicken reaches 74°C inside, then serve with lime",
    ],
  },

  // 19. West African
  {
    id: "recipe-137",
    title: "Tomato and Spinach Egg Stew with Bread",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "A savory West African-inspired tomato and egg stew with greens. Allergens: egg, wheat.",
    image: "",
    ingredients: [
      "3 eggs",
      "1 onion and 1 red bell pepper, diced",
      "2 tomatoes, chopped",
      "2 cups spinach",
      "1/2 tsp curry powder and a pinch of chili (optional)",
      "Whole grain bread",
    ],
    instructions: [
      "Soften the onion and pepper in a little oil",
      "Add the tomatoes and spices and cook for 5 minutes",
      "Stir in the spinach, then pour in the beaten eggs",
      "Stir until the eggs are completely set, then serve with bread",
    ],
  },
  {
    id: "recipe-138",
    title: "Peanut, Sweet Potato and Chicken Stew",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "A rich, comforting groundnut-style stew with sweet potato and greens. Allergens: peanut.",
    image: "",
    ingredients: [
      "3 boneless chicken thighs, cubed",
      "1 onion, 2 garlic cloves, 1 tbsp ginger",
      "1 large sweet potato, cubed",
      "1 can diced tomatoes",
      "1/3 cup natural peanut butter",
      "4 cups low-sodium chicken broth",
      "2 cups kale or collard greens",
    ],
    instructions: [
      "Brown the chicken in a large pot, then add the onion, garlic and ginger",
      "Add the sweet potato, tomatoes and broth and simmer for 20 minutes",
      "Whisk in the peanut butter",
      "Add the greens and simmer 10 more minutes until the chicken is cooked through",
      "Serve with brown rice",
    ],
  },

  // 20. East African
  {
    id: "recipe-139",
    title: "Berbere-Spiced Red Lentils",
    category: "quick",
    cookingTime: "15 minutes",
    description:
      "Quick-cooking spiced lentils, high in iron and folate. Allergens: wheat if served with flatbread.",
    image: "",
    ingredients: [
      "3/4 cup red lentils, rinsed",
      "1 onion, finely chopped",
      "1 tbsp tomato paste",
      "1–2 tsp berbere spice (or paprika and a pinch of chili)",
      "2 cups water",
      "Flatbread or rice to serve",
    ],
    instructions: [
      "Soften the onion in a little oil",
      "Stir in the tomato paste and spice for 1 minute",
      "Add the lentils and water and simmer for 12 minutes until soft",
      "Serve with flatbread or rice",
    ],
  },
  {
    id: "recipe-140",
    title: "Baked Sweet Potato and Pea Samosa Turnovers",
    category: "elaborate",
    cookingTime: "45 minutes",
    description:
      "Crisp baked pastries with a spiced vegetable filling, for fried snack cravings. Allergens: wheat, dairy (butter in pastry).",
    image: "",
    ingredients: [
      "1 sheet store-bought puff or shortcrust pastry",
      "1 sweet potato, peeled and diced",
      "1/2 cup peas",
      "1 small onion, diced",
      "1 tsp cumin, 1 tsp coriander and 1/2 tsp turmeric",
      "1 tbsp milk for brushing (pasteurized)",
    ],
    instructions: [
      "Boil the sweet potato for 8 minutes until soft, then drain",
      "Cook the onion with the spices, then stir in the sweet potato and peas",
      "Heat the oven to 200°C",
      "Cut the pastry into squares, add filling and fold into triangles, pressing the edges",
      "Brush with milk and bake for 20 minutes until golden",
    ],
  },
];
