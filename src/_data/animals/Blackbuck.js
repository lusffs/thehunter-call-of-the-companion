export default {
  _id: "blackbuck",
  class: 3,
  name: "Blackbuck",
  maxLevel: 5,
  callers: ["Antler Rattler"],
  scents: [],
  reserves: [
    {
      name: "Parque Fernando",
      needZones: [
        "06:00-09:00;Feeding",
        "09:00-12:00;Drinking",
        "12:00-14:00;Resting",
        "14:00-17:00;Feeding",
        "17:00-19:00;Drinking",
        "19:00-06:00;Resting",
      ],
    },
  ],
  furTypes: [
    "Dark;Common",
    "Brown;Common",
    "Black;Common",
    "Luecistic;Uncommon",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 19.8,
    gold: 24.7,
    diamond: 28.2,
    maxScore: 30,
  },
  maxWeight: {
    kg: 51,
    lbs: 112,
  },
};
