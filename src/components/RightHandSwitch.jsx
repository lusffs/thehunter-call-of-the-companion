import React from "react";

import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

import useStore from "global-hook-store";
import siteStore from "store/siteStore";

export default function RightHandSwitch() {
  const {
    state: { isRightHanded },
    actions: { toggleRightHanded },
  } = useStore(siteStore);

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
