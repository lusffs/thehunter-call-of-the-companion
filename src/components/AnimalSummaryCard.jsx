import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";
import settingsStore from "store/settings";

import CurrentNeedZone from "components/CurrentNeedZone";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    [breakpoints.only("xs")]: {
      borderBottom: `1px solid ${palette.background.default}`,
    },
  },
  grow: { flexGrow: 1 },
  centeredVertical: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
  pointer: { cursor: "pointer" },
  fullHeight: { height: "100%" },
  smallFont: { fontSize: "1rem" },
}));

export default function AnimalSummaryCard({ animal, reserve }) {
  const classes = useStyles();

  const [collapsed, setCollapsed] = useState(false);

  const {
    state: { useKiloWeightUnit },
  } = useStore(huntingMateStore);

  const {
    actions: { setAnimalInfoModalOpen, setAnimalInfoSelectedAnimal },
  } = useStore(settingsStore);

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

  const handleMoreInfoClick = () => {
    setAnimalInfoSelectedAnimal(animal).then(() => {
      setAnimalInfoModalOpen(true);
    });
  };

  const handleCollapseToggle = () => {
    setCollapsed((c) => !c);
  };

  return (
    <Grid className={classes.root} item xs={12} sm={6}>
      <Box px={2} py={1}>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row">
              <Grid
                className={`${classes.grow} ${classes.centeredVertical}`}
                item
              >
                <Typography
                  className={collapsed ? classes.smallFont : ""}
                  variant="h6"
                >
                  <span
                    className={classes.pointer}
                    onClick={handleCollapseToggle}
                  >
                    {animal.name}
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  size="small"
                  color="default"
                  edge="start"
                  onClick={handleCollapseToggle}
                >
                  {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                </IconButton>
                <IconButton
                  size="small"
                  color="default"
                  edge="end"
                  onClick={handleMoreInfoClick}
                >
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          {!collapsed && (
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
                        {animal.trophyScore.diamond}
                      </b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </Grid>
  );
}
