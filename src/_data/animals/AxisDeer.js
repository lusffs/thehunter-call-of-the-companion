export default {
  _id: "axis_deer",
  class: 3,
  name: "Axis Deer",
  maxLevel: 5,
  callers: ['Axis Deer "Screamer" Caller'],
  scents: [],
  reserves: [
    {
      name: "Parque Fernando",
      needZones: [
        "00:00-04:00;Resting",
        "04:00-08:00;Drinking",
        "08:00-12:00;Feeding",
        "12:00-18:00;Resting",
        "18:00-21:00;Drinking",
        "21:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: [
    "Orange;Common",
    "Dark;Common",
    "Piebald;Uncommon",
    "Melanistic;Uncommon",
    "Albino;Rare",
  ],
  trophyScore: {
    silver: 138.8,
    gold: 264.4,
    diamond: 358.6,
    maxScore: 390,
  },
  maxWeight: {
    kg: 75,
    lbs: 165,
  },
};
