export default {
  _id: "puma",
  class: 5,
  name: "Puma",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Parque Fernando",
      needZones: [
        "00:00-06:00;Feeding",
        "06:00-09:00;Drinking",
        "09:00-13:00;Resting",
        "13:00-17:00;Drinking",
        "17:00-21:00;Resting",
        "21:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: [
    "Dark Red;Common",
    "Grey;Uncommon",
    "Albino;Rare",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 32,
    gold: 36,
    diamond: 39,
    maxScore: 40,
  },
  maxWeight: {
    kg: 95,
    lbs: 231,
  },
};
