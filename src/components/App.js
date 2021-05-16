import React from 'react';
import MainScreenController from "./../components/mainScreen/MainScreenController";
// import { useSelector } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";


function App() {
  // useFirestoreConnect([
  //   { collection: "beers" }
  // ])
  // var beers = useSelector(state => state.firestore.ordered.beers)
  // console.log(beers);
  // // function shuffle(array) {
  // //   var random = array.map(Math.random);
  // //   array.sort(function (a, b) {
  // //     return random[a] - random[b]
  // //   });
  // // }
  // // console.log(shuffle(beers))

  // // let shuffled = beers.map((a) => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value)
  // // console.log(shuffled)


  return (
    <React.Fragment>
      <MainScreenController />
    </React.Fragment>
  )
}

export default App;
