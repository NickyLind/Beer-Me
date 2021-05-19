import React from 'react';
import HomeController from "./selector/HomeController";
import FormController from "./forms/FormController";
import LogInController from "./login/LogInController";
import SidebarController from "../SidebarController";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainScreenController() {

  return (
    <Router>
      <SidebarController />
      <Switch>
        <Route path="/login">
          <LogInController />
        </Route>
        <Route path="/userBreweries">
          <FormController />
        </Route>
        <Route path="/">
          <HomeController />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainScreenController;
