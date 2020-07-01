import React from "react";
import Switch from "@material-ui/core/Switch";
import useStore from "global-hook-store";
import settingsStore from "store/settings";
import { Typography, Grid } from "@material-ui/core";

export default function RightHandSwitch() {
  const {
    state: { isRightHanded },
    actions: { toggleRightHanded },
  } = useStore(settingsStore);

  const toggleChecked = () => {
    toggleRightHanded();
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Left</Grid>
        <Grid item>
          <Switch
            checked={isRightHanded}
            onChange={toggleChecked}
            color="secondary"
          />
        </Grid>
        <Grid item>Right</Grid>
      </Grid>
    </Typography>
  );
}
