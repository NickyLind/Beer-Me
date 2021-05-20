import React from 'react';
import classes from "./LogIn.module.css"
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

  return (
    <React.Fragment>
      <form onSubmit={doSignIn}>
        <input
          className={classes.input}
          type="text"
          name="signInEmail"
          placeholder="email"
        />
        <input
          className={classes.input}
          type="password"
          name="signInPassword"
          placeholder="Password"
        />
        <button type="submit" className={classes.button}>Log In</button><br />
      </form>
      <p>OR</p>
      <form onSubmit={doSignUp}>
        <input
          className={classes.input}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit" className={classes.button}>Sign Up</button>
      </form>
      <button className={classes.buttonHome} onClick={goHome.bind(props)}>Home</button>
    </React.Fragment>
  );
};

export default withRouter(LogIn);