import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Container disableGutters maxWidth="md">
          <Toolbar>
            <Typography variant="h6">Hunter Companion</Typography>
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}
