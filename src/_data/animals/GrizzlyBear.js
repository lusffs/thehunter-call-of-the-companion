export default {
  _id: "grizzly_bear",
  class: 7,
  name: "Grizzly Bear",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Yukon Valley",
      needZones: [
        "03:00-07:00;Drinking",
        "07:00-19:00;Resting",
        "19:00-03:00;Feeding",
      ],
    },
  ],
  furTypes: ["Brown;Common", "Melanistic;Rare", "Albino;Rare"],
  trophyScore: {
    silver: 52.5,
    gold: 60.7,
    diamond: 66.9,
    maxScore: 70,
  },
  maxWeight: {
    kg: 680,
    lbs: 1499,
  },
};
