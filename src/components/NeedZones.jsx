import React from "react";

import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

import reserve from "_data/reserves/silver-rigde-peaks.js";

export default function NeedZones() {
  const {
    state: { inGameClock },
  } = useStore(huntingMateStore);

  return (
    <Typography component="div">
      {reserve.needZones.map((a, index) => {
        return (
          <div key={index}>
            <p>{a.name}</p>
            <ul>
              {a.times
                .filter((time) => {
                  const t = time.split(";")[0];

                  return (
                    inGameClock >= t.split("-")[0] &&
                    (inGameClock <= t.split("-")[1] ||
                      t.split("-")[1] === "00:00")
                  );
                })
                .map((b, i) => {
                  return <li key={i}>{b}</li>;
                })}
            </ul>
          </div>
        );
      })}
    </Typography>
  );
}
