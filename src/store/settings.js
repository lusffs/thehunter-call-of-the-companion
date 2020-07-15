import { createStore } from "global-hook-store";

export default createStore(
  {
    isRightHanded: true,

    timeSyncModalOpen: false,
  },
  {
    toggleRightHanded: (state) => ({
      ...state,
      isRightHanded: !state.isRightHanded,
    }),

    setTimeSyncModalOpen: (state, timeSyncModalOpen) => ({
      ...state,
      timeSyncModalOpen,
    }),
  }
);
