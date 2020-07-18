export default {
  _id: "warthog",
  class: 4,
  name: "Warthog",
  maxLevel: 5,
  callers: ["Wild Boar Caller"],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-04:00;Resting",
        "04:00-08:00;Drinking",
        "08:00-13:00;Feeding",
        "13:00-20:00;Resting",
        "20:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: ["Grey;Common", "Red Brown;Common", "Red;Rare", "Albino;Rare"],
  trophyScore: {
    silver: 24.6,
    gold: 43.8,
    diamond: 58.1,
    maxScore: 63,
  },
  maxWeight: {
    kg: 150,
    lbs: 331,
  },
};
