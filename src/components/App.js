import React from 'react';
import MainScreenController from "./../components/mainScreen/MainScreenController";
// import { useSelector } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";


function App() {

  const container = {
    width: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgb(125, 125, 125)",
    borderRadius: "12px",
    boxShadow: "0 10px 8px rgba(0, 0, 0, 0.25)"
  }

  return (
    <div style={container}>
      <React.Fragment>
        <MainScreenController />
      </React.Fragment>
    </div>
  )
}

export default App;
