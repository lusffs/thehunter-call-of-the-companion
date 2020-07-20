export default {
  _id: "blacktail_deer",
  class: 4,
  name: "Blacktail Deer",
  maxLevel: 5,
  callers: ['Deer "Bleat" Caller', 'Deer "Grunt" Caller'],
  scents: ["Blacktail Deer Scent"],
  reserves: [
    {
      name: "Layton Lakes",
      needZones: [
        "05:00-09:00;Drinking",
        "09:00-13:00;Resting",
        "13:00-17:00;Feeding",
        "17:00-21:00;Drinking",
        "21:00-05:00;Resting",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 76.9,
    gold: 134.4,
    diamond: 177.5,
    maxScore: 230,
  },
  maxWeight: {
    kg: 95,
    lbs: 209,
  },
};
