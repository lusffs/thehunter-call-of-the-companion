export default {
  _id: "mule_deer",
  class: 6,
  name: "Mule Deer",
  maxLevel: 5,
  callers: ['Deer "Bleat" Caller'],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-05:00;Feeding",
        "05:00-09:00;Resting",
        "09:00-10:00;Drinking",
        "10:00-14:00;Feeding",
        "14:00-18:00;Resting",
        "18:00-23:00;Feeding",
        "23:00-00:00;Drinking",
      ],
    },
    {
      name: "Parque Fernando",
      needZones: [
        "00:00-04:00;Feeding",
        "04:00-09:00;Resting",
        "09:00-12:00;Drinking",
        "12:00-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: [
    "Grey;Common",
    "Blonde;Common",
    "Dilute;Uncommon",
    "Piebald;Rare",
    "Melanistic;Rare",
    "Albino;Rare",
  ],
  trophyScore: {
    silver: 132.4,
    gold: 341.2,
    diamond: 497.8,
    maxScore: 550,
  },
  maxWeight: {
    kg: 210,
    lbs: 463,
  },
};
