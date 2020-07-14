export default {
  _id: "scrub_hare",
  class: 1,
  name: "Scrub Hare",
  maxLevel: 3,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-04:00;Drinking",
        "04:00-09:00;Feeding",
        "09:00-12:00;Resting",
        "12:00-15:00;Resting",
        "15:00-20:00;Feeding",
        "20:00-00:00;Resting",
      ],
    },
  ],
  furTypes: [
    "Brown;Common",
    "Chestnut;Common",
    "Grey;Common",
    "Light Grey;Common",
    "Albino;Rare",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 2.3,
    gold: 4,
    diamond: 5.3,
    maxScore: 5.8,
  },
  maxWeight: {
    kg: 5.8,
    lbs: 12.8,
  },
};
