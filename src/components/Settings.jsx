import React, { useState } from "react";

import { useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DialogContentText from "@material-ui/core/DialogContentText";

import WeightSwitch from "components/WeightSwitch";
import RightHandSwitch from "components/RightHandSwitch";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClickOpen}
        aria-label="Settings"
      >
        <SettingsIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="settings-dialog-title"
      >
        <DialogTitle id="settings-dialog-title">Settings</DialogTitle>
        <DialogContent>
          {matches && (
            <>
              <RightHandSwitch />
              <DialogContentText>
                This will move the entire menu and corresponding button to the
                right if enabled.
              </DialogContentText>
            </>
          )}
          <WeightSwitch />
          <DialogContentText>Weight in kg instead of lbs</DialogContentText>
          <Button
            onClick={() => {
              localStorage.clear();
              window.location.href = window.location.href;
            }}
            color="secondary"
            variant="contained"
            aria-label="Clear local storage"
          >
            <i>Clear local storage data</i>
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            aria-label="Close dialog"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
