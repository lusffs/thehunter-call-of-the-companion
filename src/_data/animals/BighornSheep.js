export default {
  _id: "bighorn_sheep",
  class: 4,
  name: "Bighorn Sheep",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-04:00;Resting",
        "04:00-06:00;Feeding",
        "06:00-08:00;Drinking",
        "08:00-21:00;Feeding",
        "21:00-00:00;Resting",
      ],
    },
  ],
  furTypes: [
    "Black;Common",
    "Brown;Common",
    "Dark Brown;Common",
    "Albino;Rare",
  ],
  trophyScore: {
    silver: 90.3,
    gold: 132.7,
    diamond: 164.6,
    maxScore: 180,
  },
  maxWeight: {
    kg: 160,
    lbs: 353,
  },
};
