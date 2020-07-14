export default {
  _id: "turkey",
  class: 1,
  name: "Turkey",
  maxLevel: 3,
  callers: ["Wild Turkey Crow Caller", "Wild Turkey Mouth Caller"],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-15:00;Feeding",
        "15:00-16:00;Drinking",
        "16:00-21:00;Feeding",
        "21:00-00:00;Resting",
      ],
    },
  ],
  furTypes: [
    "Grey;Common",
    "Light Brown;Rare",
    "Luecistic;Rare",
    "Albino;Rare",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 3.3,
    gold: 4,
    diamond: 4.6,
    maxScore: 5,
  },
  maxWeight: {
    kg: 11,
    lbs: 24,
  },
};
