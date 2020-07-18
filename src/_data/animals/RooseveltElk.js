export default {
  _id: "roosevelt_elk",
  class: 7,
  name: "Roosevelt Elk",
  maxLevel: 5,
  callers: ["Elk Caller"],
  scents: [],
  reserves: [
    {
      name: "Layton Lakes",
      needZones: [
        "05:00-09:00;Drinking",
        "09:00-13:00;Feeding",
        "13:00-17:00;Resting",
        "17:00-21:00;Drinking",
        "21:00-05:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 128.7,
    gold: 272.7,
    diamond: 380.8,
    maxScore: 420,
  },
  maxWeight: {
    kg: 500,
    lbs: 1102,
  },
};
