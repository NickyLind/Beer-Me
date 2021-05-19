import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import * as a from "../actions/index.js";
import { connect } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { BsLayoutSidebarInset } from "react-icons/bs"

function SidebarController(props) {

  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleSidebar();
    dispatch(action);
  }


  const handleLogOut = () => {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
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
        <div onClick={handleClick}><BsLayoutSidebarInset />
        </div>
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
        <div onClick={handleClick}><BsLayoutSidebarInset /></div>
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
// ! think this is what the linter doesn't like might have to change the name here

export default SidebarController