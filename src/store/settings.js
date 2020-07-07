import { createStore } from "global-hook-store";

export default createStore(
  {
    isRightHanded: true,
    useKiloWeightUnit: true,
    timeSyncModalOpen: false,
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
    setTimeSyncModalOpen: (state, timeSyncModalOpen) => ({
      ...state,
      timeSyncModalOpen,
    }),
  }
);
