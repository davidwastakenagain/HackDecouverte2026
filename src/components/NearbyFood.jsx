// Nearby food card (Member 4).
// Props: craving (string).
// Gets its data from getNearbyFood(craving) in services/locationService.js.
//
// Simple version: it links to a map search for the craving near the user.
// It does not show a specific restaurant yet. Member 4 can replace this file
// with location-based results; the props stay the same.

import { useEffect, useState } from "react";
import FoodBuddy from "./FoodBuddy.jsx";
import { getNearbyFood } from "../services/locationService.js";

export default function NearbyFood({ craving }) {
  const [mapsUrl, setMapsUrl] = useState("");

  useEffect(() => {
    let current = true;
    getNearbyFood(craving)
      .then((place) => current && setMapsUrl(place?.mapsUrl ?? ""))
      .catch(() => current && setMapsUrl(""));
    return () => {
      current = false;
    };
  }, [craving]);

  return (
    <div className="flex h-full flex-col rounded-3xl border-2 border-line bg-lilac/60 p-4 shadow-[0_5px_0_0_var(--color-berry-100)]">
      <div className="flex items-start justify-between gap-2">
        <span className="chip bg-surface">Nearby Food</span>
        <FoodBuddy name="boba" className="-mt-1 h-16 w-16 animate-wiggle" />
      </div>
      <p className="mt-1 font-display text-xl leading-snug font-bold text-ink">
        Find a place close to you
      </p>
      <p className="mt-1 text-[0.95rem] text-ink-soft">
        Search the map for healthier options near you. Menus vary, so ask how a dish is cooked
        before you order.
      </p>
      {mapsUrl && (
        // On wider screens the button sits at the bottom of the card.
        <div className="mt-4 md:mt-auto md:pt-4">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Open map search
          </a>
        </div>
      )}
    </div>
  );
}
