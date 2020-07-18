export default {
  _id: "moose",
  class: 8,
  name: "Moose",
  maxLevel: 5,
  callers: ["Moose Caller"],
  scents: [],
  reserves: [
    {
      name: "Yukon Valley",
      needZones: [
        "05:00-09:00;Feeding",
        "09:00-13:30;Drinking",
        "13:30-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-05:00;Resting",
      ],
    },
    {
      name: "Medved Taiga",
      needZones: [
        "05:00-09:00;Feeding",
        "09:00-13:30;Drinking",
        "13:30-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-05:00;Resting",
      ],
    },
    {
      name: "Layton Lakes",
      needZones: [
        "05:00-09:00;Feeding",
        "09:00-13:30;Drinking",
        "13:30-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-05:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 89.7,
    gold: 204.6,
    diamond: 290.7,
    maxScore: 315, // 320?
  },
  maxWeight: {
    kg: 620,
    lbs: 1367,
  },
};
