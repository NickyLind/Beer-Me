import React from 'react';
import { connect } from "react-redux";


function Sidebar(props) {
  const handleClickLogin = () => {
    if (!props.loginVisible) {
      props.onDisplayLoginOnMain();
      props.onToggleSidebar();
    } else if (props.loginVisible === true) {
      props.onLogOut();
    }
  };

  const handleClickYourBreweries = () => {
    props.onDisplayFormsOnMain();
    props.onToggleSidebar();
  };




  return (
    <React.Fragment>
      <hr />
      <h3><em>SideBar</em></h3>
      <hr />
      <button onClick={handleClickLogin} >{props.loginText}</button><br />
      <button onClick={handleClickYourBreweries}>{props.buttonText}</button><br />
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
// onClick={props.onToggleSidebar}