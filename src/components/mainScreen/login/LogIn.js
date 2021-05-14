import React from 'react';
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";

function LogIn(props) {
  const goHome = () => {
    props.history.push('/')
  }

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("successfully signed up!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <hr />
      <h3><em>LogIn Component</em></h3>
      <hr />
      <button onClick={props.onLoggingIn}>Log In</button><br />
      <p>OR</p>
      <form onSubmit={doSignUp}>
        <input
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit" onClick={props.onLoggingIn}>Sign Up</button>
      </form>
      <p>OR</p>
      <button onClick={goHome.bind(props)}>Home</button>
      <hr />
    </React.Fragment>
  );
};

export default withRouter(LogIn);