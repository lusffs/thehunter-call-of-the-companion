export default {
  _id: "red_fox",
  class: 2,
  name: "Red Fox",
  maxLevel: 9,
  callers: ['Predator "Jackrabbit" Caller'],
  scents: [],
  reserves: [
    {
      name: "Yukon Valley",
      needZones: [
        "00:00-03:00;Feeding",
        "03:00-07:00;Feeding",
        "07:00-11:00;Resting",
        "11:00-15:00;Resting",
        "15:00-19:00;Resting",
        "19:00-00:00;Drinking",
      ],
    },
    {
      name: "Hirschfelden",
      needZones: [
        "00:00-03:00;Feeding",
        "03:00-07:00;Feeding",
        "07:00-11:00;Resting",
        "11:00-15:00;Resting",
        "15:00-19:00;Resting",
        "19:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Very Rare", "Melanistic;Very Rare"],
  trophyScore: {
    silver: 4.6,
    gold: 10,
    diamond: 14,
    maxScore: 15,
  },
  maxWeight: {
    kg: 15.4,
    lbs: 34,
  },
};
