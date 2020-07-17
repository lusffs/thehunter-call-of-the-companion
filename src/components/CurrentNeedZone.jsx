import React from "react";

import Typography from "@material-ui/core/Typography";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

export default function CurrentNeedZone({ animal, reserve }) {
  const {
    state: { isActive, inGameClock },
  } = useStore(huntingMateStore);

  if (!isActive) {
    return null;
  }

  const activeReserve = animal.reserves.find((res) => {
    return res.name === reserve;
  });

  if (!activeReserve || !inGameClock) {
    return null;
  }

  const needZones = activeReserve.needZones;

  let currentIndex = needZones.length - 1;

  for (let i = currentIndex; i >= 0; i--) {
    const needZone = needZones[i];
    const t = needZone.split(";")[0];
    const clockValue = parseInt(`1${inGameClock.replace(":", "")}`);
    const needZoneValue = parseInt(`1${t.split("-")[0].replace(":", "")}`);

    if (clockValue >= needZoneValue) {
      currentIndex = i;
      break;
    }
  }

  const nextIndex =
    currentIndex === needZones.length - 1 ? 0 : currentIndex + 1;

  const status = needZones[currentIndex].split(";");
  const nextStatus = needZones[nextIndex].split(";");

  return (
    <Typography variant="body2">
      {`${status[1]} (${status[0]}) ➡ `}
      <i>{nextStatus[1]}</i>
    </Typography>
  );
}
