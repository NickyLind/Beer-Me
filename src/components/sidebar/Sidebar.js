import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


function Sidebar(props) {
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

  return (
    <React.Fragment>
      <hr />
      <h3><em>SideBar</em></h3>
      <hr />
      <Link to="/" onClick={handleToggleSideBar}>Home</Link><br />
      <Link to="/login" onClick={handleClickLogin} >{props.loginText}</Link><br />
      <Link to="/userBreweries" onClick={handleToggleSideBar}>Your Breweries</Link><br />
      <hr />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    loginVisible: state.loginVisible,
  }
}

Sidebar = connect(mapStateToProps)(Sidebar)

export default Sidebar