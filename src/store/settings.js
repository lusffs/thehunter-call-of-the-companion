import { createStore } from "global-hook-store";

export default createStore(
  {
    isRightHanded: true,
    useKiloWeightUnit: true,
  },
  {
    toggleRightHanded: (state) => ({
      ...state,
      isRightHanded: !state.isRightHanded,
    }),
    toggleWeightUnit: (state) => ({
      ...state,
      useKiloWeightUnit: !state.useKiloWeightUnit,
    }),
  }
);
