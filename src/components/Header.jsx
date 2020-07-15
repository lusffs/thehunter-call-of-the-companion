import React from "react";

import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

import TimerIcon from "@material-ui/icons/Timer";

import Menu from "components/Menu";
import Settings from "components/Settings";

import useStore from "global-hook-store";
import huntingMateStore from "store/huntingMate";
import settingsStore from "store/settings";
import ScentEliminatorTimer from "./ScentEliminatorTimer";

export default function Header() {
  const classes = useStyles();
  const {
    state: { inGameClock, isActive },
  } = useStore(huntingMateStore);

  const {
    actions: { setTimeSyncModalOpen },
  } = useStore(settingsStore);

  return (
    <>
      <AppBar position="fixed">
        <Container disableGutters maxWidth="md">
          <Toolbar>
            <Menu />
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setTimeSyncModalOpen(true);
              }}
              aria-label="TimeSync"
            >
              <TimerIcon />
            </IconButton>
            <Link
              underline="none"
              color="textPrimary"
              component={RouterLink}
              to="/"
            >
              <Typography variant="h6">
                {isActive ? inGameClock : "Hunter Companion"}
              </Typography>
            </Link>
            <ScentEliminatorTimer />
            <div className={classes.grow} />
            <Settings />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));
