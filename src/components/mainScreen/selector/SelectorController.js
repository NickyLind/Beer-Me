import React from 'react';
import Detail from "./Detail";
import Selector from "./Selector";
import Home from "./Home";
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
  var breweries = useSelector(state => state.firestore.ordered.breweries)

  const handleGrabbingValuesForSearch = (selectedBeer, selectedBrewery) => {
    console.log(selectedBeer)
    if ((selectedBeer == "N/A") || (selectedBeer == null)) {
      console.log("shuffle all beers")
      function shuffle(array) {
        return array[Math.floor(Math.random() * array.length)];
      }
      var unshuffled = Object.keys({ ...beers })
      let beerMeIndex = shuffle(unshuffled)
      const { dispatch } = props;
      const action = a.selectedQuery(beers[beerMeIndex]);
      dispatch(action);
      handleClick()
    } else {
      firebase.firestore().collection("beers").where("style", "==", selectedBeer)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.id);
          console.log(data)
          var shuffleArray = []
          for (let i = 0; i < data.length; i++) {
            shuffleArray.push(i)
          }
          var shuffled = shuffleArray[Math.floor(Math.random() * shuffleArray.length)]
          var result = beers.filter(beer => beer.id == data[shuffled])
          console.log(result[0].id)
          const { dispatch } = props;
          const action = a.selectedQuery(result[0]);
          dispatch(action);
        }).then(handleClick)
    }
  }

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

      </React.Fragment>
    )
  }

};

const mapStateToProps = state => {
  return {
    beerMeDetails: state.beerMeDetails,
    selectedBeerQuery: state.selectedBeerQuery
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