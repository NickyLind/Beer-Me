import React from 'react';
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";


function LogIn(props) {
  const goHome = () => {
    props.history.push('/')
  }

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      props.onLoggingIn();
      console.log("successfully signed up!");
    }).catch(function (error) {
      console.log(error.message);
    });
  };

  const doSignIn = event => {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      props.onLoggingIn();
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  };

  // const doSignOut = () => {
  //   firebase.auth().signOut().then(function () {
  //     console.log("Successfully signed out!");
  //   }).catch(function () {
  //     console.log(error.message);
  //   });
  // };

  return (
    <React.Fragment>
      <hr />
      <h3><em>LogIn Component</em></h3>
      <hr />
      <form onSubmit={doSignIn}>
        <input
          type="text"
          name="signInEmail"
          placeholder="email"
        />
        <input
          type="password"
          name="signInPassword"
          placeholder="Password"
        />
        <button type="submit">Log In</button><br />
      </form>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>OR</p>
      <button onClick={goHome.bind(props)}>Home</button>
      <hr />
    </React.Fragment>
  );
};

export default withRouter(LogIn);