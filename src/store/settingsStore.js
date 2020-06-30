import { createStore } from "global-hook-store";

const settingsStore = createStore(
  {
    isRightHanded: true,
  },
  {
    toggleRightHanded: (state) => ({
      ...state,
      isRightHanded: !state.isRightHanded,
    }),
  }
);

export default settingsStore;
