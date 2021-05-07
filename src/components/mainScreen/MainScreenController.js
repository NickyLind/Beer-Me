import React from 'react';
import SelectorController from "./selector/SelectorController";
import FormController from "./forms/FormController";
import LogInController from "./login/LogInController";
import { connect } from "react-redux";
import * as a from "./../../actions";

function MainScreenController(props) {

  // * Logic for displaying between SelectorController, FormController, and LogInController components will go here
  if (props.displaySelectorOnMain) {
    return (
      <LogInController />
    )
    // } else if () {
    //   return (
    //     <FormController />
    //   )
  } else {
    return (
      <SelectorController />
    )
  }
};

const mapStateToProps = state => {
  return {
    displaySelectorOnMain: state.displaySelectorOnMain,
  }
};

MainScreenController = connect(mapStateToProps)(MainScreenController);

export default MainScreenController;