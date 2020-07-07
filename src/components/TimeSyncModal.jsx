import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import TimeSync from "./TimeSync";
import useStore from "global-hook-store";
import settingsStore from "store/settings";
import huntingMateStore from "store/huntingMate";

export default function FormDialog() {
  const {
    state: { timeSyncModalOpen },
    actions: { setTimeSyncModalOpen },
  } = useStore(settingsStore);

  const {
    state: { isActive },
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
        <TimeSync />
        {isActive && (
          <DialogContentText>
            The sync timer is currently running. Use the button to re-sync the
            timer if you rest in game.
          </DialogContentText>
        )}
      </DialogContent>
    </Dialog>
  );
}
