export default {
  _id: "european_hare",
  class: 1,
  name: "European Hare",
  maxLevel: 3,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "01:00-05:00;Resting",
        "05:00-11:00;Feeding",
        "11:00-14:00;Drinking",
        "14:00-16:00;Resting",
        "16:00-22:00;Feeding",
        "22:00-01:00;Feeding",
      ],
    },
  ],
  furTypes: ["Melanistic;Rare", "Albino;Rare"],
  trophyScore: {
    silver: 3,
    gold: 5,
    diamond: 6.5,
    maxScore: 7,
  },
  maxWeight: {
    kg: 7,
    lbs: 15.4,
  },
};
