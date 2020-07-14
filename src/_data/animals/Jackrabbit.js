export default {
  _id: "jackrabbit",
  class: 1,
  name: "Jackrabbit",
  maxLevel: 3,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Layton Lakes",
      needZones: [
        "01:00-05:00;Resting",
        "05:00-11:00;Feeding",
        "11:00-14:00;Drinking",
        "14:00-16:00;Resting",
        "16:00-22:00;Feeding",
        "22:00-01:00;Drinking",
      ],
    },
  ],
  furTypes: [
    "Brown;Common",
    "Light Brown;Common",
    "Grey;Common",
    "Albino;Rare",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 2.8,
    gold: 4.8,
    diamond: 6.3,
    maxScore: 6.8,
  },
  maxWeight: {
    kg: 6.8,
    lbs: 15.1,
  },
};
