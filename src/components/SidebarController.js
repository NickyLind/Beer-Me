import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import MainScreenController from "./mainScreen/MainScreenController";
import * as a from "../actions";
import { connect } from "react-redux";

function SidebarController(props) {

  // * logic for displaying between Sidebar and MainScreenController components will go here

  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleSidebar();
    dispatch(action);
  }

  const handleDisplayLogin = () => {
    const { dispatch } = props;
    const action = a.displayLoginOnMain();
    dispatch(action);
  }

  const handleLogOut = () => {
    const { dispatch } = props;
    const action = a.toggleLogin();
    dispatch(action);
    const action2 = a.toggleSidebar();
    dispatch(action2)
  };

  const handleDisplayForms = () => {
    const { dispatch } = props;
    const action = a.displayFormsOnMain();
    dispatch(action);
  };

  let buttonText = ""
  if (props.displayFormsOnMain) {
    buttonText = "Home"
  } else {
    buttonText = "Your Breweries"
  }

  if (props.sidebarVisible) {
    return (
      <React.Fragment>
        <button onClick={handleClick}>SidebarButton</button>
        <Sidebar
          onDisplayLoginOnMain={handleDisplayLogin}
          onDisplayFormsOnMain={handleDisplayForms}
          onToggleSidebar={handleClick}
          onLogOut={handleLogOut}
          buttonText={buttonText}
        />
        <MainScreenController />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={handleClick}>SidebarButton</button>
        <MainScreenController />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    sidebarVisible: state.sidebarVisible,
    displaySelectorOnMain: state.displaySelectorOnMain,
    displayLoginOnMain: state.displayLoginOnMain,
    displayFormsOnMain: state.displayFormsOnMain,
    loginVisible: state.loginVisible,
  }
};


SidebarController = connect(mapStateToProps)(SidebarController);

export default SidebarController