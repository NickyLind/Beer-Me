import React from 'react';
import Home from "./selector/Home";
import classes from "./MainScreenController.module.css";
import FormController from "./forms/FormController";
import LogInController from "./login/LogInController";
import SidebarController from "../SidebarController";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainScreenController(props) {

  const fadeHome = {
    filter: "blur(2px)",
    webkitFilter: "blur(2px)"
  }
  const background = {
    backgroundColor: "blue"
  }

  return (
    <Router>
      <SidebarController />
      <Switch>
        <div style={props.sidebarVisible ? fadeHome : background}>
          <Route path="/login">
            <LogInController />
          </Route>
          <Route path="/userBreweries">
            <FormController />
          </Route>
          <Route path="/">
            <div className={classes.background}>
              <Home />
            </div>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    sidebarVisible: state.sidebarVisible
  }
};

MainScreenController = connect(mapStateToProps)(MainScreenController);

export default MainScreenController;
