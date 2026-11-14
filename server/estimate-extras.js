// One-off tool (Member 2): estimates nutrition and pregnancy notes for the
// team-written recipes in src/data/extraRecipes.js and writes them into that
// file. Recipes that already have figures are skipped, so it is safe to rerun.
//
//   cd server && npm run estimate-extras
//
// It asks Claude for one recipe at a time and uses the same form and checks
// as the recipe server (nutrition.js). Each request costs a little on the key
// in ../.env.local. The results are estimates and are labelled so in the app.

import fs from "node:fs";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { NutritionForm, NUTRITION_INSTRUCTIONS, tidyNutritionForm } from "./nutrition.js";

const FILE = fileURLToPath(new URL("../src/data/extraRecipes.js", import.meta.url));
const MODEL = "claude-opus-5-5";

const client = new Anthropic();
const Form = z.object(NutritionForm);

const INSTRUCTIONS = `You are given one recipe as JSON. Estimate its nutrition and fill in the form.

${NUTRITION_INSTRUCTIONS}`;

async function estimate(recipe) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const response = await client.messages.parse({
      model: MODEL,
      max_tokens: 16000,
      system: INSTRUCTIONS,
      output_config: { effort: "medium", format: zodOutputFormat(Form) },
      messages: [
        {
          role: "user",
          content: JSON.stringify({
            title: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
          }),
        },
      ],
    });
    if (response.stop_reason !== "refusal" && response.parsed_output) {
      const tidy = tidyNutritionForm(response.parsed_output);
      if (tidy.nutrition) return tidy;
    }
    console.log(`  figures for "${recipe.title}" did not add up, trying again (${attempt})`);
  }
  return null;
}

const q = (value) => JSON.stringify(value);
const list = (items) => "[\n" + items.map((item) => `      ${q(item)},\n`).join("") + "    ]";

function write(header, recipes) {
  let out = header + "export const extraRecipes = [\n";
  for (const r of recipes) {
    out += `  {
    id: ${q(r.id)},
    title: ${q(r.title)},
    category: ${q(r.category)},
    cookingTime: ${q(r.cookingTime)},
    description: ${q(r.description)},
    image: "",
    ingredients: ${list(r.ingredients)},
    instructions: ${list(r.instructions)},
`;
    if (r.nutrition) {
      out += `    servings: ${q(r.servings)},
    nutritionEstimated: true,
    nutrition: ${q(r.nutrition)},
    nutrients: ${q(r.nutrients)},
    allergens: ${q(r.allergens)},
    cautions: ${list(r.cautions)},
`;
    }
    out += "  },\n";
  }
  fs.writeFileSync(FILE, out + "];\n");
}

const source = fs.readFileSync(FILE, "utf8");
const header = source.slice(0, source.indexOf("export const extraRecipes"));
const { extraRecipes } = await import(`${FILE}?t=${Date.now()}`);

const recipes = extraRecipes.map((recipe) => ({ ...recipe }));
const todo = recipes.filter((recipe) => !recipe.nutrition);
console.log(`${todo.length} of ${recipes.length} recipes need figures`);

let done = 0;
const worker = async () => {
  while (todo.length > 0) {
    const recipe = todo.shift();
    try {
      const result = await estimate(recipe);
      if (result) Object.assign(recipe, result);
      else console.log(`  no usable figures for "${recipe.title}"`);
    } catch (error) {
      console.log(`  failed for "${recipe.title}": ${error.message}`);
    }
    done++;
    if (done % 10 === 0) console.log(`${done} done`);
  }
};
await Promise.all([worker(), worker(), worker(), worker()]);

write(header, recipes);
console.log(`Wrote ${recipes.filter((recipe) => recipe.nutrition).length} recipes with estimated figures to ${FILE}`);
