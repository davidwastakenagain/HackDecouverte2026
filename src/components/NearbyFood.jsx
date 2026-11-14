// PLACEHOLDER — Member 4 replaces this file.
// Props: craving (string).
// Gets its data from getNearbyFood(craving) in services/locationService.js.

export default function NearbyFood({ craving }) {
  return (
    <div className="rounded-2xl border border-dashed border-sage-300 bg-white p-4">
      <span className="block font-semibold text-ink">Nearby food</span>
      <span className="block text-sm text-ink-soft">
        NearbyFood placeholder · Member 4 builds the nearby option for "
        {craving}" here.
      </span>
    </div>
  );
}
