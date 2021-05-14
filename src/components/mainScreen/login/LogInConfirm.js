import React from 'react';
import { withRouter } from "react-router-dom";

function LogInConfirm(props) {
  const goHome = () => {
    props.history.push('/')
  }

  return (
    <React.Fragment>
      <hr />
      <h3><em>Login Confirmed Component</em></h3>
      <hr />
      <p>Log In Confirmed!</p>
      <p>OR</p>
      <p>There was an error with your login!</p>
      <p>OR</p>
      <p>Logged out!</p>
      <hr />
      <button onClick={goHome.bind(props)}>Home</button>
    </React.Fragment>
  );
};

export default withRouter(LogInConfirm);