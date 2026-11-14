// PLACEHOLDER — Member 4 replaces this file.
// getNearbyFood(craving) returns a Promise that resolves to a restaurant
// object (structure in CLAUDE.md, section 5).

export function getNearbyFood(craving) {
  return Promise.resolve({
    id: "restaurant-001",
    name: "Restaurant Name",
    address: "Restaurant address",
    menuItem: "Grilled chicken sandwich",
    distance: "1.2 km",
    mapsUrl:
      "https://www.google.com/maps/search/" +
      encodeURIComponent("healthy " + craving + " near me"),
  });
}
