import hunterMateStore from "store/huntingMate";

export default (weight) => {
  const w = hunterMateStore.state.weightUnit === "kg" ? weight.kg : weight.lbs;
  if (w) {
    return ` ${w} ${hunterMateStore.state.weightUnit}`;
  }
  return null;
};
