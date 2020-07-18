export default {
  _id: "brown_bear",
  class: 7,
  name: "Brown Bear",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Medved Taiga",
      needZones: [
        "00:00-03:00;Feeding",
        "03:00-07:00;Drinking",
        "07:00-19:00;Resting",
        "19:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: [
    "Grey;Common",
    "Blonde;Common",
    "Cinnamon;Common",
    "Red Brown;Common",
    "Light Brown;Common",
    "Dark Brown;Common",
    "Gold;Common",
    "Spirit;Rare",
    "Albino;Rare & Mission",
    "Melanistic;Very Rare",
  ],
  trophyScore: {
    silver: 18.6,
    gold: 23.7,
    diamond: 27.7,
    maxScore: 30,
  },
  maxWeight: {
    kg: 482,
    lbs: 1063,
  },
};
