import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from "react-redux-firebase";
import { IoBeerOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import classes from "./Sidebar.module.css"


function Sidebar(props) {
  const auth = props.firebase.auth();

  const handleClickLogin = () => {
    if (!props.loginVisible) {
      props.onToggleSidebar();
    } else if (props.loginVisible === true) {
      props.onLogOut();
    }
  };

  const handleToggleSideBar = () => {
    props.onToggleSidebar();
  };

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h3>...Loading</h3>
      </React.Fragment>
    );
  };

  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <div style={{ height: "100%" }}>
          <div className={props.sidebarVisible ? classes.sidebar : classes.sidebarOpen}>
            <br />
            <AiOutlineHome />
            <Link to="/" onClick={handleToggleSideBar}>Home</Link><br />
            <AiOutlineLogin />
            <Link to="/login" onClick={handleClickLogin} >Log In</Link><br />
          </div>
        </div>
      </React.Fragment>
    );
  };

  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <React.Fragment>
        <div style={{ height: "100%" }}>
          <div className={classes.sidebar}>
            <br />
            <AiOutlineHome />
            <Link to="/" onClick={handleToggleSideBar}>Home</Link><br />
            <AiOutlineLogout />
            <Link to="/login" onClick={handleClickLogin} >Log Out</Link><br />
            <IoBeerOutline />
            <Link to="/userBreweries" onClick={handleToggleSideBar}>Your Breweries</Link><br />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    loginVisible: state.loginVisible,
    sidebarVisible: state.sidebarVisible
  }
}

Sidebar = connect(mapStateToProps)(Sidebar)

export default withFirestore(Sidebar)