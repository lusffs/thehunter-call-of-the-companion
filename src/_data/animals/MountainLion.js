export default {
  _id: "mountain_lion",
  class: 5,
  name: "Mountain Lion",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-06:00;Feeding",
        "06:00-08:00;Drinking",
        "08:00-17:00;Resting",
        "17:00-18:30;Drinking",
        "18:30-00:00;Feeding",
      ],
    },
  ],
  furTypes: [
    "Dark Red;Common",
    "Grey;Uncommon",
    "Albino;Rare",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 32,
    gold: 36,
    diamond: 39,
    maxScore: 40,
  },
  maxWeight: {
    kg: 105,
    lbs: 231,
  },
};
