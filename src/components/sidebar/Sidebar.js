import React from 'react';
import * as a from "../../actions";

function Sidebar(props) {
  const handleClickLogin = () => {
    if (!props.loginVisible) {
      props.onDisplayLoginOnMain();
      props.onToggleSidebar();
    } else {
      props.onLogOut();
      props.onDisplayLoginOnMain();
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
      <button onClick={props.onLogOut}>Logout</button><br />
      <button onClick={handleClickYourBreweries}>Your Breweries</button><br />
      <hr />
    </React.Fragment>
  );
};

export default Sidebar
// onClick={props.onToggleSidebar}