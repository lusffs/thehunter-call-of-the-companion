export default {
  _id: "reindeer",
  class: 6,
  name: "Reindeer",
  maxLevel: 3,
  callers: ["Antler Rattler"],
  scents: [],
  reserves: [
    {
      name: "Medved Taiga",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-09:00;Drinking",
        "09:00-13:00;Feeding",
        "13:00-17:00;Resting",
        "17:00-21:00;Drinking",
        "21:00-00:00;Resting",
      ],
    },
  ],
  furTypes: [
    "Piebald;Rare",
    "Luecistic;Rare",
    "Albino;Rare",
    "Melanistic;Rare",
  ],
  trophyScore: {
    silver: 152.5,
    gold: 311.2,
    diamond: 430.2,
    maxScore: 470,
  },
  maxWeight: {
    kg: 182,
    lbs: 401,
  },
};
