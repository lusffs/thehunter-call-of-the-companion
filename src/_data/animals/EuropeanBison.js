export default {
  _id: "european_bison",
  class: 9,
  name: "European Bison",
  maxLevel: 5,
  callers: [],
  scents: [],
  reserves: [
    {
      name: "Hirschfelden",
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
  furTypes: ["Piebald;Rare", "Melanistic;Very Rare", "Albino;Very Rare"],
  trophyScore: {
    silver: 63.2,
    gold: 181.6,
    diamond: 270.3,
    maxScore: 300,
  },
  maxWeight: {
    kg: 920,
    lbs: 2028,
  },
};
