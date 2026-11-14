// "How it helps" page (Member 2).
// Explains, with concrete examples, what CraveBetter does for pregnant users
// and where its limits are.
// Props: onStart() — called by the button that leads back to the craving input.

// Each row is a real example: typing the craving returns recipes of the kind
// described. Keep these in step with what the recommendation service returns.
export const SWAP_EXAMPLES = [
  {
    craving: "Sushi",
    concern: "Raw fish",
    instead: "Fish and seafood dishes that are cooked through, such as baked salmon with fennel and tomatoes.",
  },
  {
    craving: "Cookie dough",
    concern: "Raw egg",
    instead: "Treats that are baked or cooked through, such as baked apple and cinnamon donuts.",
  },
  {
    craving: "A deli sandwich",
    concern: "Cold cured meats",
    instead: "Sandwiches served hot, such as a toasted cheese sandwich or a meatball sub.",
  },
  {
    craving: "A burger",
    concern: "Meat that is still pink in the middle",
    instead: "Burgers that are cooked all the way through.",
  },
  {
    craving: "Coffee",
    concern: "Caffeine",
    instead: "Caffeine-free drinks, such as warm cinnamon and vanilla milk.",
  },
  {
    craving: "A glass of wine",
    concern: "Alcohol",
    instead: "Alcohol-free drinks, such as a sparkling citrus fizz.",
  },
];

const LEFT_OUT = [
  "Alcohol",
  "Liver and pâté",
  "Raw or cold-smoked fish",
  "High-mercury fish",
  "Raw or runny egg",
  "Rare meat",
  "Mould-ripened and blue cheese",
  "Uncooked cured meat",
  "Game",
  "Coffee, tea and other caffeinated drinks",
];

const NUTRIENTS = ["Folate", "Iron", "Calcium", "Protein", "Omega-3", "Fibre", "Vitamin C"];

function Section({ title, children }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-4 text-ink">{children}</div>
    </section>
  );
}

function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-berry-700 underline underline-offset-2 hover:text-berry-600"
    >
      {children}
    </a>
  );
}

export default function About({ onStart }) {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header>
        <h1 className="text-3xl text-ink sm:text-4xl">How CraveBetter helps during pregnancy</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Cravings are a normal part of pregnancy for many people. The trouble is that some of the
          foods people crave are the same ones pregnancy food-safety guidance says to avoid or
          limit. CraveBetter suggests something you can make instead that goes after the same
          craving.
        </p>
      </header>

      <Section title="It swaps the risky part, not the craving">
        <p>
          You type what you feel like eating. CraveBetter works out what kind of food that is and
          shows recipes of the same kind that leave out the part that is a concern in pregnancy.
        </p>

        <div>
          <div className="hidden gap-6 pb-2 text-sm font-semibold text-ink-soft md:grid md:grid-cols-[9rem_1fr_1.6fr]">
            <span>If you crave</span>
            <span>The concern in pregnancy</span>
            <span>CraveBetter suggests</span>
          </div>
          <ul>
            {SWAP_EXAMPLES.map((example) => (
              <li
                key={example.craving}
                className="grid gap-1 border-t border-line py-3 md:grid-cols-[9rem_1fr_1.6fr] md:gap-6"
              >
                <span className="font-semibold text-ink">{example.craving}</span>
                <span className="text-ink-soft">
                  <span className="md:hidden">Concern: </span>
                  {example.concern}
                </span>
                <span>
                  <span className="text-ink-soft md:hidden">Instead: </span>
                  {example.instead}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Recipes are filtered before you see them">
        <p>
          The published recipes are BBC Good Food recipes, taken from TheMealDB, a public recipe
          collection. A recipe was left out of CraveBetter if it uses any of these:
        </p>
        <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
          {LEFT_OUT.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-ink-soft">
                –
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p>
          The list follows published guidance for pregnancy, such as the NHS page{" "}
          <SourceLink href="https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/">
            Foods to avoid in pregnancy
          </SourceLink>
          .
        </p>
        <p>
          Published recipes were also left out if the food is fried, or if one serving is high in
          saturated fat (over 6 g), sugars (over 27 g), salt (over 1.5 g) or calories (over 700
          kcal).
        </p>
        <p>
          The published recipes do not cover every craving. For the rest, such as burgers, ice
          cream, pizza and chocolate, our team wrote recipes to the same food-safety rules: meat,
          fish and eggs cooked through, pasteurised dairy, no alcohol and no coffee. These have no
          link to a source, and their nutrition figures are estimates worked out by AI from the
          ingredient list, marked as estimates wherever they appear.
        </p>
      </Section>

      <Section title="Each recipe shows what it gives you">
        <p>On a recipe's page you will find:</p>
        <ul className="space-y-3">
          <li>
            <span className="font-semibold">Nutrition per serving.</span> Calories, fat, saturates,
            carbs, sugars, fibre, protein and salt. For published recipes these are the figures
            BBC Good Food publishes; for team-written recipes they are estimates.
          </li>
          <li>
            <span className="font-semibold">Good for pregnancy.</span> Which of these nutrients the
            recipe provides, and which ingredients they come from: {NUTRIENTS.join(", ")}. The
            choice of nutrients follows the NHS page{" "}
            <SourceLink href="https://www.nhs.uk/pregnancy/keeping-well/have-a-healthy-diet/">
              Have a healthy diet in pregnancy
            </SourceLink>
            . They are read from the ingredient list, not measured in a lab.
          </li>
          <li>
            <span className="font-semibold">Keep in mind.</span> The common allergens in the
            ingredients, and notes such as cooking fish through or the NHS limit of two portions of
            oily fish a week.
          </li>
          <li>
            <span className="font-semibold">The source.</span> For published recipes, a link to
            where the recipe was originally published.
          </li>
        </ul>
        <p>
          When you type a common craving, the results page also puts one serving of each recipe
          next to a typical portion of the food you craved, using figures from USDA
          FoodData Central, so you can see the difference in calories, saturated fat, sugars, salt,
          fibre and protein.
        </p>
      </Section>

      <Section title="Three options, depending on your time">
        <ul className="space-y-3">
          <li>
            <span className="font-semibold">Quick &amp; Healthy.</span> A recipe that takes 30
            minutes or less.
          </li>
          <li>
            <span className="font-semibold">Worth the Wait.</span> A more involved recipe for when
            you have 30 to 90 minutes.
          </li>
          <li>
            <span className="font-semibold">Nearby Food.</span> A map search for places close to
            you, for when cooking is not going to happen.
          </li>
        </ul>
        <p>
          If none of them appeal, ask for three new ideas. You can save any recipe; saved recipes
          stay in this browser on this device, even after you close the site.
        </p>
      </Section>

      <Section title="What CraveBetter does not do">
        <ul className="space-y-3">
          <li>
            It does not give medical or nutrition advice, and no doctor or dietitian has reviewed
            the recipes.
          </li>
          <li>
            It does not know your allergies, any condition you have, or what your care team has
            told you. Check ingredients yourself and follow their advice first.
          </li>
          <li>
            It follows UK guidance. Advice differs between countries, so check what applies where
            you live.
          </li>
          <li>
            If the optional AI recipe writer is switched on, its recipes are marked as written by
            AI and unreviewed, and their nutrition figures are estimates.
          </li>
        </ul>
      </Section>

      <div className="border-t border-line pt-8">
        <button type="button" onClick={onStart} className="btn-primary">
          Enter a craving
        </button>
      </div>
    </article>
  );
}
