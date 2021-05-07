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

  const handleDisplaySelector = () => {
    const { dispatch } = props;
    const action = a.displaySelectorOnMain();
    dispatch(action);
  }

  const handleLogOut = () => {
    const { dispatch } = props;
    const action = a.toggleLogin();
    dispatch(action);
    const action2 = a.toggleSidebar();
    dispatch(action2)
  };

  if (props.sidebarVisible) {
    return (
      <React.Fragment>
        <button onClick={handleClick}>SidebarButton</button>
        <Sidebar
          onDisplaySelectorOnMain={handleDisplaySelector} onToggleSidebar={handleClick}
          onLogOut={handleLogOut}
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