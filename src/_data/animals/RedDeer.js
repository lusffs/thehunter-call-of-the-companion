export default {
  _id: "red_deer",
  class: 6,
  name: "Red Deer",
  maxLevel: 9,
  callers: ["Red Deer Caller"],
  scents: [],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-09:00;Drinking",
        "09:00-13:00;Resting",
        "13:00-17:00;Feeding",
        "17:00-21:00;Drinking",
        "21:00-00:00;Resting",
      ],
    },
    {
      name: "Parque Fernando",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-09:00;Drinking",
        "09:00-13:00;Resting",
        "13:00-17:00;Feeding",
        "17:00-21:00;Drinking",
        "21:00-00:00;Resting",
      ],
    },
    {
      name: "Hirschfelden",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-09:00;Drinking",
        "09:00-13:00;Resting",
        "13:00-17:00;Feeding",
        "17:00-21:00;Drinking",
        "21:00-00:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 90.5,
    gold: 182.2,
    diamond: 251,
    maxScore: 266,
  },
  maxWeight: {
    kg: 240,
    lbs: 529,
  },
};
