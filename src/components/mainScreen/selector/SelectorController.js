import React, { useState } from 'react';
import Detail from "./Detail";
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
    const action = a.toggleBeerMe();
    dispatch(action);
  }


  useFirestoreConnect([
    { collection: "beers" },
    { collection: "breweries" }
  ])
  var beers = useSelector(state => state.firestore.ordered.beers)
  var breweries = useSelector(state => state.firestore.ordered.breweries)

  const handleGrabbingValuesForSearch = async (selectedBeer, selectedBrewery) => {
    var beerArray = []
    await firebase.firestore().collection("beers").where("style", "==", selectedBeer)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          beerArray.push
            (doc.id)
        });
        console.log(beerArray)
        return beerArray
      })
    var shuffleArray = []
    for (let i = 0; i < beerArray.length; i++) {
      shuffleArray.push(i)
    }
    var shuffled = shuffleArray[Math.floor(Math.random() * shuffleArray.length)]
    var result = beers.filter(beer => beer.id == beerArray[shuffled])
    grabResult(result)

  }

  const grabResult = (result) => {
    console.log(result[0])
    return (result[0])
  };


  if ((props.beerMeDetails) && (isLoaded(beers))) {

    return (
      <React.Fragment>
        <Detail
          toggleSelector={handleClick}
          randomBeer={grabResult}
        />
      </React.Fragment>
    );
  } else if ((!props.beerMeDetails) && (isLoaded(beers))) {

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
      <h3>Loading...</h3>
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

    // const handleGrabbingValuesForSearch = (selectedBeer, selectedBrewery) => {
    //   const beerStyle = beers.where(`${beers.style}`, "==", `${selectedBeer}`)
    //   console.log(beerStyle)
    //   const breweryName = breweries.where(`${breweries.style}`, "==", `${selectedBrewery}`)
    //   console.log(breweryName)
    // }
    // function shuffle(array) {
    //   return array[Math.floor(Math.random() * array.length)];
    // }
    // var unshuffled = Object.keys({ ...beers })
    // let beerMeIndex = shuffle(unshuffled)


//TODO The current randomizer probably isn't the most efficient, these are a couple that could potentially be faster and more random

  // function shuffle(array) {
  //   var random = array.map(Math.random);
  //   array.sort(function (a, b) {
  //     return random[a] - random[b]
  //   });
  // }

  // let shuffled = beers.map((a) => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map((a) => a.value)