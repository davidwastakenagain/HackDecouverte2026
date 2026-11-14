# Cravely — Team

Four people are building Cravely in five hours. This file says who owns what. The full project rules are in [CLAUDE.md](CLAUDE.md).

## Who does what

| Member | Name | Branch | Responsibility |
| --- | --- | --- | --- |
| Member 1 | _add name_ | `main` (integration) | Team lead: project setup, app shell, navigation, global styles, shared components, merging and final testing |
| Member 2 | David | `member-2-recommendations` | Craving input, three recommendations, recommendation cards, refresh |
| Member 3 | Stephen | `stephen` | Recipe details, saving and removing recipes, saved recipes page |
| Member 4 | Jeremy | `Jeremy` | Location permission, nearby food options, Google Maps fallback |

## File ownership

Only edit the files in your own row. If you need a change in someone else's file, ask them or Member 1.

### Member 1 — team lead / integration

- `src/App.jsx`
- `src/main.jsx`
- `src/components/Header.jsx`
- `src/components/BottomNavigation.jsx`
- `src/components/FoodBuddy.jsx` (the food drawings; anyone may use them)
- `src/styles/global.css`
- `src/data/recipes.js` (Member 2 may add recipe entries)
- `index.html`, `package.json`, `vite.config.js`
- `CLAUDE.md`, `TEAM.md`, `README.md`

### Member 2 — craving and recommendations

- `src/pages/Home.jsx`
- `src/pages/Results.jsx`
- `src/pages/About.jsx` (the How it helps page)
- `src/services/recommendationService.js`
- `src/data/extraRecipes.js` (recipes for cravings `recipes.js` does not cover)
- `server/` (optional local AI recipe server)

### Member 3 — recipes and saved recipes

- `src/pages/RecipeDetails.jsx`
- `src/pages/SavedRecipes.jsx`
- `src/components/RecipeCard.jsx`

### Member 4 — location and nearby food

- `src/components/NearbyFood.jsx`
- `src/services/locationService.js`

## How the pieces connect

- `App.jsx` (Member 1) decides which screen is showing and passes props to each page.
- `Home` (Member 2) collects the craving and hands it to `App.jsx`.
- `Results` (Member 2) shows two recipes using `RecipeCard` (Member 3) and the nearby option using `NearbyFood` (Member 4).
- Tapping a recipe hands the whole recipe object to `App.jsx`, which opens `RecipeDetails` (Member 3).
- `RecipeDetails` saves recipes to LocalStorage; `SavedRecipes` (Member 3) lists them.

The exact props and function signatures are in section 6 of [CLAUDE.md](CLAUDE.md). Do not change them without telling Member 1.

## Workflow

1. Pull `main` and create your branch: `git checkout -b <your-branch>`.
2. Start your AI assistant in the project root so it reads `CLAUDE.md`.
3. Work only in your files. Commit often.
4. Before handing off, pull `main` into your branch and check the app still runs.
5. Push your branch and tell Member 1. Only Member 1 merges into `main`.

## When you finish

Tell Member 1:

- Which files you created or changed.
- Anything unfinished.
- Anything you needed from another member's file.
