import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CurrentNeedZone from "./CurrentNeedZone";
import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";

const useStyles = makeStyles(() => ({
  grow: { flexGrow: 1 },
  fullHeight: { height: "100%" },
}));

export default function AnimalSummaryCard({ animal, reserve }) {
  const classes = useStyles();

  const {
    state: { useKiloWeightUnit },
  } = useStore(huntingMateStore);

  if (!animal) {
    return null;
  }

  const renderWeight = (weight) => {
    const w = useKiloWeightUnit ? weight.kg : weight.lbs;
    if (w) {
      return ` ${w} ${useKiloWeightUnit ? "kg" : "lbs"}`;
    }
    return null;
  };

  return (
    <Grid item xs={12} sm={6}>
      <Box px={2} py={1}>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
              <Grid className={classes.grow} item>
                <Typography variant="h6">{animal.name}</Typography>
              </Grid>
              <Grid item>
                <IconButton size="small" color="default" edge="end">
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid className={classes.grow} item>
              <Grid container direction="column">
                <Grid item>
                  <CurrentNeedZone animal={animal} reserve={reserve} />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <b>{"Max weight:"}</b>
                    {renderWeight(animal.maxWeight)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <b>{"Max level:"}</b>
                    {` ${animal.maxLevel}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                className={classes.fullHeight}
                container
                direction="column"
                justify="flex-end"
              >
                <Grid item>
                  <Typography variant="body1" align="right">
                    <b>
                      <span role="img" aria-label="Diamond">
                        💎
                      </span>{" "}
                      {animal.trophyScore.diamond}{" "}
                      <span role="img" aria-label="Trophy rating">
                        🏆
                      </span>
                    </b>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
