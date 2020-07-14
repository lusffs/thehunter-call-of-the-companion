export default {
  _id: "mountain_goat",
  class: 4,
  name: "Mountain Goat",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-03:00;Feeding",
        "03:00-05:00;Resting",
        "05:00-09:00;Feeding",
        "09:00-11:00;Drinking",
        "11:00-13:00;Feeding",
        "13:00-16:00;Resting",
        "16:00-21:00;Feeding",
        "21:00-22:00;Drinking",
        "22:00-00:00;Resting",
      ],
    },
  ],
  furTypes: [
    "White;Common",
    "Beige;Common",
    "Light Brown;Common",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 52.7,
    gold: 84.1,
    diamond: 107.6,
    maxScore: 115,
  },
  maxWeight: {
    kg: 145,
    lbs: 320,
  },
};
