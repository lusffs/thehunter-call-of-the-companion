export default {
  _id: "water_buffalo",
  class: 9,
  name: "Water Buffalo",
  maxLevel: 9,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Parque Fernando",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-10:00;Feeding",
        "10:00-13:00;Drinking",
        "13:00-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Black;Common", "Brown;Common", "Orange;Common", "Albino;Rare"],
  trophyScore: {
    silver: 84.2,
    gold: 131.8,
    diamond: 167.5,
    maxScore: 0,
  },
  maxWeight: {
    kg: 1250,
    lbs: 2756,
  },
};
