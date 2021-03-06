export default {
  _id: "spanish_ibex",
  class: 4,
  name: "Spanish Ibex",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "00:00-04:00;Feeding",
        "04:00-08:00;Resting",
        "08:00-11:00;Drinking",
        "11:00-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Melanistic;Rare", "Albino;Rare"],
  trophyScore: {
    silver: 49.7,
    gold: 72.5,
    diamond: 89.6,
    maxScore: 0,
  },
  maxWeight: {
    kg: 87.5,
    lbs: 192,
  },
};
