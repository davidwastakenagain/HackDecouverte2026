# CLAUDE.md — CraveBetter Project Instructions

Every AI coding assistant working in this repository must follow these rules. Team roles, branches and file ownership are also listed in [TEAM.md](TEAM.md).

## 1. Project Overview

CraveBetter is a mobile-first web application that helps pregnant women find healthier alternatives to their food cravings.

The user enters a craving and the app shows three alternatives:

1. **QUICK & HEALTHY** — a simple, healthy recipe that takes about 10–15 minutes.
2. **WORTH THE WAIT** — a more elaborate recipe that takes about 30–45 minutes.
3. **NEARBY FOOD** — a suitable option from a nearby restaurant or fast-food location.

Users can enter a craving, see three recommendations, refresh them, open a recipe, save it, view and remove saved recipes, and use their location to find nearby food.

The target user journey is:

**Enter a craving → See three recommendations → Refresh → Open a recipe → Save it → Find it in Saved Recipes.**

This is a FIVE-HOUR MVP. Keep everything simple. Do not add features unless explicitly requested.

## 2. Technology Stack

- React
- Vite
- JavaScript (no TypeScript)
- Tailwind CSS
- LocalStorage for saved recipes
- Browser Geolocation API for location
- Google Maps search links as the location fallback
- Real recipe data: BBC Good Food recipes via TheMealDB (recipes, photos, published nutrition), USDA FoodData Central (nutrition of typical craving foods) and Wikipedia (craving photos). All free, no keys.
- Optional: a small local Node server in `server/` that asks Claude to write recipes for any craving. The app works without it, using the built-in recipes. The API key lives in `.env.local`, which is never committed.

Do not introduce additional frameworks or libraries without approval from the team lead (Member 1).

## 3. Critical Team Rules

Four developers are working at the same time, each with their own AI assistant.

### Rule 1: Never modify another member's files

Only work in the files assigned to your member (section 4). If another file needs to change, tell your developer so they can ask the owner or the team lead.

### Rule 2: Do not rebuild the application

The application shell is shared. Do not:

- Create a second React application.
- Replace the project structure.
- Rebuild `App.jsx`.
- Create your own navigation or routing.
- Replace global styles.
- Create duplicates of components that already exist.

Always inspect the existing project before making changes.

### Rule 3: Do not make unauthorized changes

Do not:

- Add or change dependencies, or edit `package.json`, without team lead approval.
- Rename existing files.
- Change the shared data structures (section 5).
- Change component props or service function signatures (section 6).
- Delete existing code because you think it is unnecessary.

### Rule 4: Keep code simple

Prioritize working functionality, simple components, readable JavaScript, minimal dependencies and easy integration. Avoid abstractions and overengineering.

### Rule 5: Do not invent features

Only implement what is assigned to you. No authentication, dashboards, payments, social features or anything else unrequested.

## 4. File Ownership

| Member | Area | Files |
| --- | --- | --- |
| **Member 1** — team lead / integration | App shell, navigation, global styles, shared components, project config, integration, final testing | `src/App.jsx`, `src/main.jsx`, `src/components/Header.jsx`, `src/components/BottomNavigation.jsx`, `src/styles/global.css`, `src/data/recipes.js`, `index.html`, `package.json`, `vite.config.js`, `CLAUDE.md`, `TEAM.md`, `README.md` |
| **Member 2** — craving and recommendations | Craving input, generating three recommendations, recommendation cards, refresh | `src/pages/Home.jsx`, `src/pages/Results.jsx`, `src/services/recommendationService.js`, `src/pages/About.jsx` (the How it helps page), `src/data/extraRecipes.js` (recipes for cravings `recipes.js` does not cover), `server/` (optional local AI recipe server, approved by the team lead) |
| **Member 3** — recipes and saved recipes | Recipe details, ingredients, instructions, saving and removing recipes, saved recipes page, LocalStorage | `src/pages/RecipeDetails.jsx`, `src/pages/SavedRecipes.jsx`, `src/components/RecipeCard.jsx` |
| **Member 4** — location and nearby food | Location permission, geolocation, nearby food options, Google Maps fallback | `src/components/NearbyFood.jsx`, `src/services/locationService.js` |

Member 1 has authority over all shared files. Members 2, 3 and 4 do not modify `App.jsx`, navigation or global styles.

`src/data/recipes.js` is owned by Member 1, but Member 2 may add recipe entries to it as long as they follow the recipe structure in section 5.

The placeholder files in `src/pages/`, `src/components/` and `src/services/` exist only so the app runs. Their owner replaces the contents; the file name, default export and props stay the same.

## 5. Shared Data Structures

### Recipe

```js
{
  id: "recipe-001",
  title: "Healthy Cheeseburger",
  category: "quick",
  cookingTime: "15 minutes",
  description: "A healthier burger alternative",
  image: "",
  ingredients: ["Whole wheat bun", "Lean ground turkey"],
  instructions: ["Prepare ingredients", "Cook the turkey", "Assemble the burger"]
}
```

`category` is one of `quick`, `elaborate` or `nearby`.

Recipes in `src/data/recipes.js` also have these fields (all generated from the real recipe, see the top of that file):

- `sourceName`, `sourceUrl`: where the original recipe is published.
- `servings`: for example `"Serves 4"`.
- `nutrition`: per serving, as published by the source: `{ kcal, fat, saturates, carbs, sugars, fibre, protein, salt }` (grams, except kcal).
- `nutritionEstimated`: `true` when `nutrition` is an AI estimate from the ingredient list and not a published figure (the recipes in `src/data/extraRecipes.js` and AI-written recipes). The app labels these as estimates.
- `nutrients`: `[{ name: "Iron", from: ["lentils", "spinach"] }]`, the pregnancy nutrients the ingredients provide.
- `allergens`: `["Milk", "Wheat (gluten)"]`.
- `cautions`: short pregnancy notes, such as cooking through, oily fish limits or pasteurised cheese.

### Nearby restaurant

```js
{
  id: "restaurant-001",
  name: "Restaurant Name",
  address: "Restaurant address",
  menuItem: "Grilled chicken sandwich",
  distance: "1.2 km",
  mapsUrl: "https://maps.google.com/"
}
```

Do not rename these properties or change the category values.

## 6. Component and Service Interfaces

There is no router library. `App.jsx` keeps track of the current screen, the current craving and the selected recipe, and passes them to the pages as props. Pages change screens only by calling the callback props below.

### Pages (rendered by `App.jsx`)

| Component | Props it receives |
| --- | --- |
| `Home` | `onSubmitCraving(craving)` — call with the craving text to go to the results screen, `onOpenAbout()` — opens the How it helps page |
| `Results` | `craving` (string), `onSelectRecipe(recipe)` — call with a full recipe object to open its details, `onBack()` |
| `RecipeDetails` | `recipe` (full recipe object), `onBack()` |
| `SavedRecipes` | `onSelectRecipe(recipe)` — call with a full recipe object to open its details |
| `About` | `onStart()` — goes to the home screen. The "How it helps" page: what the site does for pregnant users and its limits |

### Shared components

| Component | Props it receives | Used by |
| --- | --- | --- |
| `RecipeCard` | `recipe` (recipe object), `onSelect(recipe)` | `Results`, `SavedRecipes` |
| `NearbyFood` | `craving` (string) | `Results`, as the third recommendation |
| `Header` | `items` (`[{ screen, label }]`), `current` (screen name), `onNavigate(screen)`. Site name plus the navigation links on wider screens | `App.jsx` only |
| `BottomNavigation` | `items`, `current`, `onNavigate(screen)`. Tab bar shown on phones only | `App.jsx` only |

### Services

| Function | Returns |
| --- | --- |
| `getRecommendations(craving)` in `recommendationService.js` | `{ quick: recipe, elaborate: recipe }` — calling it again for the same craving returns different options (refresh) |
| `getFreshRecommendations(craving, avoidTitles)` in `recommendationService.js` | a Promise of `{ quick, elaborate, source }`, where `source` is `"ai"` or `"built-in"`. Uses the local AI server when it is set up, otherwise the built-in recipes. AI recipes have no `image` or `sourceUrl`; their `nutrition`, `nutrients`, `allergens` and `cautions` are estimates from the server, flagged with `nutritionEstimated: true` |
| `getCravingNutrition(craving, { keywordsOnly })` in `recommendationService.js` | typical nutrition of the craved food per usual portion (`{ label, portion, kcal, saturates, sugars, salt, ... , image }`, from `src/data/cravingNutrition.js`), or `null` if the craving is not recognised. With `keywordsOnly: true` it only matches a food named in the craving, not its wider craving group |
| `getNearbyFood(craving)` in `locationService.js` | a Promise that resolves to a restaurant object |

### Saved recipes

Saved recipes are stored in LocalStorage under the key `cravebetter.savedRecipes` as a JSON array of full recipe objects. Member 3 owns all reading and writing of this key.

### Rules for components

- Every page and component file has one default export named after the file.
- Components receive data through props. Do not hardcode data that another component or service provides.
- Pass the whole recipe object between components, not just the id.
- Before creating a component, check whether it already exists and what props it expects.
- Style with Tailwind classes and the shared colors defined in `src/styles/global.css`. Do not add separate CSS files.

## 7. Pregnancy Food Safety

This application is for pregnant users. It is a food suggestion tool, not a medical professional.

- Do not make unsupported medical claims.
- Do not label foods as universally pregnancy-safe.
- Avoid unsafe raw or undercooked ingredients.
- Identify relevant allergens and dietary restrictions when possible.
- Do not assume restaurant food is safe without verified information.
- Keep the medical disclaimer visible in the app.

## 8. Design Direction

Plain and readable, not decorative: white cards on a warm off-white page, dark text, one berry accent, thin borders instead of shadows, and modest corner rounding. Headings use the serif Source Serif 4; everything else uses Source Sans 3. No emoji as icons. It must not look like a complicated medical application.

All colors, the fonts and the shared building blocks live in `src/styles/global.css`. Do not hardcode hex colors or add your own palette.

### Layout on different screens

The site fills the browser width and adapts to the device:

- The app shell centers each page in a column that grows up to 72rem (`max-w-6xl`), with side padding that increases on wider screens.
- Phones show one column and a tab bar fixed to the bottom. From tablet width (`md`, 768px) the tab bar is replaced by links in the header.
- Build pages mobile-first, then add columns with Tailwind's `md:` and `lg:` prefixes, for example `grid gap-4 md:grid-cols-3`. Do not set a fixed pixel width on a page.

### Colors (Tailwind classes)

| Use | Class |
| --- | --- |
| Page background (already set by the app shell) | `bg-page` |
| Cards and panels | `bg-surface` |
| Borders and dividers | `border-line` |
| Main text | `text-ink` |
| Secondary text | `text-ink-soft` |
| Accent: primary buttons, active states | `bg-berry-600` |
| Accent text and links | `text-berry-700` |
| Soft tinted fill | `bg-berry-50` |

The older names (`blush-*`, `sky-soft`, `cream`, `cream-dark`, `sage-*`) still work and show the current colors, so existing code does not need to change. Use the names in the table for new code.

### Building blocks (class names)

| Class | What it gives you |
| --- | --- |
| `card` | White panel with a thin border |
| `btn-primary` | Berry button with white text |
| `btn-secondary` | White button with a border |
| `chip` | Small label, for example a category |
| `field` | Text input with a border and a berry focus ring |
| `font-display` | The serif heading font, for card titles that are not `h1` or `h2` |

Use these instead of restyling cards, buttons and inputs on each page, so every screen matches.

Each page starts with its own `h1`. Do not add a back button inside a page; the app shell shows a Back link above the page on the results and recipe screens.

## 9. Before Finishing Your Task

1. Test your component on its own.
2. Check the browser console for errors.
3. Confirm imports work.
4. Confirm you followed the shared data structures and interfaces.
5. Confirm you did not modify another member's files.
6. List every file you created or modified.
7. Explain how Member 1 should integrate your work.
8. Mention anything unfinished.

## 10. Git Workflow

- Each member works on their own branch (see [TEAM.md](TEAM.md)). Do not commit directly to `main`.
- Pull `main` before starting and before opening a pull request.
- Only Member 1 merges into `main`.

## 11. Final Priority

A working MVP within five hours. Do not overcomplicate the project, do not interfere with other developers, and do not rebuild existing functionality.
