export default {
  _id: "roe_deer",
  class: 3,
  name: "Roe Deer",
  maxLevel: 3,
  callers: ["Roe Deer Caller"],
  scents: ["Roe Deer Scent"],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "05:00-09:00;Feeding",
        "09:00-13:00;Resting",
        "13:00-17:00;Drinking",
        "17:00-21:00;Feeding",
        "21:00-05:00;Resting",
      ],
    },
    {
      name: "Hirschfelden",
      needZones: [
        "05:00-09:00;Feeding",
        "09:00-13:00;Resting",
        "13:00-17:00;Drinking",
        "17:00-21:00;Feeding",
        "21:00-05:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 40.5,
    gold: 68.4,
    diamond: 89.3,
    maxScore: 95,
  },
  maxWeight: {
    kg: 35,
    lbs: 77,
  },
};
