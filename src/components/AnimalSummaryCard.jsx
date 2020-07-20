import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SpeedIcon from "@material-ui/icons/Speed";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import useStore from "global-hook-store";
import settingsStore from "store/settings";
import huntingMateStore from "store/huntingMate";

import CurrentNeedZone from "components/CurrentNeedZone";

const levelDescription = (level) => {
  switch (level) {
    case 1:
      return "Trivial";
    case 2:
      return "";
    case 3:
      return "Very Easy";
    case 4:
      return "";
    case 5:
      return "Medium";
    case 6:
      return "";
    case 7:
      return "";
    case 8:
      return "";
    case 9:
      return "Legendary";
    case 10:
      return "Fabled";
    default:
      return "";
  }
};

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    [breakpoints.only("xs")]: {
      borderBottom: `1px solid ${palette.background.default}`,
    },
  },
  grow: { flexGrow: 1 },
  easeTransition: {
    transition: "all 0.2s ease-in",
  },
  centeredVertical: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
  pointer: { cursor: "pointer" },
  fullHeight: { height: "100%" },
  smallFont: { fontSize: "1rem" },
  collapseIcon: {
    transition: "transform 0.2s ease-in-out",
  },
  flip: {
    transform: "scaleY(-1)",
  },
  marginLeft: {
    marginLeft: "0.5em",
  },
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
                  className={`${classes.easeTransition} ${
                    collapsed ? classes.smallFont : ""
                  }`}
                  variant="h6"
                >
                  <span
                    className={classes.pointer}
                    onClick={handleMoreInfoClick}
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
                  onClick={handleMoreInfoClick}
                >
                  <MoreHorizIcon />
                </IconButton>
                <IconButton
                  size="small"
                  color="default"
                  edge="end"
                  onClick={handleCollapseToggle}
                >
                  <ExpandLessIcon
                    className={`${classes.collapseIcon} ${
                      collapsed ? classes.flip : ""
                    }`}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Collapse in={!collapsed}>
            <Grid container direction="column">
              <Grid item>
                <CurrentNeedZone animal={animal} reserve={reserve} />
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid className={classes.grow} item>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container alignItems="center">
                          <SpeedIcon fontSize="small" />
                          <Typography
                            variant="body2"
                            component="span"
                            className={classes.marginLeft}
                          >
                            <b>{renderWeight(animal.maxWeight)}</b>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center">
                          <DoubleArrowIcon fontSize="small" />
                          <Typography
                            variant="body2"
                            component="span"
                            className={classes.marginLeft}
                          >
                            <b>{`${animal.maxLevel} - ${levelDescription(
                              animal.maxLevel
                            )}`}</b>
                          </Typography>
                        </Grid>
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
                            {animal.trophyScore.diamond.toFixed(1)}
                          </b>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Box>
    </Grid>
  );
}
