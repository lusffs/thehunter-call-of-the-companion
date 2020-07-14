export default {
  _id: "ronda_ibex",
  class: 4,
  name: "Ronda Ibex",
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
    silver: 69.2,
    gold: 91.4,
    diamond: 107.9,
    maxScore: 110,
  },
  maxWeight: {
    kg: 70,
    lbs: 154,
  },
};
