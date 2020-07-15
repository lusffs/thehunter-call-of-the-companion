import React, { useState } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import BathtubIcon from "@material-ui/icons/Bathtub";
import CloseIcon from "@material-ui/icons/Close";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

export default function ScentEliminatorTimer() {
  const [timeLeft, setTimeLeft] = useState();
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const {
    state: { scentEliminatorSyncTime },
    actions: { setScentCoverTimer },
  } = useStore(huntingMateStore);

  React.useEffect(() => {
    let interval = null;
    if (scentEliminatorSyncTime !== null) {
      interval = setInterval(() => {
        const secSinceStart = Math.round(
          (new Date().getTime() - scentEliminatorSyncTime) / 1000
        );

        const totalLeft = 1800 - secSinceStart;

        const secondsValue = totalLeft % 60;
        const minuteValue = Math.floor(totalLeft / 60);

        const timeString = `${
          minuteValue < 10 ? `0${minuteValue}` : minuteValue
        }:${secondsValue < 10 ? `0${secondsValue}` : secondsValue}`;

        setTimeLeft(timeString);

        if (totalLeft < 1) {
          clearInterval(interval);
          setScentCoverTimer(null);
          setSnackBarOpen(true);
        }
      }, 500);
    }

    return () => clearInterval(interval);
  }, [scentEliminatorSyncTime, setScentCoverTimer, setSnackBarOpen]);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => {
          setTimeLeft("30:00");
          setScentCoverTimer(new Date().getTime());
        }}
      >
        <BathtubIcon />
      </IconButton>
      {scentEliminatorSyncTime && (
        <Typography variant="h6">{timeLeft}</Typography>
      )}
      <Snackbar
        open={snackBarOpen}
        onClose={() => {
          setSnackBarOpen(false);
        }}
        message="Your scent eliminator has run out."
        action={
          <>
            <IconButton
              size="small"
              aria-label="Close"
              color="inherit"
              onClick={() => setSnackBarOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
}
