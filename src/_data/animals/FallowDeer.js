export default {
  _id: "fallow_deer",
  class: 4,
  name: "Fallow Deer",
  maxLevel: 5,
  callers: ["Antler Rattler"],
  scents: [],
  reserves: [
    {
      name: "Hirschfelden",
      needZones: [
        "05:00-09:00;Feeding",
        "09:00-13:00;Drinking",
        "13:00-17:00;Resting",
        "17:00-21:00;Feeding",
        "21:00-05:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare & Mission", "Melanistic;Very Rare"],
  trophyScore: {
    silver: 67.9,
    gold: 172.9,
    diamond: 251.7,
    maxScore: 275,
  },
  maxWeight: {
    kg: 100,
    lbs: 220,
  },
};
