// Shared recipe data (owned by Member 1; Member 2 may add entries).
// Every recipe must follow the structure in CLAUDE.md, section 5.
// category is "quick", "elaborate" or "nearby".
//
// These are real, published recipes from TheMealDB (https://www.themealdb.com),
// with their own photos, ingredients and steps. sourceUrl links to the original
// recipe. Recipes were left out if they use ingredients or methods that pregnancy
// food-safety guidance says to avoid (alcohol, liver/pate, raw or cold-smoked
// fish, high-mercury fish, raw or runny egg, rare meat, mould-ripened or blue
// cheese, uncooked cured meat, game, caffeine) or are deep-fried.
// cookingTime is estimated from the times written in each recipe's steps.
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
    "id": "burger-quick-1",
    "title": "Lamb Tzatziki Burgers",
    "category": "quick",
    "cookingTime": "About 25 minutes (estimated)",
    "description": "A Greek lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
    "ingredients": [
      "25g Bulgur Wheat",
      "500g Lamb Mince",
      "1 tsp Cumin",
      "1 tsp Coriander",
      "1 tsp Paprika",
      "1 clove finely chopped Garlic",
      "For frying Olive Oil",
      "4 Bun",
      "Grated Cucumber",
      "200g Greek Yogurt",
      "2 tbs Mint"
    ],
    "instructions": [
      "Tip the bulghar into a pan, cover with water and boil for 10 mins. Drain really well in a sieve, pressing out any excess water.",
      "To make the tzatziki, squeeze and discard the juice from the cucumber, then mix into the yogurt with the chopped mint and a little salt.",
      "Work the bulghar into the lamb with the spices, garlic (if using) and seasoning, then shape into 4 burgers. Brush with a little oil and fry or barbecue for about 5 mins each side until cooked all the way through. Serve in the buns (toasted if you like) with the tzatziki, tomatoes, onion and a few mint leaves."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/lamb-burgers-tzatziki",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "lamb mince"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "greek yogurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb mince",
          "greek yogurt"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "burger-elaborate-1",
    "title": "BBQ Pork Sloppy Joes",
    "category": "elaborate",
    "cookingTime": "About 55 minutes (estimated)",
    "description": "An United States pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
    "ingredients": [
      "2 Potatoes",
      "1 Red Onions",
      "2 cloves Garlic",
      "1 Lime",
      "2 Bread",
      "1 lb Pork",
      "Barbeque Sauce",
      "Hotsauce",
      "Tomato Ketchup",
      "Sugar",
      "Vegetable Oil",
      "Salt",
      "Pepper"
    ],
    "instructions": [
      "Preheat oven to 450 degrees. Wash and dry all produce. Cut sweet potatoes into ½-inch-thick wedges. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast until browned and tender, 20-25 minutes.",
      "Meanwhile, halve and peel onion. Slice as thinly as possible until you have ¼ cup (½ cup for 4 servings); finely chop remaining onion. Peel and finely chop garlic. Halve lime; squeeze juice into a small bowl. Halve buns. Add 1 TBSP butter (2 TBSP for 4) to a separate small microwave-safe bowl; microwave until melted, 30 seconds. Brush onto cut sides of buns.",
      "To bowl with lime juice, add sliced onion, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. Stir to combine; set aside to quick-pickle.",
      "Heat a drizzle of oil in a large pan over medium-high heat. Add chopped onion and season with salt and pepper. Cook, stirring, until softened, 4-5 minutes. Add garlic and cook until fragrant, 30 seconds more. Add pork and season with salt and pepper. Cook, breaking up meat into pieces, until browned and cooked through, 4-6 minutes.",
      "While pork cooks, in a third small bowl, combine BBQ sauce, pickling liquid from onion, 3 TBSP ketchup (6 TBSP for 4 servings), ½ tsp sugar (1 tsp for 4), and ¼ cup water (⅓ cup for 4). Once pork is cooked through, add BBQ sauce mixture to pan. Cook, stirring, until sauce is thickened, 2-3 minutes. Taste and season with salt and pepper.",
      "Meanwhile, toast buns in oven or toaster oven until golden, 3-5 minutes. Divide toasted buns between plates and fill with as much BBQ pork as you’d like. Top with pickled onion and hot sauce. Serve with sweet potato wedges on the side."
    ],
    "sourceName": "TheMealDB",
    "sourceUrl": "https://www.themealdb.com/meal/52995",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "pork"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime",
          "tomato ketchup",
          "pepper"
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
    "id": "fries-elaborate-1",
    "title": "Baked Yuca Fries",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "A side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/j223gc1784579841.jpg",
    "ingredients": [
      "2 large Yuca",
      "2 tablespoons Extra Virgin Olive Oil",
      "1 tsp Chilli Powder",
      "Pinch Kosher Salt",
      "Pinch Ground Black Pepper",
      "1 large Avocado",
      "1/4 cup Sour Cream",
      "Juice of 1 Lime",
      "1/4 cup Cilantro"
    ],
    "instructions": [
      "Preheat oven to 450°. Bring a large pot of water to a boil. Trim ends of yuca and cut each one in half, widthwise. Stand them on their ends and use a sharp knife to cut the waxy peel off. Cut each piece in half lengthwise and then cut in half lengthwise one more time to create 16 pieces total. Trim the fibrous center out of each piece.",
      "Place cut yuca into boiling water and let boil until fork tender, 8 to 10 minutes. Using a slotted spoon, remove from pot and place on a paper towel lined cutting board. Pat dry with another paper towel.",
      "Place dried yuca into a large bowl and toss with oil. Season with chili powder, salt, and pepper and toss again to evenly coat. Place yuca on a large baking sheet in an even layer.",
      "Bake until golden and crispy, about 25 minutes, tossing halfway through.",
      "Meanwhile make dipping sauce: In a small food processor or blender, combine avocado, sour cream, lime juice, and cilantro and blend until smooth. Season with salt and pepper.",
      "Serve fries immediately with dipping sauce."
    ],
    "sourceName": "delish.com",
    "sourceUrl": "https://www.delish.com/cooking/recipe-ideas/a36702083/yuca-fries-recipe/",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "avocado"
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
      "Milk"
    ],
    "cautions": []
  },
  {
    "id": "fries-elaborate-2",
    "title": "Apple Potato Mash (Hete bliksem)",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Netherlands side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/pa03n41777540582.jpg",
    "ingredients": [
      "250g Apples",
      "250g Potatoes",
      "1 Cinnamon Stick",
      "1 tsp Maple Syrup",
      "Sprinkling Ground Cinnamon",
      "4 Bacon",
      "200g Cheese",
      "Pinch Salt",
      "1 Egg",
      "50g Sesame Seed"
    ],
    "instructions": [
      "Clean and peel the potatoes and cut them into even size chunks. Boil them in salted water for about 10 min and then add the cleaned and chopped apples into the boiling water. Add the cinnamon stick as well. Leave to boil for another 10 minutes or until both apples and potatoes are to your liking. I like mine to be fairly chunky but that is a personal preference",
      "In the mean time bake the streaky bacon in a dry frying pan until crispy and set aside to drain on paper towels.",
      "Slice a few apple pieces and melt a little butter in a fryin pan. Add the apple slices to it and add a bit of maple syrup into the pan as well as some cinnamon. Let it simmer until the apple is soft.",
      "Prepare a plate with one whisked egg and one plate with sesame seeds. Cut your cheese into the required size. The smaller it is, the easier it is too handle.",
      "Dip the cheese into the egg and make sure it coats all sides. Then dip the cheese into the sesame seeds and make sure it is covered everywhere.",
      "Heat a non stick frying pan on high until nice and hot. Put the cheese slice in and bake until the sesame seeds are brown. You have to do this rather quickly or the cheese will melt completely. Turn and bake the other side.",
      "Drain the apples and potatoes and mash them together. Taste and add cinnamon and salt where needed. Remove the cinnamon stick before mashing"
    ],
    "sourceName": "insimoneskitchen.com",
    "sourceUrl": "https://insimoneskitchen.com/hete-bliksem-recipe-hot-lightning/#recipe",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "cheese"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "egg"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Sesame"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (bacon). Go easy on any extra salt."
    ]
  },
  {
    "id": "fried-chicken-elaborate-1",
    "title": "Thai drumsticks",
    "category": "elaborate",
    "cookingTime": "About 50 minutes (estimated)",
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
    "id": "pasta-quick-1",
    "title": "Pilchard puttanesca",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
    "description": "An Italian pasta dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
    "ingredients": [
      "300g Spaghetti",
      "1 tbls Olive Oil",
      "1 finely chopped Onion",
      "2 cloves minced Garlic",
      "1 Red Chilli",
      "1 tbls Tomato Puree",
      "425g Pilchards",
      "70g Black Olives",
      "Shaved Parmesan"
    ],
    "instructions": [
      "Cook the pasta following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato purée and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.",
      "Drain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/pilchard-puttanesca",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "pilchards"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "pilchards",
          "parmesan"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "pilchards"
        ]
      },
      {
        "name": "Omega-3",
        "from": [
          "pilchards"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato puree"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Fish",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Contains oily fish (pilchards). The NHS advises no more than 2 portions of oily fish a week in pregnancy.",
      "Can be salty (black olives). Go easy on any extra salt."
    ]
  },
  {
    "id": "pasta-quick-2",
    "title": "Spaghetti with Spanish flavours",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
    "description": "A Spanish pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/vpcqn01763335688.jpg",
    "ingredients": [
      "80g Chorizo",
      "300g Spaghetti",
      "20g Parsley",
      "2 Red Pepper",
      "2 tbsp Olive Oil",
      "50g Parmesan Cheese"
    ],
    "instructions": [
      "Put a pan of water on over a high heat to boil. Meanwhile, snip the chorizo into strips with scissors, and chop the parsley and peppers (check for stray seeds first).",
      "When the water is boiling briskly, add the spaghetti with a good measure of salt, stir and return to the boil. Cook for 3 minutes.",
      "In a large frying pan, heat the oil, add the chorizo and peppers and plenty of black pepper. Cook for a minute or so, until heated through and the juices are stained red from the paprika in the chorizo. Scoop half a mugful of pasta water from the pan, drain the remainder and tip the spaghetti into the frying pan.",
      "Add the parsley and parmesan, toss well and splash in the pasta water, to moisten. Hand round extra parmesan at the table."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/spaghetti-spanish-flavours",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "parmesan cheese"
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
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (chorizo). Go easy on any extra salt."
    ]
  },
  {
    "id": "pasta-elaborate-1",
    "title": "Spaghetti Bolognese",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "An Italian beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    "ingredients": [
      "2 onions",
      "1tbsp olive oil",
      "1 clove garlic",
      "500g lean minced beef",
      "90g mushrooms",
      "1tsp dried oregano",
      "400g can tomatoes",
      "300ml hot beef stock",
      "1tbsp tomato puree",
      "1tbsp worcestershire sauce",
      "350g spaghetti",
      "Topping parmesan"
    ],
    "instructions": [
      "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.",
      "Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.",
      "Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top."
    ],
    "sourceName": "TheMealDB",
    "sourceUrl": "https://www.themealdb.com/meal/52770",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "lean minced beef",
          "hot beef stock"
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
          "lean minced beef"
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
    "allergens": [
      "Milk",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "pasta-elaborate-2",
    "title": "Chicken Fajita Mac and Cheese",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "An United States chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
    "ingredients": [
      "500g macaroni",
      "2 cups chicken stock",
      "1/2 cup heavy cream",
      "1 packet fajita seasoning",
      "1 tsp salt",
      "3 diced chicken breast",
      "2 tbsp olive oil",
      "1 small finely diced onion",
      "2 finely diced red pepper",
      "2 cloves minced garlic",
      "1 cup cheddar cheese",
      "garnish chopped parsley"
    ],
    "instructions": [
      "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.",
      "Add your cream, stock and macaroni.",
      "Cook on low for 20 minutes. Add your cheeses, stir to combine.",
      "Top with roasted peppers and parsley."
    ],
    "sourceName": "twistedfood.co.uk",
    "sourceUrl": "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "cheddar cheese"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chicken breast"
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
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "pasta-elaborate-3",
    "title": "Mediterranean Pasta Salad",
    "category": "elaborate",
    "cookingTime": "About 50 minutes (estimated)",
    "description": "An Italian seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    "ingredients": [
      "200 g mozzarella balls",
      "250 g baby plum tomatoes",
      "1  bunch fresh basil",
      "350 g farfalle",
      "3  tablespoons extra virgin olive oil",
      "40 g Green Olives",
      "200 g tuna",
      "to taste salt",
      "to taste pepper"
    ],
    "instructions": [
      "Bring a large saucepan of salted water to the boil",
      "Add the pasta, stir once and cook for about 10 minutes or as directed on the packet.",
      "Meanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.",
      "Put the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.",
      "When the pasta is ready, drain into a colander and run cold water over it to cool it quickly.",
      "Toss the pasta into the salad bowl with the tomatoes and basil.",
      "Add the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.",
      "Sprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving."
    ],
    "sourceName": "thelemonsqueezy.com",
    "sourceUrl": "https://thelemonsqueezy.com/recipe/mediterranean-pasta-salad/",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "mozzarella balls"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "baby plum tomatoes",
          "pepper"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Fish"
    ],
    "cautions": [
      "Contains tuna. The NHS advises no more than 4 medium cans of tuna a week in pregnancy.",
      "Use pasteurised mozzarella balls (check the label).",
      "Can be salty (green olives). Go easy on any extra salt."
    ]
  },
  {
    "id": "tacos-elaborate-1",
    "title": "Chickpea Fajitas",
    "category": "elaborate",
    "cookingTime": "About 35 minutes (estimated)",
    "description": "A Mexican vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    "ingredients": [
      "400g Chickpeas",
      "1 tblsp Olive Oil",
      "pinch Paprika",
      "2 small cut chunks Tomatoes",
      "1 finely sliced Red Onions",
      "2 tsp Red Wine Vinegar",
      "1 Avocado",
      "Juice of 1 Lime",
      "Chopped Lime",
      "100g Sour Cream",
      "2 tsp Harissa Spice",
      "4 Corn Tortillas",
      "to serve Coriander"
    ],
    "instructions": [
      "Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil. Drain the chickpeas, pat dry and tip onto the prepared baking tray. Add the oil and paprika, toss to coat, then roast for 20-25 mins until browned and crisp, shaking halfway through cooking.",
      "Meanwhile, put the tomatoes and onion in a small bowl with the vinegar and set aside to pickle. Put the avocado in another bowl and mash with a fork, leaving some larger chunks. Stir in the lime juice and season well. Mix the soured cream with the harissa and set aside until ready to serve.",
      "Heat a griddle pan until nearly smoking. Add the tortillas , one at a time, charring each side until hot with griddle lines.",
      "Put everything on the table and build the fajitas : spread a little of the harissa cream over the tortilla, top with roasted chickpeas, guacamole, pickled salsa and coriander, if you like. Serve with the lime wedges for squeezing over."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/chickpea-fajitas",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "chickpeas",
          "avocado"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomatoes",
          "lime"
        ]
      }
    ],
    "allergens": [
      "Milk"
    ],
    "cautions": []
  },
  {
    "id": "tacos-elaborate-2",
    "title": "Mango Tropical Salsa",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "A side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ukeksq1784395551.jpg",
    "ingredients": [
      "1/4 cup Red Onions",
      "1/4 cup Red Pepper",
      "2 1/2 cups Tomato",
      "1 1/2 cups Mango",
      "1 cup Avocado",
      "1/4 cup Cilantro",
      "1/3 cup Lime juice",
      "1 tsp Salt",
      "1 tsp Black Pepper"
    ],
    "instructions": [
      "In a large bowl, combine all the ingredients together, mix well! Cover and refrigerate for at least 15 min before serving. Serve with chips",
      "I recommend to make this salsa just 15 to 20 minutes before serving, it you make it to early it will get a little to soupy. Have everything chopped and ready and just put it together when your guest arrive."
    ],
    "sourceName": "recipesfromcostarica.com",
    "sourceUrl": "https://www.recipesfromcostarica.com/recipes",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "avocado"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "tomato",
          "mango",
          "lime juice"
        ]
      }
    ],
    "allergens": [],
    "cautions": []
  },
  {
    "id": "tacos-elaborate-3",
    "title": "Pollo en Salsa",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "A chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/4o13oe1784396585.jpg",
    "ingredients": [
      "4 Chicken Thighs",
      "1 tsp Oregano",
      "1 tsp Cumin",
      "1 tsp Salt",
      "1 tsp Pepper",
      "1 1/2 tsp Achiote Paste",
      "4 Cloves Crushed Garlic",
      "1 medium Onion",
      "1 large Tomato",
      "1/2 Red Pepper",
      "2 cups Chicken Stock"
    ],
    "instructions": [
      "Chopped pepper, onion and tomato and set aside. Turn on Instant Pot in sauteed setting for 8 minutes. Add a little bit of olive oil and add, onion, garlic, tomato, bell pepper, cumin, oregano salt and pepper and sauteed for 4 minutes.",
      "Add the chicken and cook for 2 minutes on each side often, mixing often. Add the chicken stock , cover and set the pressure cooker on high for 20 minutes. When done release the pressure and if need it, add a little bit more salt. I like to serve it with some of the juice over rice and beans."
    ],
    "sourceName": "recipesfromcostarica.com",
    "sourceUrl": "https://www.recipesfromcostarica.com/recipes",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "chicken thighs"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "pepper",
          "tomato",
          "red pepper"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "tacos-elaborate-4",
    "title": "Chicken Enchilada Casserole",
    "category": "elaborate",
    "cookingTime": "About 60 minutes (estimated)",
    "description": "A Mexican chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
    "ingredients": [
      "14 oz jar Enchilada sauce",
      "3 Cups shredded Monterey Jack cheese",
      "6 corn tortillas",
      "2 chicken breasts"
    ],
    "instructions": [
      "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom.",
      "Remove chicken from the pot and shred with two forks.",
      "Preheat oven to 375 F degrees.",
      "Start layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.",
      "Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.",
      "Serve warm."
    ],
    "sourceName": "TheMealDB",
    "sourceUrl": "https://www.themealdb.com/meal/52765",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "shredded monterey jack cheese"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chicken breasts"
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
    "id": "asian-quick-1",
    "title": "Mee goreng mamak",
    "category": "quick",
    "cookingTime": "About 10 minutes (estimated)",
    "description": "A Malaysian seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
    "ingredients": [
      "50g Peanuts",
      "15g Chilli",
      "10g Prawns",
      "5 tbs Oil",
      "750 ml Water",
      "1/2 tbs Tamarind Paste",
      "250g Potatoes",
      "2 Red Onions",
      "4 Garlic Clove",
      "30g Cabbage",
      "30g Chinese Broccoli",
      "1 Tofu",
      "1 tbs Soy Sauce",
      "4 Noodles",
      "1 Egg"
    ],
    "instructions": [
      "Heat oil in a pan at medium heat. Then, add peanuts, dried chilies, dried shrimps and dhal. Fry the aromatics until fragrant. Remove from pan and leave aside.",
      "Blend fried ingredients with tamarind paste and water until fine. Then, sauté the blended ingredients in oil heated over low heat. Continue cooking until the oil separates from the paste and turns a darker shade.",
      "Skin and cut potatoes into small chunks and boil them in a pot of water until knife-tender. Once ready, remove them from the pot and leave aside. Discard water.",
      "Slice onion and fried tofu, mince garlic, cut some cabbage and Chinese flowering cabbage (choi sam). Prepare prawn fritters and cut them. Boil noodles to soften them if bought dried. Also mix black soy sauce with water.",
      "To fry one portion of mee goreng mamak, heat oil and add 1/4 of the following ingredients in this order: garlic, onion, paste. Sauté until fragrant. Optionally, add prawns.",
      "Add in 1/4 amount of tofu, boiled potatoes, cabbage, Chinese flowering cabbage and prawn fritters. Sauté for another 30 seconds.",
      "Add noodles to the wok. Add 3 tablespoons of dark soy sauce mixture. Mix evenly for the next 1 minute. Then, move the noodles to the side of the wok. Stir in an egg. Garnish with a slice of lime and slices of green chilies. To cook another plate of noodles, repeat from step 5 onwards."
    ],
    "sourceName": "nyonyacooking.com",
    "sourceUrl": "https://www.nyonyacooking.com/recipes/mee-goreng-mamak~BkTLRjTuX",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "chinese broccoli"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "tofu"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "tofu"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "prawns",
          "tofu",
          "egg"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "cabbage",
          "chinese broccoli"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "cabbage",
          "chinese broccoli"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Shellfish",
      "Peanuts",
      "Wheat (gluten)",
      "Soy"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "asian-quick-2",
    "title": "Ma Po Tofu",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Chinese beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/1525874812.jpg",
    "ingredients": [
      "450g Tofu",
      "100g Minced Beef",
      "1/2 tbs Sesame Seed Oil",
      "1 1/2 tsp Doubanjiang",
      "1/2 tsp Fermented Black Beans",
      "1 tbs Pepper",
      "1/2 tsp Salt",
      "1/2 tsp Sichuan pepper",
      "1 tbs Soy Sauce",
      "400ml Water",
      "2 tbs Olive Oil",
      "2 chopped Scallions",
      "4 Spring Onions",
      "2 cloves chopped Garlic",
      "4 sliced Ginger",
      "2 1/2 tbs Water",
      "1 tbs Cornstarch"
    ],
    "instructions": [
      "Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.",
      "Mix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.",
      "Cut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.",
      "Get a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.",
      "Fry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.",
      "Add water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.",
      "Stir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.",
      "Transfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.",
      "Serve immediately with steamed rice."
    ],
    "sourceName": "chinasichuanfood.com",
    "sourceUrl": "https://www.chinasichuanfood.com/mapo-tofu-recipe/",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "fermented black beans"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "tofu",
          "minced beef",
          "fermented black beans"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "tofu"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "tofu",
          "minced beef",
          "fermented black beans"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "pepper",
          "sichuan pepper"
        ]
      }
    ],
    "allergens": [
      "Wheat (gluten)",
      "Soy",
      "Sesame"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "asian-quick-3",
    "title": "Roti john",
    "category": "quick",
    "cookingTime": "About 10 minutes (estimated)",
    "description": "A Malaysian beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",
    "ingredients": [
      "1/4 lb Minced Beef",
      "1 Onion",
      "3 Eggs",
      "1 tbs Chilli",
      "1/2 Baguette",
      "To taste Salt",
      "To taste Pepper",
      "Top Mayonnaise"
    ],
    "instructions": [
      "Mix all the ingredients in a bowl.",
      "Heat a pan or griddle with a little vegetable oil.",
      "Pour the mixture onto the pan and place a piece of open-faced baguette on top.",
      "Press on the bread with a spatula and grill for 2 minutes.",
      "Turn the bread over to make it a little crispy.",
      "Remove from pan and cut the bread into small portions.",
      "Add mayonnaise and/or Sambal before cutting the sandwich (optional)."
    ],
    "sourceName": "196flavors.com",
    "sourceUrl": "https://www.196flavors.com/malaysia-roti-john/",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "minced beef"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "minced beef",
          "eggs"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "pepper"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "asian-quick-4",
    "title": "Thai coconut & veg broth",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Thai vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/4k8nzy1763583384.jpg",
    "ingredients": [
      "1 ½ tbsp Thai Red Curry Paste",
      "1 tsp Vegetable Oil",
      "1 L Vegetable Stock",
      "400ml Coconut Milk",
      "2 tsp Brown Sugar",
      "175g Egg Noodles",
      "2 Carrots",
      "1/2 Chinese Leaf",
      "150g Bean Sprouts",
      "6 Cherry Tomatoes",
      "Juice of 1 Lime",
      "3 sliced thinly Spring Onions",
      "Handful Coriander"
    ],
    "instructions": [
      "Place the curry paste in a large saucepan or wok with the oil. Fry for 1 min until fragrant. Tip in the vegetable stock, coconut milk and brown sugar. Simmer for 3 mins.",
      "Add the noodles, carrots and Chinese leaf and simmer for 4-6 mins, until all are tender. Mix in beansprouts and tomatoes. Add lime juice to taste and some extra seasoning, if you like. Spoon into bowls and sprinkle with spring onions and coriander."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/thai-coconut-veg-broth",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "egg noodles"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "cherry tomatoes",
          "lime"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Cook bean sprouts thoroughly; don't eat them raw."
    ]
  },
  {
    "id": "asian-elaborate-1",
    "title": "Rice paper dumplings",
    "category": "elaborate",
    "cookingTime": "About 35 minutes (estimated)",
    "description": "A Vietnamese pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/sfahy01763752319.jpg",
    "ingredients": [
      "1/4 White Cabbage",
      "1 Carrots",
      "100g Shiitake Mushrooms",
      "400g Ground Pork",
      "2 cloves minced Garlic",
      "20g Ginger",
      "2 tsp Soy Sauce",
      "2 tsp Sesame Seed Oil",
      "3 sliced thinly Spring Onions",
      "20 Rice Paper Sheets",
      "75 ml Vegetable Oil",
      "2 tablespoons Soy Sauce",
      "2 tablespoons Rice Vinegar",
      "1/2 tbs Sesame Seed",
      "2 sliced Spring Onions"
    ],
    "instructions": [
      "Tip the cabbage into a food processor and blitz until finely chopped. Season with ½ tsp salt, toss well and set aside for 15 mins. Tip into a clean tea towel and squeeze out as much water as you can. Tip into a bowl with the carrot, mushrooms, pork mince, garlic, ginger, soy sauce, sesame oil and spring onions. Season with black pepper. Scrunch everything together using your hands, mixing well until everything is combined.",
      "Soak the spring roll sheets for a couple of seconds in a shallow dish of warm water, then transfer to an oiled chopping board. Working with one sheet at a time, spoon 1 heaped tbsp of the filling into the middle, then fold the bottom up and over the filling. Fold down the top of the sheet, then the sides to fully encase and make a neat square. If the dumpling feels a little fragile, soak another sheet and wrap it again. Repeat with the remaining sheets and filling, transferring the dumplings to an oiled plate as you go.",
      "Heat the oil in a large, non-stick frying pan (ensuring it is no more than a third full) over a medium-high heat and fry the dumplings for 3-5 mins until golden brown. Use a slotted spoon or spider to turn them, then cover with a lid and cook for another 3-4 mins until golden. Remove the lid and cook for 1-2 mins.",
      "Meanwhile, combine all the dipping sauce ingredients in small bowl. Serve the dumplings with the dipping sauce on the side."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/rice-paper-dumplings",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "ground pork"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "white cabbage",
          "carrots"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "white cabbage"
        ]
      }
    ],
    "allergens": [
      "Wheat (gluten)",
      "Soy",
      "Sesame"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "seafood-quick-1",
    "title": "Salmon Avocado Salad",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
    "description": "A British seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    "ingredients": [
      "400g Salmon",
      "3 Avocado",
      "1 Cucumber",
      "400g Spinach",
      "4 tbs Mint",
      "zest and juice of 1 Lime",
      "2 tsp Honey",
      "3 tbs Olive Oil"
    ],
    "instructions": [
      "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.",
      "Heat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/4521/salmon-avocado-and-cucumber-salad",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "avocado",
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
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains oily fish (salmon). The NHS advises no more than 2 portions of oily fish a week in pregnancy."
    ]
  },
  {
    "id": "seafood-quick-2",
    "title": "Cajun spiced fish tacos",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Mexican seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    "ingredients": [
      "2 tbsp cajun",
      "1 tsp cayenne pepper",
      "4 fillets white fish",
      "1 tsp vegetable oil",
      "8 flour tortilla",
      "1 sliced avocado",
      "2 shredded little gem lettuce",
      "4 shredded Spring Onions",
      "1 x 300ml salsa",
      "1 pot sour cream",
      "1 lemon",
      "1 clove finely chopped garlic"
    ],
    "instructions": [
      "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery.",
      "On a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over.",
      "Heat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan.",
      "Meanwhile, prepare the dressing by combining all the ingredients with a little seasoning.",
      "Soften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing."
    ],
    "sourceName": "realfood.tesco.com",
    "sourceUrl": "https://realfood.tesco.com/recipes/cajun-spiced-fish-tacos.html",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "avocado"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "white fish"
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
      "Fish",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "seafood-quick-3",
    "title": "Prawns with Romesco sauce",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Spanish seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/u03xhi1763308917.jpg",
    "ingredients": [
      "1 Red Pepper",
      "3 Large Garlic Clove",
      "1 large Red Chilli",
      "1 large Tomato",
      "10 Shelled Hazelnuts",
      "10 Almonds",
      "3 sprigs Parsley",
      "1 sliced Bread",
      "120ml Olive Oil",
      "2 tblsp Red Wine Vinegar",
      "400g Tiger Prawns"
    ],
    "instructions": [
      "Prepare ahead - halve the pepper lengthways and remove the seeds and stalk. Line a grill pan with foil and put the pepper halves, skin side up, on the grill pan with the whole garlic cloves, chilli and tomato. Grill for 2 minutes, turn the tomato, then grill for a further 2 minutes. Remove the tomato with a large spoon, then peel, quarter and remove the seeds. Then chop the tomato roughly.",
      "Continue grilling the pepper, chilli and garlic for 4-5 minutes, until the pepper and chilli skins have blackened and the garlic is starting to soften (the garlic skin will start to split when it is ready). When cool enough to handle, peel and halve the chilli, and scrape out and discard the seeds. Peel the pepper and roughly chop both the pepper and chilli.",
      "Spread nuts over the foil and grill until toasted. Finely chop the nuts and parsley in a food processor. Tip into a small bowl.",
      "Heat 3 tablespoons of oil in a frying pan, add the pepper, garlic and chilli and fry for 3 minutes. Tear up the bread and add to the pan, turning it in the oil until lightly browned. Pulse in food processor with the tomatoes, salt, vinegar and oil until roughly chopped. Tip into a bowl. Leave to cool and store in fridge for up to 3 days.",
      "On the day add the nuts and parsley to the sauce and mix. Serve in a small bowl on a plate with the peeled prawns. Supply cocktail sticks for spearing the prawns."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/prawns-romesco-sauce",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "almonds"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "tiger prawns"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "tomato"
        ]
      }
    ],
    "allergens": [
      "Shellfish",
      "Tree nuts",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "seafood-quick-4",
    "title": "Fish Soup (Ukha)",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Russian seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
    "ingredients": [
      "2 tbs Olive Oil",
      "1 sliced Onion",
      "2 medium Carrots",
      "3 cups Fish Stock",
      "3 cups Water",
      "4 large Potatoes",
      "3 Bay Leaf",
      "1 Cod",
      "1 Salmon"
    ],
    "instructions": [
      "In a medium pot, heat the olive oil over medium-high heat. Add the onions and cook, stirring occasionally until the onions start to caramelize. Add the carrots and cook until the carrots start to soften, about 4 more minutes.",
      "Add the stock, water, potatoes, bay leaves, and black peppercorns. Season with salt and bring to a boil. Reduce heat, cover and cook for 10 minutes. Add the millet and cook for 15 more minutes until millet and potatoes are cooked.",
      "Gently add the fish cubes. Stir and bring the soup to a simmer. The fish will cook through very fast, so make sure to not overcook them. They are done when the flesh is opaque and flakes easily.",
      "Garnish the soup with chopped fresh dill or parsley before serving."
    ],
    "sourceName": "curiouscuisiniere.com",
    "sourceUrl": "https://www.curiouscuisiniere.com/ukha-russian-fish-soup/",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "cod",
          "salmon"
        ]
      },
      {
        "name": "Omega-3",
        "from": [
          "salmon"
        ]
      }
    ],
    "allergens": [
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains oily fish (salmon). The NHS advises no more than 2 portions of oily fish a week in pregnancy."
    ]
  },
  {
    "id": "seafood-elaborate-1",
    "title": "Jamaican Curry Shrimp Recipe",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Jamaican seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/n7h5zs1765318909.jpg",
    "ingredients": [
      "1 lb Jumbo Shrimp",
      "2.5 tbsp Jamaican Curry Powder",
      "1 tsp All-purpose Seasoning",
      "2 tablespoons Olive Oil",
      "1 sliced Onion",
      "1 sliced Red Pepper",
      "1 sliced Green Pepper",
      "1 sliced Scotch Bonnet",
      "3 cloves Chopped Garlic",
      "380g Unsweetened Coconut Milk",
      "1/2 tbs Tomato Ketchup",
      "4 sprigs Thyme",
      "To taste Salt",
      "To taste Pepper"
    ],
    "instructions": [
      "Season shrimp with 1 Tablespoon of curry powder and all-purpose seasoning and set aside for about 10 minutes while you prepare the other ingredients like chopping your onions, peppers, and garlic.",
      "Heat 2 Tablespoons of olive oil in a large skillet over medium heat. Add sliced yellow onion, red bell pepper, green bell pepper, scotch bonnet pepper, if using, and chopped garlic and stir for 5 minutes, until peppers are slightly softened.",
      "Add 1.5 Tablespoons of curry powder to the skillet and stir for an additional minute.",
      "Then add coconut milk, seasoned shrimp, ketchup, and thyme, making sure the shrimp is covered in the sauce.",
      "Allow the sauce to come to a simmer and continue to cook over medium heat, stirring occasionally and flipping the shrimp halfway, until the shrimp is fully cooked on both sides. This should take about 5-6 minutes. Salt and pepper to taste."
    ],
    "sourceName": "myforkinglife.com",
    "sourceUrl": "https://www.myforkinglife.com/jamaican-curry-shrimp/#recipe",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "jumbo shrimp"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "green pepper",
          "tomato ketchup",
          "pepper"
        ]
      }
    ],
    "allergens": [
      "Shellfish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "seafood-elaborate-2",
    "title": "Salmon noodle wraps",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Vietnamese seafood dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/prrirc1763781360.jpg",
    "ingredients": [
      "100g Rice Noodles",
      "3 sliced thinly Spring Onions",
      "50g Petit Pois",
      "85g Chilli",
      "85g Coriander",
      "85g Lime",
      "300g Salmon"
    ],
    "instructions": [
      "Heat oven to 200C/fan 180C/gas 6. Put the noodles in a bowl and pour over enough boiling water to just cover them. Leave for 2 mins, until they are bendable, but not too soft, then drain well. Return to the bowl with the spring onions, petit pois, salt and pepper and a third of the butter. Mix well until the butter has melted.",
      "Pile the noodles and vegetables onto two large squares of baking parchment, then sit the salmon on top. Slice the remaining butter and arrange over the top of the salmon. Bring the ends of the paper over the fish, fold them together to seal, then tuck the ends of the paper underneath so there are no gaps. Put the parcels on a baking sheet and bake for 15-20 mins. Transfer to dinner plates and serve without delay."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/salmon-noodle-wraps",
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
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains oily fish (salmon). The NHS advises no more than 2 portions of oily fish a week in pregnancy."
    ]
  },
  {
    "id": "seafood-elaborate-3",
    "title": "Seafood fideuà",
    "category": "elaborate",
    "cookingTime": "About 50 minutes (estimated)",
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
    "id": "seafood-elaborate-4",
    "title": "Baked salmon with fennel & tomatoes",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
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
    "id": "sour-quick-1",
    "title": "Beetroot & red cabbage sauerkraut",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
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
    "id": "sour-elaborate-1",
    "title": "Samlar Machu Kreung – Cambodian Sour Stew",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "A chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/bmbvjk1782770310.jpg",
    "ingredients": [
      "1 lb Chicken Thighs",
      "1 tablespoon Vegetable Oil",
      "4 cups Water",
      "2 tablespoons Tamarind Paste",
      "1 tablespoon Fish Sauce",
      "1 tsp Sugar",
      "1 cup Pineapple Chunks",
      "1 cup Cherry Tomatoes",
      "1 cup Green Beans",
      "1 Stalk Lemongrass",
      "2 Kaffir Lime Leaves",
      "1 sliced Chilli"
    ],
    "instructions": [
      "Heat 1 tbsp vegetable oil in a large pot over medium-high heat until it shimmers, about 1 minute.",
      "Add 1 lb boneless, skinless chicken thighs to the pot and cook until browned on all sides, approximately 5-7 minutes, stirring occasionally to prevent sticking.",
      "Pour 4 cups water into the pot and bring to a boil, then reduce heat to a simmer.",
      "Stir in 2 tbsp tamarind paste, 1 tbsp fish sauce, and 1 tsp sugar until fully dissolved, about 1 minute.",
      "Add 1 stalk lemongrass and 2 kaffir lime leaves to the pot, then cover and simmer for 10 minutes to infuse the broth with flavor.",
      "Tip: Bruising the lemongrass before adding helps release its essential oils for a more aromatic stew.",
      "Add 1 cup pineapple chunks, 1 cup cherry tomatoes, and 1 cup green beans to the pot, stirring gently to combine.",
      "Simmer uncovered for 10-12 minutes, or until the green beans are tender but still crisp and the tomatoes start to soften.",
      "Tip: Avoid overcooking the vegetables to maintain their vibrant color and texture in the final dish.",
      "Stir in 1 Thai chili and simmer for an additional 2 minutes to incorporate the heat.",
      "Tip: Taste the broth and adjust with extra tamarind paste or fish sauce if desired, but do so gradually to avoid overpowering the balance.",
      "Remove the pot from heat and discard the lemongrass and kaffir lime leaves before serving.",
      "Present the stew hot in bowls, optionally garnished with fresh herbs like cilantro."
    ],
    "sourceName": "recipes-for-life.com",
    "sourceUrl": "https://recipes-for-life.com/cambodian-recipes/",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "chicken thighs"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "pineapple chunks",
          "cherry tomatoes",
          "kaffir lime leaves"
        ]
      }
    ],
    "allergens": [
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (fish sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "sour-elaborate-2",
    "title": "Sweet and Sour Pork",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Chinese pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/1529442316.jpg",
    "ingredients": [
      "200g Pork",
      "1 Egg",
      "Dash Water",
      "1/2 tsp Salt",
      "1 tsp Sugar",
      "10g Soy Sauce",
      "10g Starch",
      "30g Tomato Puree",
      "10g Vinegar",
      "Dash Coriander"
    ],
    "instructions": [
      "Preparation",
      "Crack the egg into a bowl. Separate the egg white and yolk.",
      "Sweet and Sour Pork",
      "Slice the pork tenderloin into strips.",
      "Prepare the marinade using a pinch of salt, one teaspoon of starch, two teaspoons of light soy sauce, and an egg white.",
      "Marinade the pork strips for about 20 minutes.",
      "Put the remaining starch in a bowl. Add some water and vinegar to make a starchy sauce.",
      "Sweet and Sour Pork",
      "Cooking Instructions",
      "Pour the cooking oil into a wok and heat to 190°C (375°F). Add the marinated pork strips and fry them until they turn brown. Remove the cooked pork from the wok and place on a plate.",
      "Leave some oil in the wok. Put the tomato sauce and white sugar into the wok, and heat until the oil and sauce are fully combined.",
      "Add some water to the wok and thoroughly heat the sweet and sour sauce before adding the pork strips to it.",
      "Pour in the starchy sauce. Stir-fry all the ingredients until the pork and sauce are thoroughly mixed together.",
      "Serve on a plate and add some coriander for decoration."
    ],
    "sourceName": "chinahighlights.com",
    "sourceUrl": "https://www.chinahighlights.com/travelguide/chinese-food/cooking/sweet-sour-pork.htm",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "pork",
          "egg"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato puree"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Wheat (gluten)",
      "Soy"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "candy-elaborate-1",
    "title": "Blueberry & lemon friands",
    "category": "elaborate",
    "cookingTime": "About 35 minutes (estimated)",
    "description": "An Australian dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/e756bf1761848342.jpg",
    "ingredients": [
      "100g Unsalted Butter",
      "125g Icing Sugar",
      "25g Flour",
      "85g Almonds",
      "3 Egg White",
      "1 Unwaxed Lemon",
      "85g Blackberries"
    ],
    "instructions": [
      "Preheat the oven to fan 180C/conventional 200C/gas 6. Generously butter six non-stick friand or muffin tins. Melt the butter and set aside to cool.",
      "Sift the icing sugar and flour into a bowl. Add the almonds and mix everything between your fingers.",
      "Whisk the egg whites in another bowl until they form a light, floppy foam. Make a well in the centre of the dry ingredients, tip in the egg whites and lemon rind, then lightly stir in the butter to form a soft batter.",
      "Divide the batter among the tins, a large serving spoon is perfect for this job. Sprinkle a handful of blueberries over each cake and bake for 15-20 minutes until just firm to the touch and golden brown.",
      "Cool in the tins for 5 minutes, then turn out and cool on a wire rack. To serve, dust lightly with icing sugar."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/blueberry-lemon-friands",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "almonds"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "egg white"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "unwaxed lemon"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Tree nuts",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains added sugar (icing sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "candy-elaborate-2",
    "title": "Peach & Blueberry Grunt",
    "category": "elaborate",
    "cookingTime": "About 40 minutes (estimated)",
    "description": "An United States dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ssxvup1511387476.jpg",
    "ingredients": [
      "1 tsp Corn Flour",
      "Juice of 2 Orange",
      "Zest of 1 Orange",
      "2 tbs Caster Sugar",
      "6 Peaches",
      "250g Blueberries",
      "200g Self-raising Flour",
      "50g Butter",
      "100g Muscovado Sugar",
      "1 tsp Cinnamon",
      "6 tblsp Milk"
    ],
    "instructions": [
      "Heat oven to 190C/170C fan/gas 5. Butter a wide shallow ovenproof dish. Blend the cornflour with the orange zest and juice, and put in a large pan with the sugar. Halve, stone and slice the peaches and add to the pan. Bring slowly to the boil, stirring gently until the sauce is shiny and thickened, about 3-4 mins. Remove from the heat, stir in the blueberries and tip into the prepared dish.",
      "Tip the flour into a mixing bowl and add the 50g butter. Rub the butter into the flour until it resembles fine breadcrumbs, then stir in half the sugar. Mix the remaining sugar with the cinnamon and set aside.",
      "Add the milk to the dry ingredients and mix to a soft dough. Turn out onto a lightly floured surface and knead briefly. Roll out to an oblong roughly 16 x 24cm. Brush with melted butter and sprinkle evenly with the spicy sugar. Roll up from one long side and cut into 12 slices. Arrange around the top of the dish, leaving the centre uncovered.",
      "Bake for 20-25 mins, until the topping is crisp and golden. Serve warm."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/1553651/peach-and-blueberry-grunt",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "orange"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "milk"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "orange"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Contains added sugar (caster sugar, muscovado sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "candy-elaborate-3",
    "title": "Strawberry tart",
    "category": "elaborate",
    "cookingTime": "About 35 minutes (estimated)",
    "description": "A dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/9kmyly1784660555.jpg",
    "ingredients": [
      "250g Marzipan",
      "80g Sugar",
      "7 oz Butter",
      "4 Eggs",
      "50g All purpose flour",
      "100g Dark Chocolate",
      "3 tsp vanilla sugar",
      "3 Egg Yolks",
      "50g Sugar",
      "2 tablespoons Cornstarch",
      "3/4 cup Milk",
      "1/2 cup Double Cream",
      "500g Strawberries",
      "Handful Mint"
    ],
    "instructions": [
      "Tart shell",
      "Heat oven to 175°C / 347 °F",
      "Grate the marzipan and mix thoroughly with the sugar. Whip the mixture with butter until fluffy.",
      "Whip the eggs into the mixture and then folk the flour into the dough. Line an approximately 24 cm springform pan with baking paper and grease with butter. Then roll out the dough and transfer to the pan. Bake in the middle of the oven for approximately 25 minutes. Prepare the vanilla custard while the dough bakes.",
      "Finely chop the chocolate and sprinkle over the shell after baking. Spread out the chocolate with a spatula as it melts. Allow the shell to cool to room temperature.",
      "Vanilla custard",
      "Mix vanilla sugar, egg yolks, sugar and corn starch in a saucepan. Turn the heat to medium and whisk in the milk. Heat the mixture while stirring until it thickens. Transfer the custard to a container and cool completely.",
      "Whip the double cream to a light foam and folk into the cooled vanilla custard.",
      "Tart assembly",
      "Rinse the strawberries, remove the stems and quarter from top to bottom",
      "Spread the vanilla custard in a thick layer on top of the tart shell. Top with the fresh strawberries and fresh mint (optional). Bon appétit!"
    ],
    "sourceName": "denmark.dk",
    "sourceUrl": "https://denmark.dk/people-and-culture/recipes/strawberry-tart/",
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
          "eggs",
          "egg yolks"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "strawberries"
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
      "Contains added sugar (sugar, vanilla sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "bakery-elaborate-1",
    "title": "Cashew Ghoriba Biscuits",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Tunisian dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
    "ingredients": [
      "250g Cashew Nuts",
      "100g Icing Sugar",
      "2 Egg Yolks",
      "2 tbs Orange Blossom Water",
      "To Glaze Icing Sugar",
      "100g Almonds"
    ],
    "instructions": [
      "Preheat the oven at 180 C / Gas 4. Line a baking tray with greaseproof paper.",
      "In a bowl, mix the cashews and icing sugar. Add the egg yolks and orange blossom water and mix to a smooth homogeneous paste.",
      "Take lumps of the cashew paste and shape into small balls. Roll the balls in icing sugar and transfer to the baking tray. Push an almond in the centre of each ghribia.",
      "Bake until the biscuits are lightly golden, about 20 minutes. Keep an eye on them, they burn quickly."
    ],
    "sourceName": "allrecipes.co.uk",
    "sourceUrl": "http://allrecipes.co.uk/recipe/40152/cashew-ghoriba-biscuits.aspx",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "orange blossom water"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "almonds"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "egg yolks"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "orange blossom water"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Tree nuts"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains added sugar (icing sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "bakery-elaborate-2",
    "title": "Apple Pie",
    "category": "elaborate",
    "cookingTime": "About 40 minutes (estimated)",
    "description": "A dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/stnxzp1784835840.jpg",
    "ingredients": [
      "4 Apples",
      "2 Eggs",
      "125ml Sugar",
      "1 1/2 cups Flour",
      "1/2 tsp Salt",
      "1 tsp Bicarbonate Of Soda",
      "250ml Sour Milk"
    ],
    "instructions": [
      "Peel and clean apples/rhubarb, cut in to a slices",
      "beat eggs and sugar together into a light foam",
      "Mix together flour, salt and baking powder",
      "Add  the dry ingredients to the egg mixture and add sour milk gradually while stirring,  Add berries.",
      "Pour dough in to a butter greased pan. Sprinkle over sugar (and cinnamon). Bake at 180 C for 30 minute"
    ],
    "sourceName": "estoniancuisine.com",
    "sourceUrl": "https://estoniancuisine.com/2017/07/07/soft-grandmothers-apple-or-rhubarb-pie/",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "sour milk"
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
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains added sugar (sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "bakery-elaborate-3",
    "title": "Rock Cakes",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A British dessert dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
    "ingredients": [
      "225g Self-raising Flour",
      "75g Caster Sugar",
      "1 tsp Baking Powder",
      "125g Butter",
      "150g Dried Fruit",
      "1 Eggs",
      "1 tbs Milk",
      "2 tsp Vanilla Extract"
    ],
    "instructions": [
      "Preheat oven to 180C/350F/Gas 4 and line a baking tray with baking parchment.",
      "Mix the flour, sugar and baking powder in a bowl and rub in the cubed butter until the mixture looks like breadcrumbs, then mix in the dried fruit.",
      "In a clean bowl, beat the egg and milk together with the vanilla extract.",
      "Add the egg mixture to the dry ingredients and stir with a spoon until the mixture just comes together as a thick, lumpy dough. Add a teaspoon more milk if you really need it to make the mixture stick together.",
      "Place golfball-sized spoons of the mixture onto the prepared baking tray. Leave space between them as they will flatten and spread out to double their size during baking.",
      "Bake for 15-20 minutes, until golden-brown. Remove from the oven, allow to cool for a couple of minutes then turn them out onto a wire rack to cool."
    ],
    "sourceName": "bbc.co.uk",
    "sourceUrl": "https://www.bbc.co.uk/food/recipes/rock_cakes_03094",
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
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Contains added sugar (caster sugar), so it's best as an occasional treat."
    ]
  },
  {
    "id": "breakfast-quick-1",
    "title": "Oatmeal pancakes",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Venezuela breakfast dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/c400ok1764439058.jpg",
    "ingredients": [
      "1 medium Egg",
      "80 ml Milk",
      "1 tablespoon Sugar",
      "1 tsp Baking Powder",
      "Pinch Salt",
      "1 dash Vanilla Extract",
      "150g Ground Oats",
      "150g Butter",
      "1 tablespoon Sugar Syrup",
      "3 Strawberries"
    ],
    "instructions": [
      "Place all the ingredients in the glass and beat.",
      "Let the mixture stand for 10 minutes.",
      "Grease a hot frying pan with a little butter and pour a little of the mixture.",
      "When it starts to bubble on the surface, turn over with a spatula. Cook over medium-low heat so that they do not burn.",
      "Finally, add the caramel and strawberries."
    ],
    "sourceName": "goya.es",
    "sourceUrl": "https://goya.es/en/recipes/oatmeal-pancakes",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "ground oats"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "milk"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "egg"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "strawberries"
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
    "id": "breakfast-elaborate-1",
    "title": "Smoked Haddock Kedgeree",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "An India breakfast dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/1550441275.jpg",
    "ingredients": [
      "50g Butter",
      "1 chopped Onion",
      "3 Pods Cardamom",
      "1/4 tsp Turmeric",
      "1 small Cinnamon Stick",
      "Sprigs of fresh Bay Leaf",
      "450g Basmati Rice",
      "1 Litre Chicken Stock",
      "750g Smoked Haddock",
      "3 Eggs",
      "3 tblsp chopped Parsley",
      "1 chopped Lemon"
    ],
    "instructions": [
      "Melt 50g butter in a large saucepan (about 20cm across), add 1 finely chopped medium onion and cook gently over a medium heat for 5 minutes, until softened but not browned.",
      "Stir in 3 split cardamom pods, ¼ tsp turmeric, 1 small cinnamon stick and 2 bay leaves, then cook for 1 minute.",
      "Tip in 450g basmati rice and stir until it is all well coated in the spicy butter.",
      "Pour in 1 litre chicken or fish stock, add ½ teaspoon salt and bring to the boil, stir once to release any rice from the bottom of the pan. Cover with a close-fitting lid, reduce the heat to low and leave to cook very gently for 12 minutes.",
      "Meanwhile, bring some water to the boil in a large shallow pan. Add 750g un-dyed smoked haddock fillet and simmer for 4 minutes, until the fish is just cooked. Lift it out onto a plate and leave until cool enough to handle.",
      "Hard-boil 3 eggs for 8 minutes.",
      "Flake the fish, discarding any skin and bones. Drain the eggs, cool slightly, then peel and chop.",
      "Uncover the rice and remove the bay leaves, cinnamon stick and cardamom pods if you wish to. Gently fork in the fish and the chopped eggs, cover again and return to the heat for 2-3 minutes, or until the fish has heated through.",
      "Gently stir in almost all the 3 tbsp chopped fresh parsley, and season with a little salt and black pepper to taste. Serve scattered with the remaining parsley and garnished with 1 lemon, cut into wedges."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/2256/smoked-haddock-kedgeree",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "smoked haddock",
          "eggs"
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
      "Egg",
      "Fish"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "breakfast-elaborate-2",
    "title": "Dutch poffertjes (mini pancakes)",
    "category": "elaborate",
    "cookingTime": "About 55 minutes (estimated)",
    "description": "A Netherlands breakfast dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/oaqz9f1766593912.jpg",
    "ingredients": [
      "125g Flour",
      "125g Buckwheat Flour",
      "2 Eggs",
      "1 knob Butter",
      "300ml Milk",
      "10g Yeast",
      "1tsp vanilla sugar",
      "To serve Butter",
      "To serve Icing Sugar"
    ],
    "instructions": [
      "Mix the dry yeast with some of the luke warm milk en stir until dissolved.",
      "Place buckwheat and the flour together in a bowl and make a small circle in the middle. Add the yeast mixture into it. Add the milk and stir until you have a smooth batter.",
      "Add the eggs, salt and vanille sugar and stir through. Leave to stand and rise for about 45 minutes.",
      "Heat the poffertjespan and add a bit of butter into each hole. Fill halfway with batter and first bake one side until you can see the top dry out a little. Turn the poffertjes around with a small fork and bake the other side until cooked and golden brown.",
      "Serve the poffertjes with butter and icing sugar"
    ],
    "sourceName": "insimoneskitchen.com",
    "sourceUrl": "https://insimoneskitchen.com/old-dutch-poffertjes/#recipe",
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
      }
    ],
    "allergens": [
      "Milk",
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "spicy-quick-1",
    "title": "Hot cumin lamb wrap with crunchy slaw & spicy mayo",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
    "description": "A Turkish lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/jyylmo1763790808.jpg",
    "ingredients": [
      "4 small Lamb Leg",
      "2 tsp Olive Oil",
      "1 tsp Ground Cumin",
      "1 tablespoon Sugar",
      "3  tablespoons White Wine Vinegar",
      "2 Carrots",
      "2 sliced Spring Onions",
      "400g White Cabbage",
      "5 Sweet Peppadew Peppers",
      "3  tablespoons Mayonnaise",
      "4 large Pita Bread"
    ],
    "instructions": [
      "Heat a griddle pan. Rub the lamb steaks with the oil, cumin and some seasoning. Griddle for about 3-4 mins on each side or until cooked to your liking. Place to one side on a plate to rest.",
      "In a large bowl, stir the sugar into the vinegar until dissolved. Add the carrots, spring onions, cabbage and some seasoning, and toss together.",
      "Blitz the whole peppers and the mayo in a food processor. Add a heap of the salad to each flatbread. Slice the lamb, trimming off any excess fat and lay on top of the salad, drizzling with the resting juices. Spoon over the mayo and scatter with a few of the sliced peppers. Roll up and eat. If using pitta, split and stuff. Serve any extra salad on the side."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/hot-cumin-lamb-wrap-crunchy-slaw-spicy-mayo",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "lamb leg"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb leg"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "carrots",
          "white cabbage"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "white cabbage",
          "sweet peppadew peppers"
        ]
      }
    ],
    "allergens": [
      "Egg",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "spicy-elaborate-1",
    "title": "Grilled aubergines with spicy chickpeas & walnut sauce",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Turkish vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ctw3ba1763788978.jpg",
    "ingredients": [
      "4 tablespoons Olive Oil",
      "1 chopped Onion",
      "1 chopped Red Chilli",
      "2cm piece Ginger",
      "1/2 teaspoon Ground Cumin",
      "400g Chickpeas",
      "200g Tomato",
      "Juice of 1/2 Lemon",
      "2 Aubergine",
      "200g Greek Yogurt",
      "1 Garlic Clove",
      "25g Walnuts",
      "Handful Coriander"
    ],
    "instructions": [
      "Heat 2 tbsp oil in a pan, add the onion and fry until soft and lightly browned, about 10 mins. Add the chilli, ginger and spices and mix well. Stir in the chickpeas, tomatoes and 5 tbsp water, bring to the boil, then simmer for 10 mins. Add a little salt and pepper and the lemon juice.",
      "Arrange the aubergines over a grill pan. Brush lightly with oil, sprinkle with salt and pepper, then grill until golden. Flip them over, brush again with oil, season and grill again until tender and golden.",
      "Mix the yogurt with the garlic, most of the walnuts and coriander and a little salt and pepper. Arrange the aubergine slices over a warm platter and spoon over the chickpea mix. Drizzle with the walnut sauce and scatter with the remaining walnuts and coriander."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/grilled-aubergines-spicy-chickpeas-walnut-sauce",
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
        "name": "Omega-3",
        "from": [
          "walnuts"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "chickpeas",
          "aubergine"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato",
          "lemon"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Tree nuts"
    ],
    "cautions": []
  },
  {
    "id": "spicy-elaborate-2",
    "title": "Kidney Bean Curry",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
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
    "id": "spicy-elaborate-3",
    "title": "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    "category": "elaborate",
    "cookingTime": "About 45 minutes (estimated)",
    "description": "A Vietnamese beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    "ingredients": [
      "White Rice",
      "1 Onion",
      "1 Lime",
      "3 Garlic Clove",
      "1 Cucumber",
      "3 oz Carrots",
      "1 lb Ground Beef",
      "2 oz Soy Sauce"
    ],
    "instructions": [
      "Add'l ingredients: mayonnaise, siracha",
      "Place rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.",
      "Meanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.",
      "In a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.",
      "Heat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.",
      "Fluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo."
    ],
    "sourceName": "TheMealDB",
    "sourceUrl": "https://www.themealdb.com/meal/52997",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "ground beef"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "ground beef"
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
      "Wheat (gluten)",
      "Soy"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (soy sauce). Go easy on any extra salt."
    ]
  },
  {
    "id": "spicy-elaborate-4",
    "title": "Spicy North African Potato Salad",
    "category": "elaborate",
    "cookingTime": "About 30 minutes (estimated)",
    "description": "A Moroccan vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
    "ingredients": [
      "650g/1lb 8 oz Small Potatoes",
      "1 tsp Harissa Spice",
      "2 tsp olive oil",
      "juice of half Lemon",
      "4 Spring onions",
      "150g/6oz Rocket",
      "80g/3oz Feta",
      "20 chopped Mint",
      "2 tablespoons Pine nuts",
      "Pinch Salt",
      "Pinch Pepper"
    ],
    "instructions": [
      "Cook potatoes - place potatoes in a pot of cold water, and bring to the boil. Boil 20 minutes, or until potatoes are tender. You know they are cooked when you can stick a knife in them and the knife goes straight through.",
      "Combine harissa spice, olive oil, salt and pepper and lemon juice in a small bowl and whisk until combined.",
      "Once potatoes are cooked, drain water and roughly chop potatoes in half.",
      "Add harissa mix and spring onions/green onions to potatoes and stir.",
      "In a large salad bowl, lay out arugula/rocket.",
      "Top with potato mix and toss.",
      "Add fetta, mint and sprinkle over pine nuts.",
      "Adjust salt and pepper to taste."
    ],
    "sourceName": "TheMealDB",
    "sourceUrl": "https://www.themealdb.com/meal/52797",
    "nutrients": [
      {
        "name": "Calcium",
        "from": [
          "feta"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lemon",
          "pepper"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Tree nuts"
    ],
    "cautions": [
      "Use pasteurised feta (check the label).",
      "Can be salty (feta). Go easy on any extra salt."
    ]
  },
  {
    "id": "meat-quick-1",
    "title": "Moussaka",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
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
    "id": "meat-quick-2",
    "title": "Chicken Quinoa Greek Salad",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
    "description": "A Greek chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
    "ingredients": [
      "225g Quinoa",
      "25g Butter",
      "1 chopped Red Chilli",
      "1 clove finely chopped Garlic",
      "400g Chicken Breast",
      "2 tbs Olive Oil",
      "Handful Black Olives",
      "1 chopped Red Onions",
      "100g Feta",
      "Chopped Mint",
      "Juice of 1/2 Lemon"
    ],
    "instructions": [
      "Cook the quinoa following the pack instructions, then rinse in cold water and drain thoroughly.",
      "Meanwhile, mix the butter, chilli and garlic into a paste. Toss the chicken fillets in 2 tsp of the olive oil with some seasoning. Lay in a hot griddle pan and cook for 3-4 mins each side or until cooked through. Transfer to a plate, dot with the spicy butter and set aside to melt.",
      "Next, tip the tomatoes, olives, onion, feta and mint into a bowl. Toss in the cooked quinoa. Stir through the remaining olive oil, lemon juice and zest, and season well. Serve with the chicken fillets on top, drizzled with any buttery chicken juices."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/griddled-chicken-quinoa-greek-salad",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "quinoa"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "feta"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "quinoa",
          "chicken breast"
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
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Use pasteurised feta (check the label).",
      "Can be salty (black olives, feta). Go easy on any extra salt."
    ]
  },
  {
    "id": "meat-quick-3",
    "title": "Picadillo de Vainicas (Green Beans Picadillo)",
    "category": "quick",
    "cookingTime": "About 25 minutes (estimated)",
    "description": "A beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/2ncui81784396094.jpg",
    "ingredients": [
      "1 lb Green Beans",
      "2 cups Flank Steak",
      "1/2 cup Onion",
      "1/2 cup Pepper",
      "3 cloves Garlic",
      "1 tsp Thyme",
      "1 tsp Salt",
      "1/2 tsp Black Pepper",
      "1/2 cup Water"
    ],
    "instructions": [
      "In a medium-size pot over medium heat add some olive oil, onions, pepper, and garlic and cook until onion is translucent.",
      "In the meantime, finely chopped the green beans.",
      "Add to the pot, the shredded meat, green beans, thyme, salt and pepper, and mix well. Add the water, cover and cook for 15 minutes, uncover and cook for 5 more minutes or until the green beans are soft."
    ],
    "sourceName": "recipesfromcostarica.com",
    "sourceUrl": "https://www.recipesfromcostarica.com/recipes",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "flank steak"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "pepper"
        ]
      }
    ],
    "allergens": [],
    "cautions": []
  },
  {
    "id": "meat-quick-4",
    "title": "Thai chicken cakes with sweet chilli sauce",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Thai chicken dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/6s3i3p1763488540.jpg",
    "ingredients": [
      "2 large Chicken Breast",
      "1 clove Garlic",
      "1 small Ginger",
      "1 chopped Onion",
      "4 tbs Coriander",
      "1 chopped Green Chilli",
      "2 tblsp Olive Oil",
      "To serve sweet chilli sauce",
      "To serve Lime",
      "Chopped Spring Onions",
      "Chopped Red Chilli"
    ],
    "instructions": [
      "Toss the chicken, garlic, ginger, onion, coriander and chilli into a food processor and season well. Blitz until the chicken is finely ground and everything is well mixed. Use your hands to shape six small cakes.",
      "Heat the oil in a frying pan, then fry the cakes over a medium heat for about 6-8 mins, turning once. Serve hot, with sweet chilli sauce, lime wedges, coriander, shredded spring onion and red chilli."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/thai-chicken-cakes-sweet-chilli-sauce",
    "nutrients": [
      {
        "name": "Protein",
        "from": [
          "chicken breast"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "lime"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-elaborate-1",
    "title": "Chorba Hamra bel Frik (Algerian Lamb, Tomato, and Freekeh Soup)",
    "category": "elaborate",
    "cookingTime": "About 55 minutes (estimated)",
    "description": "An Algerian lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/p9tebp1764118792.jpg",
    "ingredients": [
      "1 cup Freekeh",
      "12 ounces Lamb",
      "1 finely chopped Onion",
      "1 tsp Black Pepper",
      "1 tsp Paprika",
      "1 tsp Ground Cinnamon",
      "To taste Salt",
      "3  tablespoons Vegetable Oil",
      "1  bunch Cilantro",
      "1  bunch Mint",
      "1 Celery",
      "14 oz jar Chickpeas",
      "4 cups Water",
      "1 Diced Zucchini",
      "1 Diced Carrots",
      "1 tablespoon Tomato Puree",
      "3 Medium Tomato",
      "1 Diced Potatoes"
    ],
    "instructions": [
      "Place freekeh in a small bowl and cover with cold water. Set aside.",
      "Combine lamb, onion, black pepper, paprika, cinnamon, and salt in a pot. Stir in oil, 1/2 the cilantro, 1/2 the mint, and celery stalk until combined. Simmer over low heat for 15 minutes. Stir in chickpeas; pour in just enough water to cover, and return to a simmer. Stir in zucchini, carrot, and tomato paste.",
      "Set a steamer over the pot; add tomatoes. Cover and steam tomatoes until soft, about 5 minutes. Crush tomatoes using a wooden spoon, so pulp drips into soup. Remove the steamer and discard leftover tomato peels.",
      "Add potato to soup and just enough water to cover. Simmer until potato is soft, about 10 minutes.",
      "Drain freekeh and add to soup. Simmer until soft, about 15 minutes. Remove celery stalk and discard. Sprinkle soup with remaining 1/2 cilantro and remaining 1/2 mint before serving."
    ],
    "sourceName": "allrecipes.com",
    "sourceUrl": "https://www.allrecipes.com/recipe/264552/chorba-hamra-bel-frik-algerian-lamb-tomato-and-freekeh-soup/",
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
          "freekeh",
          "lamb",
          "chickpeas"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb",
          "chickpeas"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "freekeh",
          "chickpeas",
          "zucchini",
          "carrots"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato puree",
          "tomato"
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
    "id": "meat-elaborate-2",
    "title": "Tunisian Lamb Soup",
    "category": "elaborate",
    "cookingTime": "About 50 minutes (estimated)",
    "description": "A Tunisian lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/t8mn9g1560460231.jpg",
    "ingredients": [
      "500g Lamb Mince",
      "2 cloves minced Garlic",
      "1 Onion",
      "300g Spinach",
      "3 tbs Tomato Puree",
      "1 tbs Cumin",
      "1 Litre Chicken Stock",
      "3 tsp Harissa Spice",
      "400g Chickpeas",
      "1/2 Lemon Juice",
      "150g Macaroni",
      "Pinch Salt",
      "Pinch Pepper"
    ],
    "instructions": [
      "Add the lamb to a casserole and cook over high heat. When browned, remove from the heat and set aside.",
      "Keep a tablespoon of fat in the casserole and discard the rest. Reduce to medium heat then add the garlic, onion and spinach and cook until the onion is translucent and the spinach wilted or about 5 minutes.",
      "Return the lamb to the casserole with the onion-spinach mixture, add the tomato puree, cumin, harissa, chicken, chickpeas, lemon juice, salt and pepper in the pan. Simmer over low heat for about 20 minutes.",
      "Add the pasta and cook for 15 minutes or until pasta is cooked."
    ],
    "sourceName": "allrecipes.co.uk",
    "sourceUrl": "http://allrecipes.co.uk/recipe/16694/tunisian-lamb-soup.aspx",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "spinach",
          "chickpeas"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "lamb mince",
          "spinach",
          "chickpeas"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb mince",
          "chickpeas"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "spinach",
          "chickpeas"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato puree",
          "lemon juice",
          "pepper"
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
    "id": "meat-elaborate-3",
    "title": "Cabbage with Ground Beef",
    "category": "elaborate",
    "cookingTime": "About 55 minutes (estimated)",
    "description": "A beef dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/brmxra1782681940.jpg",
    "ingredients": [
      "2 tablespoons Olive Oil",
      "1 lb Ground Beef",
      "1 small Onion",
      "2 medium Carrots",
      "1 medium Red Pepper",
      "1 tablespoon Tomato Puree",
      "2 cloves Garlic",
      "1/2 tbs Salt",
      "1/2 tbs Black Pepper",
      "1 tsp Smoked Paprika",
      "1/4 tsp Ground Cumin",
      "1/2 Cabbage",
      "1 tsp Apple Cider Vinegar",
      "1 cup Water",
      "2 tbs chopped Parsley"
    ],
    "instructions": [
      "Heat a large skillet or braiser over medium heat on the stovetop. Add the olive oil.",
      "A braiser with cooked ground beef",
      "Cook the Meat:",
      "Add the ground meat to the pan. Use a potato masher or wooden spoon to break it into small pieces. Cook for 3–4 minutes until browned.",
      "Add Vegetables and Seasoning:",
      "Stir in the onion, carrots, red pepper, garlic, and tomato paste. Season with salt, black pepper, smoked paprika, ground cumin, and Italian seasoning (if using). Cook for 2–3 minutes, stirring frequently.",
      "A braiser with cooked ground beef, carrots, onions, peppers, garlic and seasoning.",
      "Add Cabbage and Liquid:",
      "Add the chopped cabbage, apple cider vinegar or lemon juice (if using), and water. Stir well to combine. Reduce the heat to medium-low, cover, and cook for 30 minutes. Stir occasionally to prevent the cabbage from sticking to the bottom of the pan.",
      "A pot with cooked ground beef, vegetables and cabbage on a stove top",
      "Check for Doneness:",
      "Uncover and check the texture of the cabbage. If necessary, increase the heat to medium-high and cook for an additional 5–7 minutes to evaporate excess liquid and finish cooking.",
      "A braiser with cooked ground meat and cabbage dish on a stove top",
      "Garnish and Serve:",
      "Sprinkle with chopped parsley or fresh herbs before serving."
    ],
    "sourceName": "cookinglsl.com",
    "sourceUrl": "https://cookinglsl.com/ground-beef-cabbage-recipe/#wprm-recipe-container-59951",
    "nutrients": [
      {
        "name": "Iron",
        "from": [
          "ground beef"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "ground beef"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "carrots",
          "cabbage",
          "apple cider vinegar"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "tomato puree",
          "cabbage"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks."
    ]
  },
  {
    "id": "meat-elaborate-4",
    "title": "Mastawa Lamb and Rice",
    "category": "elaborate",
    "cookingTime": "About 40 minutes (estimated)",
    "description": "A lamb dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/4kzx4d1779554755.jpg",
    "ingredients": [
      "700g Lamb",
      "3 Medium Onion",
      "1 tsp Turmeric",
      "1 large Orange",
      "150g Rice",
      "500g Natural Yoghurt",
      "4 Cloves Crushed Garlic Clove",
      "1 tblsp Vegetable Oil",
      "1 tablespoon Dried Dill",
      "1 tablespoon Black Pepper",
      "1 Can Chickpeas",
      "To taste Salt"
    ],
    "instructions": [
      "Place the meat cut into pieces, in a large pan with the onions. Add the turmeric and enough water to cover. Bring to the boil then cook gently until the meat is very tender and can easily be removed from the bones.",
      "While the meat is cooking, cut the orange peel into thin match style pieces, removing as much pith as possible. Leave to soak in a bowl of water.",
      "When the meat is tender, remove from the pan and when cool enough, remove the meat from the bones and shred the meat into strips with your hands. Return the meat to the pan.",
      "Wash the short grain rice and then add to the pan with salt according to taste. The juices should cover the rice by about 2cm, add more water if necessary. Bring back to the boil, then reduce the heat to medium and cook with the lid off, stirring from time to time until the rice is \"al dente\" and the liquid is absorbed.",
      "Add the natural yoghurt, and stir in well but carefully. Fry the crushed cloves of garlic in the oil and add to the dish along with the dill, black pepper, the chickpeas and extra salt to taste.",
      "Mix in well, then cover the top of the pan with a clean thick cloth and the lid. Leave on a low heat for about half an hour to allow the flavours to absorb.",
      "Enjoy with some warm nan bread for extra comfort."
    ],
    "sourceName": "afghanaid.org.uk",
    "sourceUrl": "https://www.afghanaid.org.uk/mastawa-recipe",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "orange",
          "chickpeas"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "lamb",
          "chickpeas"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "natural yoghurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lamb",
          "chickpeas"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "orange"
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
    "id": "general-quick-1",
    "title": "Chorizo & chickpea soup",
    "category": "quick",
    "cookingTime": "About 15 minutes (estimated)",
    "description": "A Spanish pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/kggfo91763288633.jpg",
    "ingredients": [
      "400g Tinned Tomatos",
      "110g Chorizo",
      "140g Savoy Cabbage",
      "Sprinkling Chilli Flakes",
      "400g can Chickpeas",
      "1 Chicken Stock",
      "To serve Crusty Bread"
    ],
    "instructions": [
      "Put a medium pan on the heat and tip in the tomatoes, followed by a can of water. While the tomatoes are heating, quickly chop the chorizo into chunky pieces (removing any skin) and shred the cabbage.",
      "Pile the chorizo and cabbage into the pan with the chilli flakes and chickpeas, then crumble in the stock cube. Stir well, cover and leave to bubble over a high heat for 6 mins or until the cabbage is just tender. Ladle into bowls and eat with crusty or garlic bread."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/chorizo-chickpea-soup",
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
        "name": "Protein",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "savoy cabbage",
          "chickpeas"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "savoy cabbage"
        ]
      }
    ],
    "allergens": [
      "Wheat (gluten)"
    ],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (chorizo). Go easy on any extra salt."
    ]
  },
  {
    "id": "general-quick-2",
    "title": "Gallo pinto",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/ytogg31784397116.jpg",
    "ingredients": [
      "2/3 Cup Black Beans",
      "1 1/4 cup Rice",
      "2 tablespoons Onion",
      "2 tablespoons Pepper",
      "2 tablespoons Cilantro",
      "1/2 tsp Salsa Lizano",
      "1/2 tsp Salt",
      "1/2 tsp Cumin",
      "1/4 tsp Pepper"
    ],
    "instructions": [
      "Heat up a pan over medium high heat, add olive oil and let it get hot. Add onions, peppers, cilantro, garlic, cumin, salt and pepper, cook for 3 to 5 min until onion is translucent.",
      "Mix in the beans, stir and reduce heat to medium, add the Lizano sauce, stir and cook for 5 more minutes.",
      "Add the rice, stir and cooked for a few more minutes, to incorporate all the flavors in the rice. The time to cook it I will depend of how you like your gallo pinto, some people like it a little wet and some other like it a little toasted or dry.",
      "I prefer it not too dry, so I cook it for about 5 to 7 min."
    ],
    "sourceName": "recipesfromcostarica.com",
    "sourceUrl": "https://www.recipesfromcostarica.com/recipes",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "black beans"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "black beans"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "black beans"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "pepper"
        ]
      }
    ],
    "allergens": [],
    "cautions": []
  },
  {
    "id": "general-quick-3",
    "title": "Chickpea, chorizo & spinach stew",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "A Spanish pork dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/xvnx8j1763287209.jpg",
    "ingredients": [
      "4 tablespoons Extra Virgin Olive Oil",
      "1 chopped Onion",
      "1 Diced Carrots",
      "1 Diced Celery",
      "3 Thyme",
      "2 Bay Leaves",
      "2 cloves chopped Garlic",
      "200g Chorizo",
      "1/4 tsp Cinnamon",
      "1 teaspoon Paprika",
      "800g Chickpeas",
      "2 tblsp Sherry vinegar",
      "400g Spinach"
    ],
    "instructions": [
      "Heat the oil in a large pan, then gently fry the onion for 3-4 mins until it begins to soften. Stir in the carrot, celery, thyme and bay leaves. Season, then cook for 2-3 mins, stirring occasionally. Add the garlic, chorizo, cinnamon and smoked paprika. Gently fry until the vegetables soften and the chorizo starts to release its oils and crisp up.",
      "Stir in the chickpeas, vinegar and 150ml water, then bring to a simmer for 1-2 mins until the chickpeas have heated up. Add the spinach, then stir through the chickpeas until it wilts a little. Remove from the heat, season to taste, then serve warm with crusty bread."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/chickpea-chorizo-spinach-stew",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "chickpeas",
          "spinach"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "chickpeas",
          "spinach"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "chickpeas"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "carrots",
          "chickpeas",
          "spinach"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Cook meat, poultry, fish, shellfish and eggs until steaming hot all the way through, with no pink meat and firm egg yolks.",
      "Can be salty (chorizo). Go easy on any extra salt."
    ]
  },
  {
    "id": "general-quick-4",
    "title": "Matar Paneer",
    "category": "quick",
    "cookingTime": "About 20 minutes (estimated)",
    "description": "An India vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
    "ingredients": [
      "1 tbls Sunflower Oil",
      "225g Paneer",
      "2 Ginger",
      "1 tsp Cumin",
      "1 tsp Turmeric",
      "1 tsp Coriander",
      "1 Green Chilli",
      "4 large Tomato",
      "150g Peas",
      "1 tsp Garam Masala",
      "Small bunch Coriander",
      "to serve Naan Bread"
    ],
    "instructions": [
      "Heat the oil in a frying pan over high heat until it’s shimmering hot. Add the paneer, then turn the heat down a little. Fry until it starts to brown at the edges, then turn it over and brown on each side – the paneer will brown faster than you think, so don’t walk away. Remove the paneer from the pan and drain on kitchen paper.",
      "Put the ginger, cumin, turmeric, ground coriander and chilli in the pan, and fry everything for 1 min. Add the tomatoes, mashing them with the back of a spoon and simmer everything for 5 mins until the sauce smells fragrant. Add a splash of water if it’s too thick. Season well. Add the peas and simmer for a further 2 mins, then stir in the paneer and sprinkle over the garam masala. Divide between two bowls, top with coriander leaves and serve with naan bread, roti or rice."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/matar-paneer",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "peas"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "paneer"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "paneer"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato"
        ]
      }
    ],
    "allergens": [
      "Milk",
      "Wheat (gluten)"
    ],
    "cautions": [
      "Use pasteurised paneer (check the label)."
    ]
  },
  {
    "id": "general-elaborate-1",
    "title": "Ribollita",
    "category": "elaborate",
    "cookingTime": "About 55 minutes (estimated)",
    "description": "An Italian vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg",
    "ingredients": [
      "5 tablespoons Olive Oil",
      "1 chopped Onion",
      "1 chopped Carrots",
      "1 stalk chopped Celery",
      "1 tablespoon minced Garlic",
      "2 cups Cannellini Beans",
      "1 Canned tomatoes",
      "4 cups Water",
      "1 fresh sprig Rosemary",
      "1 fresh sprig Thyme",
      "1 pound chopped Kale",
      "4 thick slices Wholegrain Bread",
      "1 thinly sliced Red Onions",
      "½ cup freshly grated Parmesan"
    ],
    "instructions": [
      "Put 2 tablespoons of the oil in a large pot over medium heat. When it’s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes.",
      "Heat the oven to 500 degrees. Drain the beans; if they’re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes.",
      "Fish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan.",
      "Put the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve."
    ],
    "sourceName": "cooking.nytimes.com",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1016052-ribollita",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "cannellini beans",
          "kale"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "cannellini beans",
          "kale"
        ]
      },
      {
        "name": "Calcium",
        "from": [
          "kale",
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
          "carrots",
          "cannellini beans",
          "kale",
          "wholegrain bread"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "canned tomatoes",
          "kale"
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
    "id": "general-elaborate-2",
    "title": "Corba",
    "category": "elaborate",
    "cookingTime": "About 35 minutes (estimated)",
    "description": "A Turkish side dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    "ingredients": [
      "1 cup Lentils",
      "1 large Onion",
      "1 large Carrots",
      "1 tbs Tomato Puree",
      "2 tsp Cumin",
      "1 tsp Paprika",
      "1/2 tsp Mint",
      "1/2 tsp Thyme",
      "1/4 tsp Black Pepper",
      "1/4 tsp Red Pepper Flakes",
      "4 cups Vegetable Stock",
      "1 cup Water",
      "Pinch Sea Salt"
    ],
    "instructions": [
      "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later",
      "In a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.",
      "Add the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.",
      "Immediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.",
      "After it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.",
      "After the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.",
      "Serve with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week."
    ],
    "sourceName": "findingtimeforcooking.com",
    "sourceUrl": "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "lentils"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "lentils"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lentils"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "lentils",
          "carrots"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "tomato puree"
        ]
      }
    ],
    "allergens": [],
    "cautions": []
  },
  {
    "id": "general-elaborate-3",
    "title": "Vegetarian Casserole",
    "category": "elaborate",
    "cookingTime": "About 50 minutes (estimated)",
    "description": "A British vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg",
    "ingredients": [
      "1 Rapeseed Oil",
      "1 Onion",
      "3 cloves Garlic",
      "1 tsp Paprika",
      "½ tsp Cumin",
      "1 tblsp Thyme",
      "3 Medium Carrots",
      "2 small stalks Celery",
      "1 Red Pepper",
      "1 Yellow Pepper",
      "2 x 400g tins Tomato",
      "250ml Vegetable Stock Cube",
      "2 sliced Courgettes",
      "2 sprigs Thyme",
      "250g Lentils"
    ],
    "instructions": [
      "Heat the oil in a large, heavy-based pan. Add the onions and cook gently for 5 – 10 mins until softened.",
      "Add the garlic, spices, dried thyme, carrots, celery and peppers and cook for 5 minutes.",
      "Add the tomatoes, stock, courgettes and fresh thyme and cook for 20 - 25 minutes.",
      "Take out the thyme sprigs. Stir in the lentils and bring back to a simmer. Serve with wild and white basmati rice, mash or quinoa."
    ],
    "sourceName": "bbcgoodfood.com",
    "sourceUrl": "https://www.bbcgoodfood.com/recipes/1993645/vegetarian-casserole",
    "nutrients": [
      {
        "name": "Folate",
        "from": [
          "lentils"
        ]
      },
      {
        "name": "Iron",
        "from": [
          "lentils"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "lentils"
        ]
      },
      {
        "name": "Fibre",
        "from": [
          "carrots",
          "courgettes",
          "lentils"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "red pepper",
          "yellow pepper",
          "tomato"
        ]
      }
    ],
    "allergens": [],
    "cautions": [
      "Can be salty (vegetable stock cube). Go easy on any extra salt."
    ]
  },
  {
    "id": "general-elaborate-4",
    "title": "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
    "category": "elaborate",
    "cookingTime": "About 35 minutes (estimated)",
    "description": "An United States vegetarian dish from TheMealDB recipe collection.",
    "image": "https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg",
    "ingredients": [
      "4 tablespoons Olive Oil",
      "6 small Egg Plants",
      "½ tablespoon Harissa Spice",
      "1 can Chickpeas",
      "2 cups halved Cherry Tomatoes",
      "1 1/2 cups Greek yogurt",
      "1 tablespoon Ground cumin",
      "½ cup Parsley"
    ],
    "instructions": [
      "Heat the oil in a 12-inch skillet over high heat until shimmering. Add the eggplants and lower the heat to medium. Season with salt and pepper as you rotate the eggplants, browning them on all sides. Continue to cook, turning regularly, until a fork inserted into the eggplant meets no resistance (you may have to stand them up on their fat end to finish cooking the thickest parts), about 20 minutes, lowering the heat and sprinkling water into the pan as necessary if the eggplants threaten to burn or smoke excessively.",
      "Mix the harissa, chickpeas and tomatoes together, then add to the eggplants. Cook until the tomatoes have blistered and broken down, about 5 minutes more. Season with salt and pepper and add water as necessary to thin to a saucy consistency. Meanwhile, combine the yogurt and cumin in a serving bowl. Season with salt and pepper.",
      "Top the eggplant mixture with the parsley, drizzle with more extra virgin olive oil, and serve with the yogurt on the side."
    ],
    "sourceName": "seriouseats.com",
    "sourceUrl": "http://www.seriouseats.com/2014/09/one-pot-wonders-stovetop-eggplant-harissa-chickpeas-cumin.html",
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
          "greek yogurt"
        ]
      },
      {
        "name": "Protein",
        "from": [
          "egg plants",
          "chickpeas",
          "greek yogurt"
        ]
      },
      {
        "name": "Vitamin C",
        "from": [
          "cherry tomatoes"
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
