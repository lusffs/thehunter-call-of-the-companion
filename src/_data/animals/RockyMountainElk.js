export default {
  _id: "rocky_mountain_elk",
  class: 8,
  name: "Rocky Mountain Elk",
  maxLevel: 5,
  callers: ["Elk Caller"],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-04:00;Resting",
        "04:00-05:00;Drinking",
        "05:00-17:00;Feeding",
        "17:00-18:00;Drinking",
        "18:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: [
    "Light Grey;Common",
    "Brown;Common",
    "Piebald;Rare",
    "Albino;Rare",
  ],
  trophyScore: {
    silver: 177.8,
    gold: 351.3,
    diamond: 481.4,
    maxScore: 520,
  },
  maxWeight: {
    kg: 480,
    lbs: 1058,
  },
};
