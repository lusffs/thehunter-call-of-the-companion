import { createStore } from "global-hook-store";

export default createStore(
  {
    inGameClock: null,
    isActive: false,
    clientSyncTime: null,
    inGameSyncTime: null,
    scentEliminatorSyncTime: null,
    weightUnit: "kg",
    selectedReserve: "all",
  },
  {
    setInitialState: (state, initialLocalStorageState) => ({
      ...state,
      ...initialLocalStorageState,
    }),
    startHuntingMate: (state, timeString) => ({
      ...state,
      isActive: true,
      clientSyncTime: new Date().getTime(),
      inGameSyncTime: new Date().setHours(
        parseInt(timeString.split(":")[0]),
        parseInt(timeString.split(":")[1]),
        0,
        0
      ),
    }),
    setScentEliminatorTimer: (state, scentEliminatorSyncTime) => ({
      ...state,
      scentEliminatorSyncTime,
    }),
    setIsActive: (state, isActive) => ({
      ...state,
      isActive,
    }),
    setInGameClock: (state, inGameClock) => ({
      ...state,
      inGameClock,
    }),
    setSelectedReserve: (state, selectedReserve) => ({
      ...state,
      selectedReserve,
    }),
    setWeightUnit: (state, weightUnit) => ({
      ...state,
      weightUnit,
    }),
  }
);
