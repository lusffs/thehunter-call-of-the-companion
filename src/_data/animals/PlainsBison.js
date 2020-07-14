export default {
  _id: "plains_bison",
  class: 9,
  name: "Plains Bison",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-03:00;Resting",
        "03:00-10:00;Feeding",
        "10:00-11:00;Drinking",
        "11:00-16:00;Resting",
        "16:00-17:00;Drinking",
        "17:00-00:00;Feeding",
      ],
    },
    {
      name: "Yukon Valley",
      needZones: [
        "00:00-03:00;Feeding",
        "03:00-07:00;Drinking",
        "07:00-11:00;Resting",
        "11:00-15:00;Resting",
        "15:00-19:00;Resting",
        "19:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: ["Luecistic;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 50.7,
    gold: 148.1,
    diamond: 221.1,
    maxScore: 245.5,
  },
  maxWeight: {
    kg: 1200,
    lbs: 2645,
  },
};
