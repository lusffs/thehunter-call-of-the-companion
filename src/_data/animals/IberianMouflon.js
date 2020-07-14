export default {
  _id: "iberian_mouflon",
  class: 4,
  name: "Iberian Mouflon",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "02:00-06:00;Resting",
        "06:00-09:00;Drinking",
        "09:00-15:00;Resting",
        "15:00-19:00;Feeding",
        "19:00-22:00;Drinking",
        "22:00-02:00;Feeding",
      ],
    },
  ],
  furTypes: ["Grey;Bugged?", "Melanistic;Bugged?", "Albino;Rare"],
  trophyScore: {
    silver: 97,
    gold: 144.1,
    diamond: 179.5,
    maxScore: 186,
  },
  maxWeight: {
    kg: 60,
    lbs: 132,
  },
};
