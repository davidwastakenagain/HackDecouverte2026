// Shared recipe data (owned by Member 1; Member 2 may add entries).
// Every recipe must follow the structure in CLAUDE.md, section 5.
// category is "quick", "elaborate" or "nearby".
//
// These are real, published BBC Good Food recipes, taken from TheMealDB
// (https://www.themealdb.com) with their own photos, ingredients and steps.
// sourceUrl links to the recipe on bbcgoodfood.com; every link was opened and
// checked. cookingTime, servings and nutrition (per serving) are the figures
// published on that page.
//
// Healthier alternatives only. A recipe is left out if:
//   - a serving is high in saturated fat (over 6 g), sugars
//     (over 27 g), salt (over 1.5 g) or calories (over 700 kcal);
//   - the food itself is fried (softening onions in a little oil is fine), or it uses margarine, shortening, lard,
//     suet or ready-made pastry (sources of trans and saturated fat);
//   - it has added sugar and more than 15 g of sugars per serving;
//   - it has more than one egg per serving (cholesterol is not published);
//   - it uses ingredients or methods that pregnancy food-safety guidance says
//     to avoid (alcohol, liver/pate, raw or cold-smoked fish, high-mercury
//     fish, raw or runny egg, rare meat, mould-ripened or blue cheese,
//     uncooked cured meat, game, caffeine).
//
// Pregnancy nutrition (from each recipe's ingredient list, following the NHS
// "Have a healthy diet in pregnancy" guidance; not a lab nutrient analysis):
//   nutrients: [{ name, from }] - folate, iron, calcium, protein, omega-3,
//              fibre and vitamin C, with the ingredients that provide them.
//              Every recipe has at least two; recipes with more nutrients and
//              less added sugar and salt were picked first.
//   allergens: common allergens found in the ingredients. Always check labels.
//   cautions:  practical pregnancy notes (cooking through, oily fish and tuna
//              limits, pasteurised soft cheese, salt, added sugar).
// Generated file: regenerate rather than editing entries by hand.

export const recipes = [
  {
    "id": "fried-chicken-elaborate-1",
    "title": "Thai drumsticks",
    "category": "elaborate",
    "cookingTime": "55 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 246,
      "fat": 11,
      "saturates": 3,
      "carbs": 5,
      "sugars": 4,
      "fibre": 0,
      "protein": 31,
      "salt": 1.1
    },
    "description": "A Thai chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ittake1763586925.jpg",
    "ingredients": [
      "2 tablespoons sweet chilli sauce",
      "Zest of 1 Orange",
      "2 tblsp Orange",
      "1 clove peeled crushed Garlic",
      "1 tblsp Thai Red Curry Paste",
      "8 Chicken drumsticks"
    ],
    "instructions": [
      "Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil. Mix the chilli sauce with the orange zest and juice, garlic, curry paste and ¼ tsp salt. Add the chicken and coat really well.",
      "Arrange the drumsticks on the foil, spaced apart. Coat the chicken with any marinade left in the bowl, then roast for 35-40 mins until tender. Wrap in foil or pack into a food container."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/fragrant-thai-drumsticks",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "orange"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chicken drumsticks"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "orange"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "asian-elaborate-1",
    "title": "Vietnamese prawn spiralized rolls",
    "category": "elaborate",
    "cookingTime": "40 minutes",
    "servings": "Serves 12, as a snack or canapé",
    "nutrition": {
      "kcal": 41,
      "fat": 0.3,
      "saturates": 0.1,
      "carbs": 7,
      "sugars": 2,
      "fibre": 1,
      "protein": 3,
      "salt": 0.9
    },
    "description": "A Vietnamese seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/9r2xrg1763771238.jpg",
    "ingredients": [
      "Juice of 1/2 Lime",
      "2 tablespoons Rice Vinegar",
      "1 tablespoon Palm Sugar",
      "3  tablespoons Fish Sauce",
      "1 chopped Birds-eye Chillies",
      "6 Rice Paper Sheets",
      "Small bunch Mint",
      "Small bunch Coriander",
      "12 King Prawns",
      "1 large Carrots",
      "1 Courgettes"
    ],
    "instructions": [
      "Mix all the ingredients for the dipping sauce along with 50ml water in a bowl and set aside to allow the sugar to dissolve and flavour to infuse.",
      "To assemble the rolls, fill a wide bowl with warm water and grab a clean damp tea towel to work on. Dip a rice paper wrapper into the water for a few seconds until it softens then carefully place onto the tea towel.",
      "Put a few mint and coriander leaves in the centre of the wrapper then top with two prawns and a small handful of the spiralized veg, which may need to be cut up if the spirals are too long.",
      "Fold the sides of the wrapper into the centre, over the filling, then fold in the edges, so that the filling is completely encased, then tightly roll. Repeat until all of the wrappers and filling have been used. To serve, slice on a diagonal and eat with the dipping sauce."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/vietnamese-prawn-spiralized-rolls",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "king prawns"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "carrots",
          "courgettes"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime"
        ]
      }
    ],
    "allergens": [
      "Fish",
      "Shellfish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (fish sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "asian-elaborate-2",
    "title": "Vietnamese pork salad",
    "category": "elaborate",
    "cookingTime": "70 minutes",
    "servings": "Serves 6",
    "nutrition": {
      "kcal": 195,
      "fat": 11,
      "saturates": 2,
      "carbs": 4,
      "sugars": 1,
      "fibre": 2,
      "protein": 21,
      "salt": 1.1
    },
    "description": "A Vietnamese pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/g7jomp1763763994.jpg",
    "ingredients": [
      "1 tsp Golden Caster Sugar",
      "Juice of 2 Lime",
      "1 chopped Red Chilli",
      "Handful Coriander",
      "1 tablespoon Sesame Seed Oil",
      "1 tablespoon Fish Sauce",
      "1 tablespoon Soy Sauce",
      "500g Pork Tenderloin",
      "For brushing Vegetable Oil",
      "1/4 White Cabbage",
      "1 chopped Cucumber",
      "5 chopped Celery",
      "3 sliced thinly Spring Onions",
      "1 chopped Red Chilli",
      "2 chopped Lemongrass Stalks",
      "Zest of 1 Lime",
      "Handful Coriander",
      "Handful Mint"
    ],
    "instructions": [
      "The day before: make the dressing. Put the sugar and lime juice in a pan with 1 tbsp water and bring to the boil to dissolve the sugar. Add the chilli and coriander and stir well, then pulse in a blender until smooth. Tip into a bowl, then stir in the sesame oil, fish sauce, soy sauce and sesame seeds to make a dressing. Cover and chill until needed.",
      "Two hours before serving: heat a griddle pan. Preheat the oven to 200C/gas 6/fan 180C. Brush the pork with oil and griddle on all sides for a few minutes until seared. Transfer to a baking tray and put in the oven for about 10-12 minutes until cooked through. Cool, thinly slice against the grain of the meat. Tip into a bowl and pour over half the dressing.",
      "To serve: toss the remaining salad ingredients in a bowl with the remaining dressing. Pile on to a platter, top with the pork slices and spoon over any juices."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/vietnamese-pork-salad",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "pork tenderloin"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime",
          "white cabbage"
        ]
      }
    ],
    "allergens": [
      "Fish",
      "Wheat (gluten)",
      "Soy",
      "Sesame"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (fish sauce, soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "seafood-quick-1",
    "title": "Tuna Nicoise",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 329,
      "fat": 14,
      "saturates": 3,
      "carbs": 24,
      "sugars": 6,
      "fibre": 4,
      "protein": 26,
      "salt": 1.05
    },
    "description": "A France seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
    "ingredients": [
      "450g Potatoes",
      "2 tblsp Olive Oil",
      "4 Eggs",
      "1 tbls Red Wine Vinegar",
      "2 tblsp Capers",
      "50g Sunflower Oil",
      "½ Red Onions",
      "100g Spinach",
      "400g Tuna"
    ],
    "instructions": [
      "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning. Tip onto a large baking tray, then roast for 20 mins, stirring halfway, until crisp, golden and cooked through.",
      "Meanwhile, put eggs in a small pan of water, bring to the boil, then simmer for 8-10 mins, depending on how you like them cooked. Plunge into a bowl of cold water to cool for a few mins. Peel away the shells, then cut into halves.",
      "In a large salad bowl, whisk together the remaining oil, red wine vinegar, capers and chopped tomatoes. Season, tip in the onion, spinach, tuna and potatoes, then gently toss together. Top with the eggs, then serve straight away."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/9529/winter-tuna-nioise",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "spinach"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "spinach"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "eggs"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains tuna. The NHS advises no more than 4 medium cans of tuna a week in pregnancy.",
      "Can be salty (capers). Go easy on any extra salt."
    ]
  },
  {
    "id": "seafood-quick-2",
    "title": "Spanish rice & prawn one-pot",
    "category": "quick",
    "cookingTime": "20 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 398,
      "fat": 8,
      "saturates": 2,
      "carbs": 63,
      "sugars": 8,
      "fibre": 3,
      "protein": 17,
      "salt": 0.97
    },
    "description": "A Spanish seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/sl6vqv1763335988.jpg",
    "ingredients": [
      "1 sliced Onion",
      "1 sliced Red Pepper",
      "1 sliced Green Pepper",
      "50g Chorizo",
      "2 cloves minced Garlic",
      "1 tblsp Olive Oil",
      "250g Basmati Rice",
      "400g Tinned Tomatos",
      "200g Prawns"
    ],
    "instructions": [
      "Boil the kettle. In a non-stick frying or shallow pan with a lid, fry the onion, peppers, chorizo and garlic in the oil over a high heat for 3 mins. Stir in the rice and chopped tomatoes with 500ml boiling water, cover, then cook over a high heat for 12 mins.",
      "Uncover, then stir – the rice should be almost tender. Stir in the prawns, with a splash more water if the rice is looking dry, then cook for another min until the prawns are just pink and rice tender."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/spanish-rice-prawn-one-pot",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "prawns"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "green pepper"
        ]
      }
    ],
    "allergens": [
      "Shellfish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (chorizo). Go easy on any extra salt."
    ]
  },
  {
    "id": "seafood-elaborate-1",
    "title": "Seafood fideuà",
    "category": "elaborate",
    "cookingTime": "60 minutes",
    "servings": "Serves 4 - 6",
    "nutrition": {
      "kcal": 488,
      "fat": 12,
      "saturates": 2,
      "carbs": 49,
      "sugars": 5,
      "fibre": 2,
      "protein": 44,
      "salt": 0.9
    },
    "description": "A Spanish seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
    "ingredients": [
      "400g Mussels",
      "8 Prawns",
      "2 pinches Saffron",
      "350g Vermicelli Pasta",
      "5 tblsp Olive Oil",
      "1 large Onions",
      "3 cloves Garlic",
      "2 tbs Paprika",
      "1 tail Monkfish",
      "4 Baby Squid",
      "650ml Fish Stock",
      "2 large Tomatoes",
      "Juice of 1 Lemon",
      "Topping Parsley"
    ],
    "instructions": [
      "Boil the kettle. Empty the mussels into a colander and run under cold water. Throw away any with broken shells. Pick through the shells, tapping each one on the side of the sink – they should be closed or should slowly close when tapped – if they stay open, throw them away. If any of the shells still have barnacles or stringy beards attached, pull them off with a cutlery knife and rinse the shells well. Keep in the colander, covered with a cold, damp cloth, until you’re ready to cook. Peel the prawn shells on the body section only – leave the heads and tails intact. Score down the backs and pull out any gritty entrails. Chill until you’re ready to cook.",
      "Put the saffron in a small cup, cover with 50ml kettle-hot water and set aside for 10 mins. If using vermicelli, put in a bowl and crush to little pieces (about 1cm long) with your hands.",
      "Heat the oil in a large frying pan with at least a 3cm lip, or a 40cm paella pan. Add the onion and stir around the pan for 5 mins until soft. Add the garlic and cook for 1 min more, then tip in the vermicelli and cook for 5 mins, stirring from time to time, until the vermicelli is toasted brown. Stir in the paprika.",
      "Keeping the heat moderate, stir through the monkfish, squid and saffron with its water, seasoning well. Spread the ingredients out in an even layer, then pour over the hot stock and scatter the tomatoes on top. Bring to a simmer, then cover the whole dish with a tight-fitting lid (or foil). Turn the heat to medium and cook for 6 mins.",
      "Uncover and stir to incorporate the dry top layer of pasta. Push the mussels into the pasta so the hinges are buried in the bottom of the dish, and they stand straight up. Arrange the prawns on top, cover tightly and cook for another 6 mins or until the mussels are open, the prawns are pink and the pasta is cooked through. Leave to simmer for another 2-3 mins to cook off most of the remaining liquid (leave a little in the pan to prevent the pasta from sticking together). Allow to sit for 2-3 mins, then squeeze over the lemon juice and arrange the wedges on top. Scatter with parsley before serving."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/seafood-fideua-paella",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "mussels"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "mussels",
          "prawns"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomatoes",
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Fish",
      "Shellfish",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "seafood-elaborate-2",
    "title": "Baked salmon with fennel & tomatoes",
    "category": "elaborate",
    "cookingTime": "45 minutes",
    "servings": "Serves 2",
    "nutrition": {
      "kcal": 398,
      "fat": 25,
      "saturates": 5,
      "carbs": 5,
      "sugars": 5,
      "fibre": 0,
      "protein": 37,
      "salt": 0.27
    },
    "description": "A British seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    "ingredients": [
      "2 medium Fennel",
      "2 tbs chopped Parsley",
      "Juice of 1 Lemon",
      "175g Cherry Tomatoes",
      "1 tbs Olive Oil",
      "350g Salmon",
      "to serve Black Olives"
    ],
    "instructions": [
      "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.",
      "Spread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/7745/baked-salmon-with-fennel-and-tomatoes",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "salmon"
        ]
      },
      {
        "name": "Omega-3",
        "from": [
          "salmon"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon",
          "cherry tomatoes"
        ]
      }
    ],
    "allergens": [
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains oily fish (salmon). The NHS advises no more than 2 portions of oily fish a week in pregnancy.",
      "Can be salty (black olives). Go easy on any extra salt."
    ]
  },
  {
    "id": "seafood-elaborate-3",
    "title": "Kedgeree",
    "category": "elaborate",
    "cookingTime": "45 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 551,
      "fat": 12,
      "saturates": 4,
      "carbs": 76,
      "sugars": 7,
      "fibre": 4,
      "protein": 33,
      "salt": 1.19
    },
    "description": "A British seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
    "ingredients": [
      "300g Smoked Haddock",
      "2 Bay Leaves",
      "300ml Milk",
      "4 Eggs",
      "Handful Parsley",
      "Handful Coriander",
      "2 tbs Vegetable Oil",
      "1 chopped Onion",
      "1 tsp Coriander",
      "2 tsp Curry Powder",
      "300g Rice"
    ],
    "instructions": [
      "For the rice, heat the oil in a large, lidded pan, add the onion, then gently fry for 5 mins until softened but not coloured. Add the spices, season with salt, then continue to fry until the mix start to go brown and fragrant; about 3 mins.",
      "Add the rice and stir in well. Add 600ml water, stir, then bring to the boil. Reduce to a simmer, then cover for 10 mins. Take off the heat and leave to stand, covered, for 10-15 mins more. The rice will be perfectly cooked if you do not lift the lid before the end of the cooking.",
      "Meanwhile, put the haddock and bay leaves in a frying pan, cover with the milk, then poach for 10 mins until the flesh flakes. Remove from the milk, peel away the skin, then flake the flesh into thumbsize pieces. Place the eggs in a pan, cover with water, bring to the boil, then reduce to a simmer. Leave for 4½-5 mins, plunge into cold water, then peel and cut the eggs into quarters. Gently mix the fish, eggs, parsley, coriander and rice together in the pan. Serve hot, sprinkled with a few extra herbs."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/10421/kedgeree",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "milk"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "smoked haddock",
          "eggs"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "seafood-elaborate-4",
    "title": "Salmon noodle soup",
    "category": "elaborate",
    "cookingTime": "35 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 265,
      "fat": 10,
      "saturates": 2,
      "carbs": 27,
      "sugars": 4,
      "fibre": 1,
      "protein": 19,
      "salt": 0.83
    },
    "description": "A Vietnamese seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ikizdm1763760862.jpg",
    "ingredients": [
      "1 L Chicken Stock",
      "2 tsp Thai Red Curry Paste",
      "100g Rice Noodles",
      "150g Shiitake Mushrooms",
      "125g Sweetcorn",
      "2 Salmon",
      "Juice of 2 Lime",
      "1 tablespoon Soy Sauce",
      "Pinch Brown Sugar",
      "Bunch Coriander"
    ],
    "instructions": [
      "Pour the stock into a large pan, bring to the boil, then stir in the curry paste. Add the noodles and cook for 8 mins. Tip in the mushrooms and corn and cook for 2 mins more.",
      "Add the salmon to the pan and cook for 3 mins or until cooked through. Remove from the heat and stir in the lime juice, soy sauce and a pinch of sugar. Ladle into 4 bowls and sprinkle over the coriander just before you serve."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/salmon-noodle-soup",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "salmon"
        ]
      },
      {
        "name": "Omega-3",
        "from": [
          "salmon"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime"
        ]
      }
    ],
    "allergens": [
      "Fish",
      "Wheat (gluten)",
      "Soy"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains oily fish (salmon). The NHS advises no more than 2 portions of oily fish a week in pregnancy.",
      "Can be salty (soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "sour-quick-1",
    "title": "Beetroot & red cabbage sauerkraut",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Makes 2 x 500ml jars",
    "nutrition": {
      "kcal": 6,
      "fat": 0.1,
      "saturates": 1,
      "carbs": 0.8,
      "sugars": 0.7,
      "fibre": 0.5,
      "protein": 0.3,
      "salt": 0.3
    },
    "description": "A Polish vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ra2k8a1764365055.jpg",
    "ingredients": [
      "320g Beetroot",
      "450g Red Cabbage",
      "1 small Onion",
      "2 tsp Caraway Seed",
      "1 tsp Sea Salt"
    ],
    "instructions": [
      "Tip all the ingredients into a large bowl, add 1-1½ tsp freshly ground black pepper, then scrunch it all together with your hands for 5 mins. You might want to wear gloves to avoid staining your skin with the beetroot juices.",
      "Press the veg down in the bowl with your hands, then cover the surface and up the side of the bowl with a large sheet of compostable cling film or something reusable like a beeswax wrap. Now place another similar-sized bowl on top. Press down hard and add anything heavy (packs of rice or cans work well) to weigh it down so the juices rise to cover the surface. Cover again.",
      "Leave to ferment at room temperature for at least five days, but for maximum flavour, leave for one-five weeks (until the bubbling subsides).",
      "Check the sauerkraut. After a few days, you will see bubbles that have built up as it ferments. Give it a stir, then cover and weigh it down again as before. The cabbage will become increasingly sour the longer it’s fermented, so taste it now and again. When you like the flavour, transfer it to sterilised jars and keep chilled. Will keep chilled for up to six months."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/beetroot-red-cabbage-sauerkraut",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "beetroot"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red cabbage"
        ]
      }
    ],
    "allergens": [],
    "cautions": []
  },
  {
    "id": "breakfast-quick-1",
    "title": "Banana Pancakes",
    "category": "quick",
    "cookingTime": "10 minutes",
    "servings": "Serves 2 (makes 4)",
    "nutrition": {
      "kcal": 243,
      "fat": 15,
      "saturates": 2,
      "carbs": 15,
      "sugars": 14,
      "fibre": 4,
      "protein": 9,
      "salt": 0.3
    },
    "description": "An United States dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    "ingredients": [
      "1 large Banana",
      "2 medium Eggs",
      "pinch Baking Powder",
      "spinkling Vanilla Extract",
      "1 tsp Oil",
      "25g Pecan Nuts",
      "125g Raspberries"
    ],
    "instructions": [
      "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla.",
      "Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/banana-pancakes",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "eggs"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "banana",
          "raspberries"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Tree nuts"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "breakfast-quick-2",
    "title": "Beetroot pancakes",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 339,
      "fat": 11,
      "saturates": 5,
      "carbs": 48,
      "sugars": 10,
      "fibre": 3,
      "protein": 11,
      "salt": 1
    },
    "description": "An Ukrainian dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/xlqqhw1764369924.jpg",
    "ingredients": [
      "3 Beetroot",
      "50 ml Milk",
      "200g Self-raising Flour",
      "1 tsp Baking Powder",
      "2 tablespoons Maple Syrup",
      "1/2 teaspoon Vanilla Extract",
      "3 Egg",
      "25g Butter",
      "200g Frozen Mixed Berries",
      "2 tablespoons Blackcurrant Jam",
      "100g Greek Yogurt"
    ],
    "instructions": [
      "Put the beetroot in a jug with the milk and blend with a stick blender until smooth. Pour into a bowl with the rest of the pancake ingredients and whisk until smooth and vibrant purple.",
      "Put a small knob of butter in a large non-stick frying pan and heat over a medium-low heat until melted and foamy. Now create 3 or 4 pancakes each made from 2 tbsp of the batter. Cook for 2-3 mins then flip over and cook for a further minute until cooked through. Repeat with any remaining batter. Heat oven to lowest setting and keep the pancakes warm in there until needed.",
      "Serve with your favourite pancake toppings or make a simple compote by simmering frozen berries in with 1 tbsp blackcurrant jam until bubbling and syrupy (about 5-10 mins). In a small bowl stir together the remaining jam and the yogurt. Stack the cooked pancakes with the yogurt and pour the warm berry compote over the top."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/beetroot-pancakes",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "beetroot"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "milk",
          "greek yogurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "egg",
          "greek yogurt"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains added sugar (maple syrup, blackcurrant jam), so it's best as an occasional treat."
    ]
  },
  {
    "id": "breakfast-quick-3",
    "title": "Pancakes",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Makes 12",
    "nutrition": {
      "kcal": 61,
      "fat": 2,
      "saturates": 1,
      "carbs": 7,
      "sugars": 1,
      "fibre": 0,
      "protein": 3,
      "salt": 0.1
    },
    "description": "An United States dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
    "ingredients": [
      "100g Flour",
      "2 large Eggs",
      "300ml Milk",
      "1 tbls Sunflower Oil",
      "to serve Sugar",
      "to serve Raspberries",
      "to serve Blueberries"
    ],
    "instructions": [
      "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.",
      "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.",
      "Serve with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/2907669/easy-pancakes",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "milk"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "eggs"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "raspberries",
          "blueberries"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains added sugar (sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "breakfast-elaborate-1",
    "title": "Provençal Omelette Cake",
    "category": "elaborate",
    "cookingTime": "85 minutes",
    "servings": "Serves 10",
    "nutrition": {
      "kcal": 231,
      "fat": 17,
      "saturates": 6,
      "carbs": 4,
      "sugars": 3,
      "fibre": 1,
      "protein": 15,
      "salt": 1.07
    },
    "description": "A France vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
    "ingredients": [
      "10 Eggs",
      "1 tbs Olive Oil",
      "2 finely chopped Courgettes",
      "3 finely chopped Spring Onions",
      "4 Red Pepper",
      "1 clove peeled crushed Garlic Clove",
      "1 Red Chilli",
      "300g Cream Cheese",
      "6 tblsp Milk",
      "4 tbs Chives",
      "2 tbs Basil",
      "to serve Rocket",
      "to serve Parmesan"
    ],
    "instructions": [
      "Break the eggs into two bowls, five in each. Whisk lightly and season with salt and pepper. Heat the oil in a pan, add the courgettes and spring onions, then fry gently for about 10 mins until softened. Cool, then stir into one bowl of eggs with a little salt and pepper. Add the roasted peppers to the other bowl of eggs with the garlic, chilli, salt and pepper.",
      "Heat a little oil in a 20-23cm frying pan, preferably non-stick. Pour the eggs with courgette into a measuring jug, then pourabout one-third of the mixture into the pan, swirling it to cover the base of the pan. Cook until the egg is set and lightly browned underneath, then cover the pan with a plate and invert the omelette onto it. Slide it back into the pan to cook the other side. Repeat with the remaining mix to make two more omelettes, adding a little oil to the pan each time. Stack the omelettes onto a plate. Make three omelettes in the same way with the red pepper mixture, then stack them on a separate plate.",
      "Now make the filling. Beat the cheese to soften it, then beat in the milk to make a spreadable consistency. Stir in the herbs, salt and pepper. Line a deep, 20-23cm round cake tin with cling film (use a tin the same size as the frying pan). Select the best red pepper omelette and place in the tin, prettiest side down. Spread with a thin layer of cheese filling, then cover with a courgette omelette. Repeat, alternating the layers, until all the omelettes and filling are in the tin, finishing with an omelette. Flip the cling film over the omelette, then chill for up to 24 hrs.",
      "To serve, invert the omelette cake onto a serving plate and peel off the cling film. Pile rocket on the top and scatter over the cheese, a drizzle of olive oil and a little freshly ground black pepper. Serve cut into wedges."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/6428/provenal-omelette-cake",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "milk",
          "parmesan"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "eggs"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Use pasteurised cream cheese (check the label)."
    ]
  },
  {
    "id": "spicy-elaborate-1",
    "title": "Kidney Bean Curry",
    "category": "elaborate",
    "cookingTime": "35 minutes",
    "servings": "Serves 2",
    "nutrition": {
      "kcal": 282,
      "fat": 8,
      "saturates": 1,
      "carbs": 32,
      "sugars": 12,
      "fibre": 14,
      "protein": 13,
      "salt": 0.06
    },
    "description": "An India vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    "ingredients": [
      "1 tbls Vegetable Oil",
      "1 finely chopped Onion",
      "2 cloves chopped Garlic",
      "1 part Ginger",
      "1 Packet Coriander",
      "1 tsp Cumin",
      "1 tsp Paprika",
      "2 tsp Garam Masala",
      "400g Chopped Tomatoes",
      "400g Kidney Beans",
      "to serve Basmati Rice"
    ],
    "instructions": [
      "Heat the oil in a large frying pan over a low-medium heat. Add the onion and a pinch of salt and cook slowly, stirring occasionally, until softened and just starting to colour. Add the garlic, ginger and coriander stalks and cook for a further 2 mins, until fragrant.",
      "Add the spices to the pan and cook for another 1 min, by which point everything should smell aromatic. Tip in the chopped tomatoes and kidney beans in their water, then bring to the boil.",
      "Turn down the heat and simmer for 15 mins until the curry is nice and thick. Season to taste, then serve with the basmati rice and the coriander leaves."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/kidney-bean-curry",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "kidney beans"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "kidney beans"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "kidney beans"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "chopped tomatoes"
        ]
      }
    ],
    "allergens": [],
    "cautions": []
  },
  {
    "id": "meat-quick-1",
    "title": "Chicken Couscous",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 281,
      "fat": 6,
      "saturates": 1,
      "carbs": 41,
      "sugars": 9,
      "fibre": 3,
      "protein": 20,
      "salt": 0.48
    },
    "description": "A Moroccan chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    "ingredients": [
      "1 tbsp Olive Oil",
      "1 chopped Onion",
      "200g Chicken Breast",
      "pinch Ginger",
      "2 tblsp Harissa Spice",
      "10 Dried Apricots",
      "220g Chickpeas",
      "200g Couscous",
      "200ml Chicken Stock",
      "Handful Coriander"
    ],
    "instructions": [
      "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.",
      "Tip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/13139/onepan-chicken-couscous",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "dried apricots",
          "chickpeas"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chicken breast",
          "chickpeas"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "dried apricots",
          "chickpeas"
        ]
      }
    ],
    "allergens": [
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-quick-2",
    "title": "Moussaka",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 342,
      "fat": 9,
      "saturates": 4,
      "carbs": 25,
      "sugars": 6,
      "fibre": 4,
      "protein": 41,
      "salt": 0.97
    },
    "description": "A Greek beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
    "ingredients": [
      "500g Beef",
      "1 large Aubergine",
      "150g Greek Yogurt",
      "1 beaten Egg",
      "3 tbs Parmesan",
      "400g Tomato",
      "4 tbs Tomato Puree",
      "350g Potatoes"
    ],
    "instructions": [
      "Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning.",
      "Stir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/must-make-moussaka",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "beef"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "greek yogurt",
          "parmesan"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "beef",
          "greek yogurt",
          "egg"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato",
          "tomato puree"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-quick-3",
    "title": "Chilli ginger lamb chops",
    "category": "quick",
    "cookingTime": "18 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 227,
      "fat": 12,
      "saturates": 4,
      "carbs": 1,
      "sugars": 0,
      "fibre": 0,
      "protein": 30,
      "salt": 0.2
    },
    "description": "A Turkish lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/8xuvhj1763794991.jpg",
    "ingredients": [
      "4 Cloves Crushed Garlic",
      "1 tblsp Ginger",
      "1 tblsp Lemon Juice",
      "1 tblsp Olive Oil",
      "1/2 tsp Chili Powder",
      "1 tsp Cumin",
      "8 Lamb Loin Chops"
    ],
    "instructions": [
      "Put the garlic in a bowl with the ginger, lemon juice, oil, spices and seasoning. Blitz with a hand blender until smooth, then use to coat the lamb chops on both sides. Leave to marinate in the fridge for a couple of hours or overnight.",
      "Heat a barbecue until hot. Barbecue the chops over the coals for 3 mins on each side until cooked but still pink and juicy in the centre."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/chilli-ginger-lamb-chops",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "lamb loin chops"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb loin chops"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon juice"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-quick-4",
    "title": "Nutty Chicken Curry",
    "category": "quick",
    "cookingTime": "18 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 358,
      "fat": 18.9,
      "saturates": 6,
      "carbs": 4,
      "sugars": 3,
      "fibre": 1,
      "protein": 43,
      "salt": 0.66
    },
    "description": "An India chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
    "ingredients": [
      "1 large Red Chilli",
      "0.5 Ginger",
      "1 large Garlic",
      "Bunch Coriander",
      "1 tbsp Sunflower Oil",
      "4 Chicken Breasts",
      "5 tblsp Peanut Butter",
      "150ml Chicken Stock",
      "200g Greek Yogurt"
    ],
    "instructions": [
      "Finely slice a quarter of the chilli, then put the rest in a food processor with the ginger, garlic, coriander stalks and one-third of the leaves. Whizz to a rough paste with a splash of water if needed.",
      "Heat the oil in a frying pan, then quickly brown the chicken chunks for 1 min. Stir in the paste for another min, then add the peanut butter, stock and yogurt. When the sauce is gently bubbling, cook for 10 mins until the chicken is just cooked through and sauce thickened. Stir in most of the remaining coriander, then scatter the rest on top with the chilli, if using. Eat with rice or mashed sweet potato."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/11753/nutty-chicken-curry",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "greek yogurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chicken breasts",
          "greek yogurt"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Peanuts"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-elaborate-1",
    "title": "Tandoori chicken",
    "category": "elaborate",
    "cookingTime": "45 minutes",
    "servings": "Serves 8",
    "nutrition": {
      "kcal": 221,
      "fat": 13,
      "saturates": 5,
      "carbs": 5,
      "sugars": 4,
      "fibre": 1,
      "protein": 20,
      "salt": 0.29
    },
    "description": "An India chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
    "ingredients": [
      "2 Juice lemons",
      "4 tsp paprika",
      "2 finely chopped red onions",
      "16 skinnless chicken thighs",
      "For brushing vegetable oil",
      "300ml Greek yogurt",
      "large piece ginger",
      "4 garlic clove",
      "¾ tsp garam masala",
      "¾ tsp ground cumin",
      "½ tsp chilli powder",
      "¼ tsp turmeric"
    ],
    "instructions": [
      "Mix the lemon juice with the paprika and red onions in a large shallow dish. Slash each chicken thigh three times, then turn them in the juice and set aside for 10 mins.",
      "Mix all of the marinade ingredients together and pour over the chicken. Give everything a good mix, then cover and chill for at least 1 hr. This can be done up to a day in advance.",
      "Heat the grill. Lift the chicken pieces onto a rack over a baking tray. Brush over a little oil and grill for 8 mins on each side or until lightly charred and completely cooked through."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "http://www.bbcgoodfood.com/recipes/1660651/tandoori-chicken",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "greek yogurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chicken thighs",
          "greek yogurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemons"
        ]
      }
    ],
    "allergens": [
      "Milk"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-elaborate-2",
    "title": "Stuffed Lamb Tomatoes",
    "category": "elaborate",
    "cookingTime": "65 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 300,
      "fat": 19,
      "saturates": 5,
      "carbs": 21,
      "sugars": 8,
      "fibre": 2,
      "protein": 14,
      "salt": 0.3
    },
    "description": "A Greek lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/u55lbp1585564013.jpg",
    "ingredients": [
      "4 large Tomatoes",
      "Pinch Sugar",
      "4 tbs Olive Oil",
      "1 chopped Onion",
      "2 finely chopped Garlic Clove",
      "200g Lamb",
      "1 tbs Cinnamon",
      "2 tbs chopped Tomato Puree",
      "50g Rice",
      "100ml Chicken Stock",
      "4 tbs Dill",
      "2 tbs Chopped Parsley",
      "1 tbs Mint"
    ],
    "instructions": [
      "Heat oven to 180C/160C fan/gas 4. Slice the tops off the tomatoes and reserve. Scoop out most of the pulp with a teaspoon, being careful not to break the skin. Finely chop the pulp, and keep any juices. Sprinkle the insides of the tomatoes with a little sugar to take away the acidity, then place them on a baking tray.",
      "Heat 2 tbsp olive oil in a large frying pan, add the onion and garlic, then gently cook for about 10 mins until soft but not coloured. Add the lamb, cinnamon and tomato purée, turn up the heat, then fry until the meat is browned. Add the tomato pulp and juice, the rice and the stock. Season generously. Bring to the boil, then simmer for 15 mins or until the rice is tender and the liquid has been absorbed. Set aside to cool a little, then stir in the herbs.",
      "Stuff the tomatoes up to the brim, top tomatoes with their lids, drizzle with 2 tbsp more olive oil, sprinkle 3 tbsp water into the tray, then bake for 35 mins. Serve with salad and crusty bread, hot or cold."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/stuffed-tomatoes-lamb-mince-dill-rice",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "lamb"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomatoes",
          "tomato puree"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-elaborate-3",
    "title": "Spanish chicken pie",
    "category": "elaborate",
    "cookingTime": "40 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 421,
      "fat": 10,
      "saturates": 2,
      "carbs": 57,
      "sugars": 10,
      "fibre": 8,
      "protein": 30,
      "salt": 1.32
    },
    "description": "A Spanish chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/8ovxf41763253962.jpg",
    "ingredients": [
      "1 kg Potatoes",
      "3 tsp Paprika",
      "2 teaspoons Olive Oil",
      "2 sliced Onion",
      "2 cloves minced Garlic",
      "800g Tinned Tomatos",
      "300g Chicken",
      "140g Roasted pepper",
      "Handful Green Olives"
    ],
    "instructions": [
      "Heat oven to 200C/fan 180C/gas 6. Boil the potatoes for 15-20 mins until tender. Drain, return to the pan, then mash with some seasoning and 2 tsp of the paprika.",
      "Meanwhile, heat the oil in a large pan, then fry the onions and garlic for a few mins until softened. Stir in the remaining paprika for 1 min, add the tomatoes , then, bring to a simmer. Tip into a large ovenproof dish, then stir in the chicken, peppers, olives and some seasoning.",
      "Spoon over the mash, then bake for 15 mins until the mash is golden on top and the sauce is bubbling."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/spanish-chicken-pie",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "chicken"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "roasted pepper"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (green olives). Go easy on any extra salt."
    ]
  },
  {
    "id": "general-quick-1",
    "title": "Hummus",
    "category": "quick",
    "cookingTime": "5 minutes",
    "servings": "Makes 4 snack portions",
    "nutrition": {
      "kcal": 135,
      "fat": 5.1,
      "saturates": 0.7,
      "carbs": 12.4,
      "sugars": 1.3,
      "fibre": 2.6,
      "protein": 7.5,
      "salt": 0.5
    },
    "description": "A Turkish side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/gpon5u1763801180.jpg",
    "ingredients": [
      "400g Chickpeas",
      "1 tablespoon Tahini Paste",
      "1 large Garlic Clove",
      "3  tablespoons Greek Yogurt",
      "Juice of half Lemon"
    ],
    "instructions": [
      "Drain the chickpeas into a sieve set over a bowl or jug to catch the liquid. Tip the chickpeas, tahini, garlic and yogurt into a food processor or blender and whizz to smooth.",
      "Whizz in a tbsp of the chickpea liquid at a time until you have a nice consistency, then scrape into a bowl.",
      "Stir in a squeeze of lemon juice and season to taste."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/easy-hummus-recipe",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "tahini paste",
          "greek yogurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chickpeas",
          "greek yogurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Sesame"
    ],
    "cautions": []
  },
  {
    "id": "general-quick-2",
    "title": "Griddled aubergines with sesame dressing",
    "category": "quick",
    "cookingTime": "30 minutes",
    "servings": "Serves 6",
    "nutrition": {
      "kcal": 194,
      "fat": 16,
      "saturates": 5,
      "carbs": 6,
      "sugars": 6,
      "fibre": 7,
      "protein": 7,
      "salt": 0.1
    },
    "description": "A Turkish vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/yoj48r1763817100.jpg",
    "ingredients": [
      "2 large Aubergine",
      "2 tablespoons Olive Oil",
      "250g Greek Yogurt",
      "3  tablespoons Tahini Paste",
      "1 clove peeled crushed Garlic",
      "Juice of 1 Lemon",
      "Handful Coriander",
      "Handful Parsley",
      "Handful Mint"
    ],
    "instructions": [
      "Brush each aubergine slice with some oil, then season. Heat a griddle pan or barbecue. When hot, griddle the aubergine slices for 2-3 mins on each side until golden brown and tender.",
      "Mix the yogurt with the tahini, garlic, lemon juice and herbs, then season. Top the aubergines with the dressing and scatter over extra herb leaves."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/griddled-aubergines-sesame-dressing",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "greek yogurt",
          "tahini paste"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "greek yogurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Sesame"
    ],
    "cautions": []
  },
  {
    "id": "general-quick-3",
    "title": "Tangy cabbage slaw",
    "category": "quick",
    "cookingTime": "15 minutes",
    "servings": "Makes enough for 12-16 pulled pork buns",
    "nutrition": {
      "kcal": 262,
      "fat": 24,
      "saturates": 4,
      "carbs": 8,
      "sugars": 7,
      "fibre": 3,
      "protein": 2,
      "salt": 1.3
    },
    "description": "An Ukrainian vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/e2g2r21764367568.jpg",
    "ingredients": [
      "250ml Mayonnaise",
      "Zest and juice of 1 Lemon",
      "2 tablespoons Cider Vinegar",
      "2 tablespoons Wholegrain Mustard",
      "1 tsp Celery Salt",
      "1/4 White Cabbage",
      "1/4 Red Cabbage",
      "2 Carrots",
      "1 Diced Onion",
      "2 sliced Celery"
    ],
    "instructions": [
      "Whisk together mayonnaise, lemon zest and juice, vinegar, mustard and celery salt in a small bowl, then season generously.",
      "Add cabbage, carrots, onion and celery. Mix well and refrigerate. Can be made up to 1 day ahead."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/tangy-cabbage-slaw",
    "nutrients": [
      {
        "name": "Fibre",
        "from": [
          "wholegrain mustard",
          "white cabbage",
          "red cabbage",
          "carrots"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon",
          "white cabbage",
          "red cabbage"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Mustard"
    ],
    "cautions": []
  },
  {
    "id": "general-quick-4",
    "title": "Cacik",
    "category": "quick",
    "cookingTime": "15 minutes",
    "servings": "Serves 6 - 8",
    "nutrition": {
      "kcal": 72,
      "fat": 4,
      "saturates": 1,
      "carbs": 6,
      "sugars": 5,
      "fibre": 0.4,
      "protein": 4,
      "salt": 0.59
    },
    "description": "A Turkish side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/16zbeu1763789342.jpg",
    "ingredients": [
      "500g Natural Yoghurt",
      "2 tsp Lemon Juice",
      "1 tablespoon Extra Virgin Olive Oil",
      "1 tablespoon Dried Mint",
      "1 Cucumber",
      "2 cloves minced Garlic"
    ],
    "instructions": [
      "Put a sieve over a large bowl, line it with a thick sheet of non-dyed kitchen paper or a clean muslin cloth, and spoon in the yogurt. Cover with another sheet of kitchen paper and leave to strain in the fridge for a minimum of 12 hrs.",
      "Add the lemon juice, most of the olive oil and the dried mint to a bowl and stir well for the dried mint to soften and soak up the juices. Mix in the strained yogurt, then pour away the strained yogurt liquid and leave that bowl to one side.",
      "Halve the cucumber(s) lengthways and remove the seeds by running a teaspoon from the top to the bottom of the flesh, halve the cucumbers widthways to make them shorter and easier to handle, then coarsely grate each one into the bowl the yogurt was straining over. Using clean hands (or a clean muslin cloth), squeeze as much of the liquid out of the cucumber as possible.",
      "Add the strained, grated cucumber, garlic and ¾ tsp flaky salt to the rest of the ingredients and mix well. Garnish with a drizzle of extra virgin olive oil and a sprinkling of dried mint."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/cacik",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "natural yoghurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon juice"
        ]
      }
    ],
    "allergens": [
      "Milk"
    ],
    "cautions": []
  },
  {
    "id": "general-quick-5",
    "title": "Grilled corn with garlic mayo & grated cheese",
    "category": "quick",
    "cookingTime": "15 minutes",
    "servings": "Serves 6",
    "nutrition": {
      "kcal": 388,
      "fat": 30,
      "saturates": 6,
      "carbs": 21,
      "sugars": 3,
      "fibre": 3,
      "protein": 9,
      "salt": 0.6
    },
    "description": "A vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/k1if4d1782589892.jpg",
    "ingredients": [
      "6 Corn On The Cob",
      "2 cloves minced Garlic",
      "6 tablespoons Mayonnaise",
      "4 tablespoons Parmesan",
      "2 tablespoons Coriander",
      "1 Lime"
    ],
    "instructions": [
      "Boil the corn cobs for 5 mins. Leave in the water until you’re ready to grill them. Mix the garlic and mayonnaise in a small bowl. Just before barbecuing, remove the cobs from the pan, pat dry and rub the mayonnaise into each one.",
      "Season the cobs and grill them until marks appear, about 5 mins. Remove and scatter over the Parmesan and coriander. Squeeze lime over to serve."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/grilled-corn-garlic-mayo-grated-cheese",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "parmesan"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg"
    ],
    "cautions": []
  },
  {
    "id": "general-elaborate-1",
    "title": "Summer Pistou",
    "category": "elaborate",
    "cookingTime": "35 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 209,
      "fat": 8,
      "saturates": 3,
      "carbs": 18,
      "sugars": 6,
      "fibre": 10,
      "protein": 12,
      "salt": 0.2
    },
    "description": "A France vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/rqtxvr1511792990.jpg",
    "ingredients": [
      "1 tbs Rapeseed Oil",
      "2 finely chopped Leek",
      "1 large Courgettes",
      "1L Vegetable Stock",
      "400g Cannellini Beans",
      "200g Green Beans",
      "3 chopped Tomatoes",
      "3 chopped Garlic Clove",
      "Small pack Basil",
      "40g Parmesan"
    ],
    "instructions": [
      "Heat the oil in a large pan and fry the leeks and courgette for 5 mins to soften. Pour in the stock, add three-quarters of the haricot beans with the green beans, half the tomatoes, and simmer for 5-8 mins until the vegetables are tender.",
      "Meanwhile, blitz the remaining beans and tomatoes, the garlic and basil in a food processor (or in a bowl with a stick blender) until smooth, then stir in the Parmesan. Stir the sauce into the soup, cook for 1 min, then ladle half into bowls or pour into a flask for a packed lunch. Chill the remainder. Will keep for a couple of days."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/summer-pistou",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "cannellini beans"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "cannellini beans"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "parmesan"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "cannellini beans"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "courgettes",
          "cannellini beans",
          "green beans"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomatoes"
        ]
      }
    ],
    "allergens": [
      "Milk"
    ],
    "cautions": []
  },
  {
    "id": "general-elaborate-2",
    "title": "Squid, chickpea & chorizo salad",
    "category": "elaborate",
    "cookingTime": "60 minutes",
    "servings": "Serves 6 - 8",
    "nutrition": {
      "kcal": 443,
      "fat": 27,
      "saturates": 5,
      "carbs": 22,
      "sugars": 8,
      "fibre": 5,
      "protein": 29,
      "salt": 1.23
    },
    "description": "An Australian seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/wsu0rc1761848482.jpg",
    "ingredients": [
      "4 Red Pepper",
      "2 400g Cans Can of chickpeas",
      "Bunch Parsley",
      "1 Red Chilli",
      "2 Garlic Clove",
      "100 ml Olive Oil",
      "600g Squid",
      "200g Chorizo",
      "Juice/zest of one Lemon"
    ],
    "instructions": [
      "Cook the peppers whole under a grill, on a barbecue or griddle, until completely charred. Place the peppers in a bowl, cover with a plate until cool enough to handle, then peel, deseed and finely slice. In a large bowl mix the peppers and any juices with the chickpeas, parsley, chilli and garlic. Set aside.",
      "Heat a large frying pan until smoking. Working quickly and carefully, add a splash of oil to the pan, then the squid. Stir-fry for about 30 secs. Scatter the chorizo over the squid, continue to cook for 30 secs more, then tip into the bowl with the peppers. Season everything with salt and pepper, then dress with the remaining oil, lemon juice and lemon zest. Mix together, pile onto a platter and let everyone help themselves."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/squid-chickpea-chorizo-salad",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "can of chickpeas"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "can of chickpeas"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "can of chickpeas"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Shellfish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (chorizo). Go easy on any extra salt."
    ]
  },
  {
    "id": "general-elaborate-3",
    "title": "Avocado dip with new potatoes",
    "category": "elaborate",
    "cookingTime": "55 minutes",
    "servings": "Serves 8",
    "nutrition": {
      "kcal": 396,
      "fat": 23,
      "saturates": 2,
      "carbs": 43,
      "sugars": 5,
      "fibre": 5,
      "protein": 7,
      "salt": 0.67
    },
    "description": "An Australian vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/flrajf1762341295.jpg",
    "ingredients": [
      "3 Large Avocado",
      "200g Natural Yoghurt",
      "Zest and juice of 1 Lime",
      "Juice of 1/2 Lemon",
      "1.25kg Baby New Potatoes",
      "2 tablespoons Olive Oil",
      "1 teaspoon Hot Chilli Powder",
      "1 teaspoon Cumin Seeds",
      "200g Tortillas"
    ],
    "instructions": [
      "Whizz half the avocado flesh with the yogurt, lime and lemon juice and seasoning. Dice the remaining avocado, then gently stir into the whizzed mix with most of the lime zest. Cover, then chill until ready to serve.",
      "Boil potatoes for 6 mins, then drain well and toss with olive oil, chilli powder and cumin seeds. Now set aside until half an hour before your guests arrive.",
      "Heat oven to 200C/180C fan/gas 6, then roast potatoes for about 30 mins, shaking the tray halfway, until golden and tender. Transfer the dip to one or two bowls, scatter with the remaining lime zest and serve with the hot potatoes, and tortilla chips for dipping."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/avocado-citrus-dip-spicy-spuds-tortilla-chips",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "avocado"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "natural yoghurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime",
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Wheat (gluten)"
    ],
    "cautions": []
  },
  {
    "id": "general-elaborate-4",
    "title": "Smoked aubergine purée",
    "category": "elaborate",
    "cookingTime": "35 minutes",
    "servings": "Serves 4",
    "nutrition": {
      "kcal": 77,
      "fat": 5,
      "saturates": 2,
      "carbs": 6,
      "sugars": 5,
      "fibre": 3,
      "protein": 4,
      "salt": 0.07
    },
    "description": "A Turkish side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/8c8m4q1763791156.jpg",
    "ingredients": [
      "2 medium Aubergine",
      "Juice of 1 Lemon",
      "3 Cloves Crushed Garlic",
      "150ml Yogurt",
      "Bunch Dill"
    ],
    "instructions": [
      "Heat grill to very hot. Slice the aubergines in half lengthways, then grill for 25 mins, turning occasionally, until soft – the skin will remain firm, but the flesh will soften. Lift the aubergines off the grill and leave until cool enough to handle.",
      "Using a sharp knife, score the grilled flesh and scoop out the flesh with a spoon. Tip into a bowl and mash with a fork until you get a thick pulp. Beat in the lemon juice and garlic. Add the yogurt and dill, and season. Serve while still warm."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/smoked-aubergine-puree",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "yogurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Milk"
    ],
    "cautions": []
  },
  {
    "id": "general-elaborate-5",
    "title": "Brazilian cheese bread (pão de queijo)",
    "category": "elaborate",
    "cookingTime": "50 minutes",
    "servings": "Makes 24 small puffs",
    "nutrition": {
      "kcal": 111,
      "fat": 6,
      "saturates": 4,
      "carbs": 11,
      "sugars": 0.5,
      "fibre": 0.1,
      "protein": 2,
      "salt": 0.3
    },
    "description": "A side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/sl7cr91782588539.jpg",
    "ingredients": [
      "Drizzle Oil",
      "250ml Whole Milk",
      "125g Unsalted Butter",
      "1 tsp Salt",
      "300g Tapioca",
      "2 Eggs",
      "100g Parmesan"
    ],
    "instructions": [
      "Heat the oven to 220C/200C fan/gas 7. Oil or butter a baking sheet and set aside.",
      "Heat the milk, butter and salt in a medium saucepan and bring to a boil. Remove from the heat and add the tapioca flour. Stir vigorously, then leave to cool a little.",
      "Pour the dough into a standing mix to beat the dough until its cool, or use a wooden spoon and beat by hand. Beat the eggs in one at a time, waiting until each is completely incorporated before adding the next. When the dough is glossy and mixed, add the parmesan. Beat again until mixed.",
      "Spoon the dough onto the baking sheet in 1 tbsp balls, 5cm apart. Bake for 30 mins until crisp and golden. Remove from the oven and eat while still warm."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/brazilian-cheese-bread-pao-de-queijo",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "whole milk",
          "parmesan"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "eggs"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  }
];
