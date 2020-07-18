export default {
  _id: "coyote",
  class: 2,
  name: "Coyote",
  maxLevel: 9,
  callers: ['Predator "Jackrabbit" Caller'],
  scents: [],
  reserves: [
    {
      name: "Layton Lakes",
      needZones: [
        "00:00-03:00;Drinking",
        "03:00-07:00;Feeding",
        "07:00-19:00;Resting",
        "19:00-00:00;Feeding",
      ],
    },
  ],
  furTypes: ["Piebald;Rare", "Albino;Rare", "Melanistic;Rare"],
  trophyScore: {
    silver: 38.3,
    gold: 48.9,
    diamond: 56.8,
    maxScore: 60,
  },
  maxWeight: {
    kg: 27,
    lbs: 59,
  },
};
