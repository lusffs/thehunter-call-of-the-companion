export default {
  _id: "gemsbok",
  class: 8,
  name: "Gemsbok",
  maxLevel: 5,
  callers: ["Antler Rattler"],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-04:00;Resting",
        "04:00-08:00;Drinking",
        "08:00-14:00;Feeding",
        "14:00-18:00;Resting",
        "18:00-21:00;Drinking",
        "21:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: ["Dark;Common", "Beige;Common", "Gold;Rare"],
  trophyScore: {
    silver: 194.8,
    gold: 276.3,
    diamond: 337.5,
    maxScore: 358,
  },
  maxWeight: {
    kg: 240,
    lbs: 529,
  },
};
