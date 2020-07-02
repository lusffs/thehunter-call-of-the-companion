import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "pages/Start";
import AnimalsPage from "pages/Animals";
import AnimalFinder from "pages/AnimalFinder";

export default function PageRouter() {
  return (
    <>
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
    </>
  );
}
