import React from "react";

import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Menu from "components/Menu";
import Settings from "components/Settings";

import useStore from "global-hook-store";
import huntingMate from "store/huntingMate";

export default function Header() {
  const classes = useStyles();
  const {
    state: { inGameClock, isActive },
  } = useStore(huntingMate);
  return (
    <>
      <AppBar position="fixed">
        <Container disableGutters maxWidth="md">
          <Toolbar>
            <Menu />
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
