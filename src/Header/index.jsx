import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Slide from "@material-ui/core/Slide";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
// import Fab from "@material-ui/core/Fab";

import MenuIcon from "@material-ui/icons/Menu";
// import AddIcon from "@material-ui/icons/Add";
// import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { ThemeProvider } from "@material-ui/core/styles";

// import theme from "./theme";
// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const useStyles = makeStyles(() => ({
  appBar: {
    // top: "auto",
    // bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  // fabButton: {
  //   position: "absolute",
  //   zIndex: 1,
  //   top: -30,
  //   left: 0,
  //   right: 0,
  //   margin: "0 auto",
  // },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      {/* <HideOnScroll {...props}> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            theHunter - Call of the Companion
          </Typography>
          {/* <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon /> 
          </Fab> */}
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* </HideOnScroll> */}
      {/* <Toolbar /> */}
    </>
  );
}
