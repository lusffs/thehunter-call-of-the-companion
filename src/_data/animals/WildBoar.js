export default {
  _id: "wild_boar",
  class: 4,
  name: "Wild Boar",
  maxLevel: 5,
  callers: ["Wild Boar Caller"],
  scents: [],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "03:00-07:00;Feeding",
        "07:00-19:00;Resting",
        "19:00-23:00;Feeding",
        "23:00-03:00;Drinking",
      ],
    },
    {
      name: "Medved Taiga",
      needZones: [
        "03:00-07:00;Feeding",
        "07:00-19:00;Resting",
        "19:00-23:00;Feeding",
        "23:00-03:00;Drinking",
      ],
    },
    {
      name: "Hirschfelden",
      needZones: [
        "03:00-07:00;Feeding",
        "07:00-19:00;Resting",
        "19:00-23:00;Feeding",
        "23:00-03:00;Drinking",
      ],
    },
  ],
  furTypes: ["Black Gold;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 37.5,
    gold: 98.5,
    diamond: 144.2,
    maxScore: 160,
  },
  maxWeight: {
    kg: 240,
    lbs: 529,
  },
};
