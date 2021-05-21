import React from 'react';
import Selector from "./Selector";
import { connect } from "react-redux";
import * as a from "../../../actions/index.js";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import firebase from "../../../firebase";


function SelectorController(props) {

  // * logic for displaying between Selector and Detail Components will go here
  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleFilter();
    dispatch(action);
  }

  useFirestoreConnect([
    { collection: "beers" },
    { collection: "breweries" }
  ])
  var beers = useSelector(state => state.firestore.ordered.beers)
  // var breweries = useSelector(state => state.firestore.ordered.breweries)

  const handleGrabbingValuesForSearch = (selectedStyle, selectedBrewery) => {
    if (selectedStyle === "N/A") {
      const { dispatch } = props;
      const action = a.selectedQuery(beers);
      dispatch(action);
      handleClick()
    } else {
      firebase.firestore().collection("beers").where("style", "==", selectedStyle)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.id);
          console.log(data)
          const { dispatch } = props;
          const action = a.selectedBeerStyle(data);
          dispatch(action);
        }).then(handleClick)
    }
  }
  //* i'm thinking we set data(which is an array of the beers that match the beer style) to a state slice. ✅
  //* we then put everything below into a new function where we can shuffle it and gather the randomized beer from that array.
  function shuffle(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  //TODO also set this new function so the same beer wont be generated 2x in a row in this function later (maybe pop up a dialogue that says there's only the one beer if the array.length is 1)
  if ((!props.beerMeDetails) && (isLoaded(beers))) {

    return (
      <React.Fragment>
        <Selector
          toggleSelector={handleClick}
          onAddingQueryForRandomizer={handleGrabbingValuesForSearch}
        />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        loading...
      </React.Fragment>
    )
  }

};

const mapStateToProps = state => {
  return {
    beerMeDetails: state.beerMeDetails,
    selectedBeerQuery: state.selectedBeerQuery,
    selectedBeerStyle: state.selectedBeerStyle
  }
};

SelectorController = connect(mapStateToProps)(SelectorController);

export default SelectorController;



//TODO The current randomizer probably isn't the most efficient, these are a couple that could potentially be faster and more random

  // function shuffle(array) {
  //   var random = array.map(Math.random);
  //   array.sort(function (a, b) {
  //     return random[a] - random[b]
  //   });
  // }

  // let shuffled = beers.map((a) => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value)