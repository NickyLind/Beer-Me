import React from 'react';
import { withRouter } from "react-router-dom";

function LogIn(props) {
  const goHome = () => {
    props.history.push('/')
  }

  return (
    <React.Fragment>
      <hr />
      <h3><em>LogIn Component</em></h3>
      <hr />
      <button onClick={props.onLoggingIn}>Log In</button><br />
      <p>OR</p>
      <button onClick={props.onLoggingIn}>Sign Up</button>
      <p>OR</p>
      <button onClick={goHome.bind(props)}>Home</button>
      <hr />
    </React.Fragment>
  );
};

export default withRouter(LogIn);