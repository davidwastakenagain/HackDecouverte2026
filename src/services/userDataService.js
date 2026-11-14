// Local user data (Member 2).
// Everything here is kept in this browser's LocalStorage. Nothing is sent to a
// server by this file, and there are no accounts.
//
// Two keys:
//   cravebetter.profile        the dietary profile (see getProfile)
//   cravebetter.searchHistory  past craving searches, newest first
//
// Saved recipes are separate: Member 3 owns "cravebetter.savedRecipes".

const PROFILE_KEY = "cravebetter.profile";
const HISTORY_KEY = "cravebetter.searchHistory";
const MAX_HISTORY = 12;

function read(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null; // storage unavailable (private mode) or damaged data
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable or full; the app keeps working without it.
  }
}

const textList = (value) =>
  Array.isArray(value) ? [...new Set(value.filter((item) => typeof item === "string"))] : [];
const text = (value, max) => (typeof value === "string" ? value.slice(0, max) : "");

// Makes sure a profile has every field in the right type, whatever was stored.
function tidyProfile(raw) {
  return {
    restrictions: textList(raw?.restrictions), // ids from RESTRICTIONS in dietaryService.js
    medications: textList(raw?.medications), // ids from MEDICATIONS in dietaryService.js
    avoidFoods: text(raw?.avoidFoods, 200), // "mushrooms, coriander"
    otherMedications: text(raw?.otherMedications, 200), // kept as a reminder only, not checked
  };
}

/**
 * The saved dietary profile:
 * { restrictions: [id], medications: [id], avoidFoods: string, otherMedications: string }.
 * Always returns every field; they are empty when nothing has been saved.
 */
export function getProfile() {
  return tidyProfile(read(PROFILE_KEY));
}

export function saveProfile(profile) {
  write(PROFILE_KEY, tidyProfile(profile));
}

// True when the profile has nothing in it.
export function isProfileEmpty(profile) {
  return (
    profile.restrictions.length === 0 &&
    profile.medications.length === 0 &&
    !profile.avoidFoods.trim() &&
    !profile.otherMedications.trim()
  );
}

/** Past searches, newest first: [{ craving: "Ice cream", at: 1731600000000 }]. */
export function getSearchHistory() {
  const saved = read(HISTORY_KEY);
  if (!Array.isArray(saved)) return [];
  return saved
    .filter((item) => typeof item?.craving === "string" && item.craving.trim())
    .map((item) => ({ craving: item.craving.slice(0, 60), at: Number(item.at) || 0 }))
    .slice(0, MAX_HISTORY);
}

/** Remembers a search. Searching the same craving again moves it to the top. */
export function addSearch(craving) {
  const name = String(craving ?? "").trim().slice(0, 60);
  if (!name) return;
  const others = getSearchHistory().filter((item) => item.craving.toLowerCase() !== name.toLowerCase());
  write(HISTORY_KEY, [{ craving: name, at: Date.now() }, ...others].slice(0, MAX_HISTORY));
}

export function clearSearchHistory() {
  write(HISTORY_KEY, []);
}

/** Removes the profile and the search history. Saved recipes are not touched. */
export function clearUserData() {
  try {
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(HISTORY_KEY);
  } catch {
    // Nothing to clear if storage is unavailable.
  }
}
