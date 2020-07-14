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

  return !activeReserve ? null : (
    <Typography variant="body2">
      {activeReserve.needZones
        .filter((timeSpan) => {
          const t = timeSpan.split(";")[0];

          return (
            inGameClock >= t.split("-")[0] &&
            (inGameClock < t.split("-")[1] || t.split("-")[1] === "00:00")
          );
        })
        .map((b, i) => {
          const status = b.split(";");
          return <span key={i}>{`${status[1]} (${status[0]})`}</span>;
        })}
    </Typography>
  );
}
