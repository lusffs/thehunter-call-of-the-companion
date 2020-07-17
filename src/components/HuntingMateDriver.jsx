import React from "react";

import useStore from "global-hook-store";
import huntingMate from "store/huntingMate";

// const SERVER_SECOND_VALUE = 3600 / 920; // Pre-patch 2020-07-14: 1h in game = 15:20 minutes realtime => 3.913 seconds per 1 real life second
const SERVER_SECOND_VALUE = 3600 / 896; // 1h in game = 14:56 minutes realtime => 4.0179 seconds per 1 real life second
const LOCAL_STORAGE_KEY = "huntingMateState";

export default function HuntingMateDriver() {
  const {
    state: {
      inGameClock,
      inGameSyncTime,
      isActive,
      clientSyncTime,
      scentEliminatorSyncTime,
      useKiloWeightUnit,
      selectedReserve,
    },
    actions: { setInGameClock, setInitialState },
  } = useStore(huntingMate);

  // Read from localstorage and set as initial state
  React.useEffect(() => {
    setInitialState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {});
  }, [setInitialState]);

  // Preserve to localstorage
  React.useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        clientSyncTime,
        inGameSyncTime,
        isActive,
        scentEliminatorSyncTime,
        useKiloWeightUnit,
        selectedReserve,
      })
    );
  }, [
    clientSyncTime,
    inGameSyncTime,
    isActive,
    scentEliminatorSyncTime,
    useKiloWeightUnit,
    selectedReserve,
  ]);

  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        const msSinceStart = new Date().getTime() - clientSyncTime;

        const serverTime = new Date(inGameSyncTime);
        serverTime.setMilliseconds(
          serverTime.getMilliseconds() + msSinceStart * SERVER_SECOND_VALUE
        );

        const timeString = `${
          serverTime.getHours() < 10
            ? `0${serverTime.getHours()}`
            : serverTime.getHours()
        }:${
          serverTime.getMinutes() < 10
            ? `0${serverTime.getMinutes()}`
            : serverTime.getMinutes()
        }`;

        if (timeString !== inGameClock) {
          setInGameClock(timeString);
        }
      }, 250);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, clientSyncTime, inGameSyncTime, setInGameClock, inGameClock]);

  return null;
}
