import { createStore } from "global-hook-store";

export default createStore(
  {
    isRightHanded: true,
    timeSyncModalOpen: false,
    animalInfoModalOpen: false,
    animalInfoSelectedAnimal: null,
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
    setAnimalInfoModalOpen: (state, animalInfoModalOpen) => ({
      ...state,
      animalInfoModalOpen,
    }),
    setAnimalInfoSelectedAnimal: (state, animalInfoSelectedAnimal) => ({
      ...state,
      animalInfoSelectedAnimal,
    }),
  }
);
