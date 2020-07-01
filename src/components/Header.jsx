import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Settings from "components/Settings";
import { Link as RouterLink } from "react-router-dom";
import Menu from "components/Menu";

export default function Header() {
  const classes = useStyles();

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
              <Typography variant="h6">Hunter Companion</Typography>
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
