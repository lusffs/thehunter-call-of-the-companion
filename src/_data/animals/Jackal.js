export default {
  _id: "jackal",
  class: 2,
  name: "Jackal",
  maxLevel: 9,
  callers: ['Predator "Jackrabbit" Caller'],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-04:00;Feeding",
        "04:00-11:00;Resting",
        "11:00-15:00;Drinking",
        "18:00-22:00;Feeding",
        "22:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Grey;Common", "Melanistic;Rare", "Albino;Rare"],
  trophyScore: {
    silver: 16.7,
    gold: 23.8,
    diamond: 29.1,
    maxScore: 31,
  },
  maxWeight: {
    kg: 14,
    lbs: 31,
  },
};
