import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import * as a from "../actions/index.js";
import { connect } from "react-redux";

function SidebarController(props) {

  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleSidebar();
    dispatch(action);
  }

  const handleLogOut = () => {
    const { dispatch } = props;
    const action = a.toggleLogin();
    dispatch(action);
    const action2 = a.toggleSidebar();
    dispatch(action2)
  };

  let loginText = "";
  if (props.loginVisible) {
    loginText = "Log Out"
  } else {
    loginText = "Log In"
  }

  if (props.sidebarVisible) {
    return (
      <React.Fragment>
        <button onClick={handleClick}>SidebarButton</button>
        <Sidebar
          onToggleSidebar={handleClick}
          onLogOut={handleLogOut}
          loginText={loginText}
        />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={handleClick}>SidebarButton</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginVisible: state.loginVisible,
    sidebarVisible: state.sidebarVisible
  }
};


SidebarController = connect(mapStateToProps)(SidebarController);

export default SidebarController