// Nearby food card (Member 4).
// Props: craving (string).
// Gets its data from getNearbyFood(craving) in services/locationService.js.
//
// Simple version: it links to a map search for the craving near the user.
// It does not show a specific restaurant yet. Member 4 can replace this file
// with location-based results; the props stay the same.

import { useEffect, useState } from "react";
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
    <div className="flex h-full flex-col rounded-xl border border-line bg-surface p-4">
      <span className="chip self-start">Nearby Food</span>
      <p className="mt-2 font-display text-lg leading-snug font-semibold text-ink">
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
