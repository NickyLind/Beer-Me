import React from 'react';
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

  let filterArray = []
  let idArray = []
  const handleGrabbingValuesForSearch = async (selectedBeer, selectedBrewery) => {
    var beerArray = []
    const beerStyle = await firebase.firestore().collection("beers").where("style", "==", selectedBeer).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          beerArray.push
            (doc.id);
        });
        console.log("beer array: " + beerArray)
        beerArray.forEach(element => {
          filterArray.push(element)
        })
        console.log("filter array " + filterArray)
        var unshuffled = Object.values({ ...beers })
        unshuffled.forEach(element => {
          idArray.push(element.id)
        });
        // .filter(beer => filterArray.includes(beer.id))
        console.log("idArray " + idArray)
        var query = idArray.filter(index => beerArray.includes(index))
        console.log("query " + query)
      })
    return (beerStyle)
  }
  function shuffle(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  //* since this is going to be what's passed in as an argument to the shuffle function it will need to be filtered to only include the results of the selectedBeer && selectedBrewery UNLESS neither are selected
  var unshuffled = Object.keys({ ...beers })

  let beerMeIndex = shuffle(unshuffled)
  // console.log(beers[beerMeIndex])

  if ((props.beerMeDetails) && (isLoaded(beers))) {

    // function shuffle(array) {
    //   return array[Math.floor(Math.random() * array.length)];
    // }
    // var unshuffled = Object.keys({ ...beers })
    // let beerMeIndex = shuffle(unshuffled)
    // console.log(beers[beerMeIndex])
    return (
      <React.Fragment>
        <Detail
          toggleSelector={handleClick}
          randomBeer={beers[beerMeIndex]}
        />
      </React.Fragment>
    );
  } else if ((!props.beerMeDetails) && (isLoaded(beers))) {
    // function shuffle(array) {
    //   return array[Math.floor(Math.random() * array.length)];
    // }
    // var unshuffled = Object.keys({ ...beers })
    // let beerMeIndex = shuffle(unshuffled)
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