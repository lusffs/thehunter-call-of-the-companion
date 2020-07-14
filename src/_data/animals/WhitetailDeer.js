export default {
  _id: "whitetail_deer",
  class: 4,
  name: "Whitetail Deer",
  maxLevel: 3,
  callers: [
    'Buck "Snort Wheeze" Caller',
    'Deer "Bleat" Caller',
    'Deer "Grunt" Caller',
  ],
  scents: [],
  reserves: [
    {
      name: "Layton Lakes",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-09:00;Feeding",
        "09:00-12:00;Resting",
        "12:00-15:00;Drinking",
        "15:00-21:00;Feeding",
        "21:00-00:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 111.4,
    gold: 205.9,
    diamond: 276.8,
    maxScore: 310,
  },
  maxWeight: {
    kg: 100,
    lbs: 220,
  },
  fabled: {
    maxLevel: 10,
    maxWeight: {
      kg: 110,
      lbs: 242,
    },
  },
};
