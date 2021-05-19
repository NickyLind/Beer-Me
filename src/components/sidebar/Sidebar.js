import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from "react-redux-firebase";



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
        <br />
        <Link to="/" onClick={handleToggleSideBar}>Home</Link><br />
        <Link to="/login" onClick={handleClickLogin} >Log In</Link><br />
        <hr />
      </React.Fragment>
    );
  };

  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <React.Fragment>
        <br />
        <Link to="/" onClick={handleToggleSideBar}>Home</Link><br />
        <Link to="/login" onClick={handleClickLogin} >Log Out</Link><br />
        <Link to="/userBreweries" onClick={handleToggleSideBar}>Your Breweries</Link><br />
        <hr />
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    loginVisible: state.loginVisible,
  }
}

Sidebar = connect(mapStateToProps)(Sidebar)

export default withFirestore(Sidebar)