export default {
  _id: "springbok",
  class: 3,
  name: "Springbok",
  maxLevel: 5,
  callers: ["Antler Rattler", 'Buck "Snort Wheeze" Caller'],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-04:00;Resting",
        "04:00-09:00;Feeding",
        "09:00-12:00;Resting",
        "12:00-15:00;Resting",
        "15:00-19:00;Drinking",
        "19:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: ["Dark Brown;Common", "Black brown;Uncommon", "Albino;Rare"],
  trophyScore: {
    silver: 69.4,
    gold: 93,
    diamond: 110.6,
    maxScore: 116,
  },
  maxWeight: {
    kg: 42,
    lbs: 93,
  },
};
