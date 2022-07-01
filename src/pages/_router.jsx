import React from "react";
import { Routes, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import StartPage from "pages/Start";
import AnimalsPage from "pages/Animals";
import AnimalFinder from "pages/AnimalFinder";

export default function PageRouter() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Routes>
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/animal-finder" element={<AnimalFinder/>} />
        <Route exact path="/" element={<StartPage />} />
        <Route path="/*" element={<h1>404</h1>} />
        
      </Routes>
    </Grid>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
    marginBottom: spacing(6),
  },
}));
