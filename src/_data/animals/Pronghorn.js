export default {
  _id: "004",
  class: 4,
  name: "Pronghorn",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-08:00;Feeding",
        "08:00-10:00;Drinking",
        "10:00-19:00;Feeding",
        "19:00-21:00;Drinking",
        "21:00-00:00;Resting",
      ],
    },
  ],
  furTypes: ["Dark;Common", "Piebald;Rare", "Albino;Rare"],
  trophyScore: {
    silver: 46,
    gold: 75.7,
    diamond: 98,
    maxScore: 105,
  },
  maxWeight: {
    kg: 65,
    lbs: 143,
  },
};
