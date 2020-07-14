export default {
  _id: "lion",
  class: 9,
  name: "Lion",
  maxLevel: 9,
  callers: [
    'Predator "Jackrabbit" Caller',
    'Predator "Distressed Fawn" Caller',
  ],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-08:00;Feeding",
        "08:00-12:00;Resting",
        "12:00-15:00;Drinking",
        "15:00-00:00;Resting",
      ],
    },
  ],
  furTypes: ["Blonde;Very Rare", "Dark Brown;Bugged?", "Albino;Very Rare"],
  trophyScore: {
    silver: 38,
    gold: 44,
    diamond: 48.5,
    maxScore: 50,
  },
  maxWeight: {
    kg: 270,
    lbs: 595,
  },
};
