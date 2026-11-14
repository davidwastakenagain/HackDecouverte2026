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
- Optional: a small local Node server in `server/` that asks Claude to write recipes. The app works without it. The API key lives in `.env.local`, which is never committed.

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
| **Member 2** — craving and recommendations | Craving input, generating three recommendations, recommendation cards, refresh | `src/pages/Home.jsx`, `src/pages/Results.jsx`, `src/services/recommendationService.js`, `server/` (optional local AI recipe server, approved by the team lead) |
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
| `Home` | `onSubmitCraving(craving)` — call with the craving text to go to the results screen |
| `Results` | `craving` (string), `onSelectRecipe(recipe)` — call with a full recipe object to open its details, `onBack()` |
| `RecipeDetails` | `recipe` (full recipe object), `onBack()` |
| `SavedRecipes` | `onSelectRecipe(recipe)` — call with a full recipe object to open its details |

### Shared components

| Component | Props it receives | Used by |
| --- | --- | --- |
| `RecipeCard` | `recipe` (recipe object), `onSelect(recipe)` | `Results`, `SavedRecipes` |
| `NearbyFood` | `craving` (string) | `Results`, as the third recommendation |
| `Header` | `title`, `onBack` (optional), `brand` (optional) | `App.jsx` only |
| `BottomNavigation` | `current`, `onNavigate(screen)` | `App.jsx` only |

### Services

| Function | Returns |
| --- | --- |
| `getRecommendations(craving)` in `recommendationService.js` | `{ quick: recipe, elaborate: recipe }` — calling it again for the same craving returns different options (refresh) |
| `getFreshRecommendations(craving, avoidTitles)` in `recommendationService.js` | a Promise of `{ quick, elaborate, source }`, where `source` is `"ai"` or `"built-in"`. Uses the local AI server when it is set up, otherwise the built-in recipes |
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

Clean, warm, welcoming and mobile-first: a soft blush-pink background, white cards with large rounded corners, near-black pill buttons and a floating dark navigation bar. It must not look like a complicated medical application.

All colors, the font and the shared building blocks live in `src/styles/global.css`. Do not hardcode hex colors or add your own palette.

### Colors (Tailwind classes)

| Use | Class |
| --- | --- |
| Page background (already set by the app shell) | `bg-blush-50` |
| Cards and panels | `bg-surface` |
| Soft tinted fill | `bg-blush-100` |
| Soft borders | `border-blush-200` |
| Pink accent | `bg-blush-500`, `text-blush-700` |
| Main text, primary buttons | `text-ink`, `bg-ink` |
| Secondary text | `text-ink-soft` |
| Pale blue highlight | `bg-sky-soft` |

The older names `cream`, `cream-dark`, `sage-100`, `sage-300`, `sage-500` and `sage-700` still work and now show the new colors, so existing code does not need to change. Use the names in the table for new code.

### Building blocks (class names)

| Class | What it gives you |
| --- | --- |
| `card` | White rounded panel with a soft shadow |
| `btn-primary` | Black pill button with white text |
| `btn-secondary` | White pill button with a soft border |
| `chip` | Small rounded label, for example a category or cooking time |
| `field` | Text input with a rounded border and pink focus ring |

Use these instead of restyling cards, buttons and inputs on each page, so every screen matches. Do not add a page title or a back button inside a page; the app shell's header already shows both.

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
