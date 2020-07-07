import React from "react";

import useStore from "global-hook-store";
import huntingMate from "store/huntingMate";

const SERVER_SECOND_VALUE = 3600 / 920; // 1h in game = 15:20 minutes realtime => 3.913 seconds per 1 real life second
const LOCAL_STORAGE_KEY = "huntingMateState";
export default function HuntingMateDriver() {
  const {
    state: { inGameSyncTime, isActive, clientSyncTime },
    actions: { setInGameClock, setInitialState },
  } = useStore(huntingMate);

  React.useEffect(() => {
    setInitialState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {});
  }, [setInitialState]);

  React.useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        clientSyncTime,
        inGameSyncTime,
        isActive,
      })
    );
  }, [clientSyncTime, inGameSyncTime, isActive]);

  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        const msSinceStart = new Date().getTime() - clientSyncTime;

        const serverTime = new Date(inGameSyncTime);
        serverTime.setMilliseconds(
          serverTime.getMilliseconds() + msSinceStart * SERVER_SECOND_VALUE
        );

        setInGameClock(
          `${
            serverTime.getHours() < 10
              ? `0${serverTime.getHours()}`
              : serverTime.getHours()
          }:${
            serverTime.getMinutes() < 10
              ? `0${serverTime.getMinutes()}`
              : serverTime.getMinutes()
          }`
        );
      }, 250);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, clientSyncTime, inGameSyncTime, setInGameClock]);

  return null;
}
