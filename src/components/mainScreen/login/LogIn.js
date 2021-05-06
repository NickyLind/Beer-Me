import React from 'react';

function LogIn(props) {

  return (
    <React.Fragment>
      <hr />
      <h3><em>LogIn Component</em></h3>
      <hr />
      <button onClick={props.onLoggingIn}>Log In</button><br />
      <p>OR</p>
      <button>Sign Up</button>
      <hr />
    </React.Fragment>
  );
};

export default LogIn;