export default {
  _id: "black_bear",
  class: 7,
  name: "Black Bear",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Silver Ridge Peaks",
      needZones: [
        "00:00-05:00;Resting",
        "05:00-11:00;Feeding",
        "11:00-12:00;Drink",
        "12:00-15:00;Resting",
        "15:00-20:00;Drinking",
        "20:00-21:00;Drinking",
        "21:00-00:00;Resting",
      ],
    },
    {
      name: "Layton Lakes",
      needZones: [
        "00:00-07:00;Feeding",
        "07:00-11:00;Resting",
        "11:00-15:00;Resting",
        "15:00-19:00;Resting",
        "19:00-00:00;Drinking",
      ],
    },
  ],
  furTypes: ["Brown;Common", "Blonde;Common", "Cinnamon;Common"],
  trophyScore: {
    silver: 14.3,
    gold: 19.2,
    diamond: 22.7,
    maxScore: 24,
  },
  maxWeight: {
    kg: 290,
    lbs: 639,
  },
};
