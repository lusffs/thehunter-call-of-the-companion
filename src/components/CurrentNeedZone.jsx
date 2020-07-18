import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

import NeedZoneIcon from "components/NeedZoneIcon";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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
    <Grid container alignItems="center">
      <NeedZoneIcon status={status[1]} />
      <Typography
        variant="body2"
        component="span"
        style={{ marginLeft: "0.5em", fontWeight: "bold" }}
      >
        {`${status[0].split("-")[0]} - ${status[0].split("-")[1]}`}
      </Typography>
      <ArrowRightIcon fontSize="small" />
      <NeedZoneIcon status={nextStatus[1]} />
    </Grid>
  );
}
