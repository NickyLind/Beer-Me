import React from 'react';
import * as a from "../../actions";

function Sidebar(props) {
  const handleClickLogin = () => {
    if (!props.loginVisible) {
      props.onDisplayLoginOnMain();
      props.onToggleSidebar();
    } else if (props.loginVisible == true) {
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
      <button onClick={handleClickYourBreweries}>Your Breweries</button><br />
      <hr />
    </React.Fragment>
  );
};

export default Sidebar
// onClick={props.onToggleSidebar}