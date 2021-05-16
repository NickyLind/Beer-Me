import React from 'react';
import Detail from "./Detail";
import Selector from "./Selector";
import { connect } from "react-redux";
import * as a from "../../../actions/index.js";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function SelectorController(props) {

  // * logic for displaying between Selector and Detail Components will go here
  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleBeerMe();
    dispatch(action);
  }

  useFirestoreConnect([
    { collection: "beers" }
  ])
  var beers = useSelector(state => state.firestore.ordered.beers)
  // function shuffle(array) {
  //   var random = array.map(Math.random);
  //   array.sort(function (a, b) {
  //     return random[a] - random[b]
  //   });
  // }

  // let shuffled = beers.map((a) => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value)

  if ((props.beerMeDetails) && (isLoaded(beers))) {
    function shuffle(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    var unshuffled = Object.keys({ ...beers })
    let beerMeIndex = shuffle(unshuffled)
    console.log(beers[beerMeIndex])
    return (
      <React.Fragment>
        <Detail
          toggleSelector={handleClick}
          randomBeer={beers[beerMeIndex]}
        />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Selector
          toggleSelector={handleClick}
        />
      </React.Fragment>
    )
  }

};

const mapStateToProps = state => {
  return {
    beerMeDetails: state.beerMeDetails,
  }
};

SelectorController = connect(mapStateToProps)(SelectorController);

export default SelectorController;