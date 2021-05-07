import React from 'react';
import SelectorController from "./selector/SelectorController";
import FormController from "./forms/FormController";
import LogInController from "./login/LogInController";
import { connect } from "react-redux";
import * as a from "./../../actions";

function MainScreenController(props) {

  // * Logic for displaying between SelectorController, FormController, and LogInController components will go here

  const handleDisplayLogin = () => {
    const { dispatch } = props;
    const action = a.displayLoginOnMain();
    dispatch(action);
    const action2 = a.displaySelectorOnMain();
    dispatch(action2)
  }

  if (props.displayLoginOnMain) {
    return (
      <LogInController onReturnHome={handleDisplayLogin} />
    )
  } else if (props.displayFormsOnMain) {
    return (
      <FormController />
    )
  } else {
    return (
      <SelectorController />
    )
  }
};

const mapStateToProps = state => {
  return {
    displaySelectorOnMain: state.displaySelectorOnMain,
    displayFormsOnMain: state.displayFormsOnMain,
    displayLoginOnMain: state.displayLoginOnMain
  }
};

MainScreenController = connect(mapStateToProps)(MainScreenController);

export default MainScreenController;