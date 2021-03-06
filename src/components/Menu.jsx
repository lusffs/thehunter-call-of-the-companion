import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";

import List from "@material-ui/core/List";
import { useTheme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStore from "global-hook-store";
import siteStore from "store/siteStore";
const Link = require("react-router-dom").Link;

export default function Menu() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    state: { isRightHanded },
  } = useStore(siteStore);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to={"/"}>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button component={Link} to={"/animals"}>
          <ListItemText primary={"Animals"} />
        </ListItem>
        <ListItem button component={Link} to={"/animal-finder"}>
          <ListItemText primary={"Animal finder"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      {matches ? (
        <Fab
          className={isRightHanded ? classes.button : classes.buttonLeftHanded}
          color="primary"
          aria-label="Menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </Fab>
      ) : (
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor={isRightHanded && matches ? "right" : "left"}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  button: {
    position: "fixed",
    bottom: spacing(2),
    right: spacing(2),
  },
  buttonLeftHanded: {
    position: "fixed",
    bottom: spacing(2),
    left: spacing(2),
  },
}));
