import React from 'react';

function LogInConfirm(props) {

  return (
    <React.Fragment>
      <hr />
      <h3><em>Login Confirmed Component</em></h3>
      <hr />
      <p>Log In Confirmed!</p>
      <p>OR</p>
      <p>There was an error with your login!</p>
      <hr />
      <button onClick={props.onReturnHome}>Home</button>
    </React.Fragment>
  );
};

export default LogInConfirm;