import React from 'react';
import MainScreenController from "./../components/mainScreen/MainScreenController";
// import { useSelector } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";


function App() {

  const container = {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0, 132, 255)",
    borderRadius: "12px",
    boxShadow: "0 10px 8px rgba(0, 0, 0, 0.25)"
  }

  return (
    <React.Fragment>
      <div style={container}>
        <MainScreenController />
      </div>
    </React.Fragment>
  )
}

export default App;
