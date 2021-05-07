import React from 'react';
import * as a from "../../actions";

function Sidebar(props) {
  const handleClickLogin = () => {
    props.onDisplayLoginOnMain()
    props.onToggleSidebar()
  }



  return (
    <React.Fragment>
      <hr />
      <h3><em>SideBar</em></h3>
      <hr />
      <button onClick={handleClickLogin} >Login/Signup</button><br />
      <button onClick={props.onLogOut}>Logout</button><br />
      <button>Your Breweries</button><br />
      <hr />
    </React.Fragment>
  );
};

export default Sidebar
// onClick={props.onToggleSidebar}