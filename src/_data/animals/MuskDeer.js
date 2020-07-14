export default {
  _id: "musk_deer",
  class: 2,
  name: "Musk Deer",
  maxLevel: 3,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Medved Taiga",
      needZones: [
        "00:00-03:00;Resting",
        "03:00-07:00;Drinking",
        "07:00-11:00;Resting",
        "11:00-15:00;Feeding",
        "15:00-19:00;Resting",
        "19:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Very Rare"],
  trophyScore: {
    silver: 60,
    gold: 168,
    diamond: 249,
    maxScore: 276,
  },
  maxWeight: {
    kg: 17,
    lbs: 37,
  },
};
