export default {
  _id: "beceite_ibex",
  class: 4,
  name: "Beceite Ibex",
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
    silver: 78,
    gold: 142.9,
    diamond: 191.6,
    maxScore: 201,
  },
  maxWeight: {
    kg: 110,
    lbs: 242,
  },
};
