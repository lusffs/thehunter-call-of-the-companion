export default (level) => {
  switch (level) {
    case 1:
      return "Trivial";
    case 2:
      return "Minor";
    case 3:
      return "Very Easy";
    case 4:
      return "Easy";
    case 5:
      return "Medium";
    case 6:
      return "Hard";
    case 7:
      return "Very hard";
    case 8:
      return "Mythical";
    case 9:
      return "Legendary";
    case 10:
      return "Fabled";
    default:
      return "Not defined";
  }
};
