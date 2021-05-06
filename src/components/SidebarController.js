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

  if (props.sidebarVisible) {
    return (
      <React.Fragment>
        <button onClick={handleClick}>SidebarButton</button>
        <Sidebar />
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
  }
};

SidebarController = connect(mapStateToProps)(SidebarController);

export default SidebarController