import React from 'react';
import LogIn from "./LogIn";
import LogInConfirm from "./LogInConfirm";
import { connect } from "react-redux";
import * as a from "./../../../actions";

function LogInController(props) {

  // * logic for displaying between LogIn and LogInConfirm components will go here
  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleLogin();
    dispatch(action);
  }

  if (!props.loginVisible) {
    return (
      <React.Fragment>
        <LogIn onLoggingIn={handleClick} />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <LogInConfirm />
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    loginVisible: state.loginVisible,
  }
};

LogInController = connect(mapStateToProps)(LogInController)

export default LogInController;