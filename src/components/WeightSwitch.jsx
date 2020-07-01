import React from "react";
import Switch from "@material-ui/core/Switch";
import useStore from "global-hook-store";
import settingsStore from "store/settings";
import { Typography, Grid } from "@material-ui/core";

export default function RightHandSwitch() {
  const {
    state: { useKiloWeightUnit },
    actions: { toggleWeightUnit },
  } = useStore(settingsStore);

  const toggleChecked = () => {
    toggleWeightUnit();
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Pounds (lbs)</Grid>
        <Grid item>
          <Switch
            checked={useKiloWeightUnit}
            onChange={toggleChecked}
            color="secondary"
          />
        </Grid>
        <Grid item>Kilos (kg)</Grid>
      </Grid>
    </Typography>
  );
}
