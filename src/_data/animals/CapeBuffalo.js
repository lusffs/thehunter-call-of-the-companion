export default {
  _id: "cape_buffalo",
  class: 9,
  name: "Cape Buffalo",
  maxLevel: 9,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-08:00;Feeding",
        "08:00-12:00;Drinking",
        "12:00-16:00;Feeding",
        "16:00-19:00;Resting",
        "19:00-22:00;Drinking",
        "22:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: [
    "Black;Common",
    "Grey;Common",
    "Brown;Uncommon",
    "Luecistic;Very Rare",
    "Albino;Very Rare",
  ],
  trophyScore: {
    silver: 73.3,
    gold: 117.9,
    diamond: 151.3,
    maxScore: 162.5,
  },
  maxWeight: {
    kg: 950,
    lbs: 2094,
  },
};
