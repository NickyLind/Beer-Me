import React from 'react';
import { withRouter } from "react-router-dom";
import classes from "./LogInConfirm.module.css"

function LogInConfirm(props) {
  const goHome = () => {
    props.history.push('/')
  }

  return (
    <React.Fragment>
      <p>Log In Confirmed!</p>
      <button className={classes.button} onClick={goHome.bind(props)}>Home</button>
    </React.Fragment>
  );
};

export default withRouter(LogInConfirm);