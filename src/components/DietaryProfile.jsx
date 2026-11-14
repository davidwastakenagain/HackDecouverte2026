// Dietary profile form (Member 2). Used by Home.
// Lets the user tick food restrictions and medicines, and type other foods to
// avoid. Every change is saved straight away in this browser
// (userDataService.js), and the recommendations follow it.
// Props:
//   profile   the current profile, from getProfile()
//   onChange  (profile) => void — called with the new profile after it is saved

import { useState } from "react";
import { saveProfile } from "../services/userDataService.js";
import {
  MEDICATIONS,
  RESTRICTIONS,
  medicationLabels,
  restrictionLabels,
} from "../services/dietaryService.js";
import { isAiEnabled } from "../services/recommendationService.js";

const ALLERGIES = RESTRICTIONS.filter((rule) => rule.group === "allergy");
const DIETS = RESTRICTIONS.filter((rule) => rule.group === "diet");

function Checkbox({ checked, onChange, label, hint }) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 py-1 text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 shrink-0 accent-berry-600"
      />
      <span>
        {label}
        {hint && <span className="text-ink-soft"> ({hint})</span>}
      </span>
    </label>
  );
}

export default function DietaryProfile({ profile, onChange }) {
  const [open, setOpen] = useState(false);

  function update(changes) {
    const next = { ...profile, ...changes };
    saveProfile(next);
    onChange(next);
  }

  // Adds or removes an id in profile.restrictions or profile.medications.
  function toggle(field, id) {
    const list = profile[field];
    update({ [field]: list.includes(id) ? list.filter((item) => item !== id) : [...list, id] });
  }

  const foods = restrictionLabels(profile);
  const medicines = [
    ...medicationLabels(profile),
    ...(profile.otherMedications.trim() ? [profile.otherMedications.trim()] : []),
  ];

  return (
    <section className="card mt-6 max-w-xl" aria-labelledby="dietary-profile-title">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 id="dietary-profile-title" className="text-xl text-ink">
            Your food needs
          </h2>
          <p className="mt-1 text-[0.95rem] text-ink-soft [overflow-wrap:anywhere]">
            {foods.length === 0 && medicines.length === 0
              ? "Tell us what you can't eat and which medicines you take, and we'll leave out recipes that don't fit."
              : [
                  foods.length > 0 && `Leaving out: ${foods.join(", ")}.`,
                  medicines.length > 0 && `Medicines: ${medicines.join(", ")}.`,
                ]
                  .filter(Boolean)
                  .join(" ")}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="dietary-profile-form"
          className="btn-secondary shrink-0"
        >
          {open ? "Done" : foods.length + medicines.length > 0 ? "Edit" : "Set up"}
        </button>
      </div>

      {open && (
        <div id="dietary-profile-form" className="mt-5 space-y-6">
          <fieldset>
            <legend className="font-semibold text-ink">Allergies and intolerances</legend>
            <div className="mt-1 grid grid-cols-2 gap-x-4">
              {ALLERGIES.map((rule) => (
                <Checkbox
                  key={rule.id}
                  label={rule.label}
                  checked={profile.restrictions.includes(rule.id)}
                  onChange={() => toggle("restrictions", rule.id)}
                />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold text-ink">Diet</legend>
            <div className="mt-1 grid grid-cols-2 gap-x-4">
              {DIETS.map((rule) => (
                <Checkbox
                  key={rule.id}
                  label={rule.label}
                  checked={profile.restrictions.includes(rule.id)}
                  onChange={() => toggle("restrictions", rule.id)}
                />
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="avoid-foods" className="font-semibold text-ink">
              Other foods to leave out
            </label>
            <input
              id="avoid-foods"
              type="text"
              value={profile.avoidFoods}
              onChange={(event) => update({ avoidFoods: event.target.value })}
              placeholder="e.g. mushrooms, coriander"
              maxLength={200}
              autoComplete="off"
              className="field mt-2 text-base"
            />
            <p className="mt-1 text-sm text-ink-soft">
              Separate foods with commas. Recipes with these words in the title or ingredients are
              left out.
            </p>
          </div>

          <fieldset>
            <legend className="font-semibold text-ink">Medicines you take</legend>
            <div className="mt-1">
              {MEDICATIONS.map((medicine) => (
                <Checkbox
                  key={medicine.id}
                  label={medicine.label}
                  hint={medicine.examples}
                  checked={profile.medications.includes(medicine.id)}
                  onChange={() => toggle("medications", medicine.id)}
                />
              ))}
            </div>
            <label htmlFor="other-medications" className="mt-3 block text-ink">
              Other medicines
            </label>
            <input
              id="other-medications"
              type="text"
              value={profile.otherMedications}
              onChange={(event) => update({ otherMedications: event.target.value })}
              placeholder="e.g. labetalol"
              maxLength={200}
              autoComplete="off"
              className="field mt-2 text-base"
            />
            <p className="mt-2 rounded-lg bg-berry-50 p-3 text-sm text-ink">
              We only know the NHS food advice for the four medicines listed above. Other medicines
              are saved as a reminder but are not checked, and this is not a full interaction check.
              Ask your pharmacist or doctor which foods to avoid with your medicines.
            </p>
          </fieldset>

          <p className="text-sm text-ink-soft">
            Saved automatically in this browser on this device, with no account.
            {isAiEnabled() &&
              " When AI recipes are on, your food restrictions (not your medicines) are sent with the craving so the recipes can leave those foods out."}{" "}
            Recipes are matched on their ingredient lists, so always check the labels of packaged
            ingredients yourself.
          </p>
        </div>
      )}
    </section>
  );
}
