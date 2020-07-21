import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import TimerOffIcon from "@material-ui/icons/TimerOff";

import TimeSync from "./TimeSync";
import useStore from "global-hook-store";
import siteStore from "store/siteStore";
import huntingMateStore from "store/huntingMate";

export default function FormDialog() {
  const {
    state: { timeSyncModalOpen },
    actions: { setTimeSyncModalOpen },
  } = useStore(siteStore);

  const {
    state: { isActive },
    actions: { setIsActive },
  } = useStore(huntingMateStore);

  const handleClose = () => {
    setTimeSyncModalOpen(false);
  };

  return (
    <Dialog
      open={timeSyncModalOpen}
      onClose={handleClose}
      aria-labelledby="settings-dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="settings-dialog-title">Game time sync</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Sync the time with your hunt to see needzones in realtime.
        </DialogContentText>
        <TimeSync onClose={handleClose} />
        {isActive && (
          <>
            <DialogContentText>
              The sync timer is currently running. Use the button to re-sync the
              timer if you rest in game.
            </DialogContentText>

            <Button
              color="inherit"
              variant="outlined"
              onClick={() => {
                setIsActive(false);
              }}
              aria-label="Turn off time sync"
              fullWidth
            >
              <TimerOffIcon /> {"Turn off time sync"}
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
