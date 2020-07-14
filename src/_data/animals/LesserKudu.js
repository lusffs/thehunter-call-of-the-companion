export default {
  _id: "lesser_kudu",
  class: 4,
  name: "Lesser Kudu",
  maxLevel: 5,
  callers: ["Antler Rattler", 'Buck "Snort Wheeze" Caller'],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-04:00;Drinking",
        "04:00-07:00;Feeding",
        "07:00-10:00;Feeding",
        "10:00-14:00;Resting",
        "14:00-19:00;Resting",
        "19:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: [
    "Grey;Common",
    "Dark;Common",
    "Dusky;Uncommon",
    "Red Brown;Rare",
    "Melanistic;Rare",
    "Albino;Rare",
  ],
  trophyScore: {
    silver: 13.3,
    gold: 24.2,
    diamond: 32.2,
    maxScore: 35,
  },
  maxWeight: {
    kg: 105,
    lbs: 231,
  },
};
