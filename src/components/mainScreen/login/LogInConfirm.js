import React from 'react';
import { withRouter } from "react-router-dom";

function LogInConfirm(props) {
  const goHome = () => {
    props.history.push('/')
  }

  return (
    <React.Fragment>
      <p>Log In Confirmed!</p>
      <button onClick={goHome.bind(props)}>Home</button>
    </React.Fragment>
  );
};

export default withRouter(LogInConfirm);