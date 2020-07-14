export default {
  _id: "grey_wolf",
  class: 5,
  name: "Grey Wolf",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Yukon Valley",
      needZones: [
        "00:00-03:00;Drinking",
        "03:00-07:00;Feeding",
        "07:00-11:00;Resting",
        "11:00-19:00;Resting",
        "19:00-23:00;Feeding",
        "23:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: [
    "Red Brown;Uncommon",
    "Egg white;Uncommon",
    "Melanistic;Rare",
    "Albino;Rare",
  ],
  trophyScore: {
    silver: 32,
    gold: 36,
    diamond: 39,
    maxScore: 40,
  },
  maxWeight: {
    kg: 80,
    lbs: 176,
  },
};
