export default {
  _id: "eurasion_lynx",
  class: 3,
  name: "Eurasian Lynx",
  maxLevel: 9,
  callers: ['Predator "Jackrabbit" Caller'],
  scents: [],
  reserves: [
    {
      name: "Medved Taiga",
      needZones: [
        "00:00-07:00;Feeding",
        "07:00-11:00;Resting",
        "11:00-15:00;Resting",
        "15:00-19:00;Resting",
        "19:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Piebald;Very Rare", "Albino;Very Rare", "Melanistic;Very Rare"],
  trophyScore: {
    silver: 18.5,
    gold: 23.7,
    diamond: 27.6,
    maxScore: 29,
  },
  maxWeight: {
    kg: 45,
    lbs: 99,
  },
};
