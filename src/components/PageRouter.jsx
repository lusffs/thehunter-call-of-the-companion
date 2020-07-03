import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

import StartPage from "pages/Start";
import AnimalsPage from "pages/Animals";
import AnimalFinder from "pages/AnimalFinder";

export default function PageRouter() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Switch>
        <Route path="/animals">
          <AnimalsPage />
        </Route>
        <Route path="/animal-finder">
          <AnimalFinder />
        </Route>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Grid>
  );
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
    marginBottom: spacing(6),
  },
}));
