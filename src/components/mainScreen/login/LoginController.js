import React from 'react';
import LogIn from "./LogIn";
import LogInConfirm from "./LogInConfirm";

function LogInController() {

  // * logic for displaying between LogIn and LogInConfirm components will go here

  return (
    <React.Fragment>
      <LogIn />
      <LogInConfirm />
    </React.Fragment>
  );
};

export default LogInController;