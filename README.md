# CraveBetter

A mobile-first web app that helps pregnant women find healthier alternatives to their food cravings. Enter a craving and get three options: a quick healthy recipe, a more elaborate recipe, and a nearby food option.

Built for HackDecouverte 2026 with React, Vite and Tailwind CSS.

## Run it

You need [Node.js](https://nodejs.org/) 20 or newer.

```
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## Recipes

The published recipes in `src/data/recipes.js` are real BBC Good Food recipes, taken from [TheMealDB](https://www.themealdb.com) with their own photos, ingredients and steps, and a link to the original page. Cooking time and nutrition per serving are the figures published on that page. Recipes are left out if a serving is high in saturated fat, sugars or salt, if the food is fried, or if they carry pregnancy food-safety risks; see the top of that file.

The published recipes do not cover every craving (burgers, ice cream, pizza, chocolate, sandwiches, drinks and others), so `src/data/extraRecipes.js` adds team-written recipes for those. Their nutrition figures and pregnancy notes are AI estimates from the ingredient list, labelled as estimates in the app; `cd server && npm run estimate-extras` fills them in for any recipe added to that file.

The results page compares each published recipe with a typical portion of the craved food, using USDA FoodData Central figures (`src/data/cravingNutrition.js`). Craving photos come from Wikipedia.

## Optional: AI-written recipes

Without any setup, the app uses the built-in recipes. To have Claude write recipes for any craving:

1. Create a file called `.env.local` in the project root with these two lines:

   ```
   ANTHROPIC_API_KEY=your-key-here
   VITE_RECOMMENDATION_API_URL=http://localhost:8787/api/recommendations
   ```

2. In a second terminal, start the recipe server:

   ```
   cd server
   npm install
   npm start
   ```

`.env.local` is ignored by git, so the key is never pushed. The server uses Claude Haiku 5.5 (about $0.001 per request) and prints a running cost estimate. If the server is not running, the app goes back to the built-in recipes. AI-written recipes are marked as unreviewed in the app, and their nutrition figures are estimates.

## Working on it

- Read [TEAM.md](TEAM.md) to see which files are yours.
- Read [CLAUDE.md](CLAUDE.md) for the project rules, data structures and component interfaces. AI assistants started in this folder read it automatically.
- Work on your own branch and only edit your own files. Member 1 merges into `main`.

## Project structure

```
src/
  App.jsx                  app shell and screen switching
  main.jsx                 entry point
  components/
    Header.jsx
    BottomNavigation.jsx
    RecipeCard.jsx
    NearbyFood.jsx
  pages/
    Home.jsx
    Results.jsx
    RecipeDetails.jsx
    SavedRecipes.jsx
    About.jsx              the How it helps page
  services/
    recommendationService.js
    locationService.js
  data/
    recipes.js
  styles/
    global.css
```

## Disclaimer

CraveBetter offers food suggestions only. It is not medical advice. Check with your healthcare provider about what is right for you.
