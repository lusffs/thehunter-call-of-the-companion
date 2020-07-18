export default {
  _id: "iberian_wolf",
  class: 5,
  name: "Iberian Wolf",
  maxLevel: 9,
  callers: ['Predator "Distressed Fawn" Caller'],
  scents: [],
  reserves: [
    {
      name: "Cuatro Colinas",
      needZones: [
        "03:00-07:00;Feeding",
        "07:00-19:00;Resting",
        "19:00-03:00;Drinking",
      ],
    },
  ],
  furTypes: [
    "Grey;Common",
    "Olive;Uncommon",
    "Winter;Uncommon",
    "Pristine;Uncommon",
    "Albino;Rare",
    "Melanistic;Rare",
    "Fantasma;Mission",
    "Ogro;Mission",
    "Sombra;Mission",
  ],
  trophyScore: {
    silver: 32,
    gold: 36,
    diamond: 39,
    maxScore: 40,
  },
  maxWeight: {
    kg: 50,
    lbs: 110,
  },
};
