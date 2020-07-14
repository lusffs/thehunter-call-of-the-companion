export default {
  _id: "blue_wilderbeest",
  class: 6,
  name: "Blue Wilderbeest",
  maxLevel: 5,
  callers: ['Buck "Snort Wheeze" Caller'],
  scents: [],
  reserves: [
    {
      name: "Vurhonga Savanna",
      needZones: [
        "00:00-03:00;Resting",
        "03:00-09:00;Feeding",
        "09:00-12:00;Resting",
        "12:00-16:00;Resting",
        "16:00-20:00;Feeding",
        "20:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Gold;Common", "Albino;Rare", "Crowned;Very Rare"],
  trophyScore: {
    silver: 21.6,
    gold: 30.7,
    diamond: 37.6,
    maxScore: 40,
  },
  maxWeight: {
    kg: 290,
    lbs: 639,
  },
};
