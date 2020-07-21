import hunterMateStore from "store/huntingMate";

export default (weight) => {
  const w = hunterMateStore.state.useKiloWeightUnit ? weight.kg : weight.lbs;
  if (w) {
    return ` ${w} ${hunterMateStore.state.useKiloWeightUnit ? "kg" : "lbs"}`;
  }
  return null;
};
