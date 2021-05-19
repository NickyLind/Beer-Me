import React from 'react';
import Detail from "./Detail";
import SelectorController from "./SelectorController";
import * as a from "../../../actions/index.js";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux"




function Home(props) {
  useFirestoreConnect([
    { collection: "beers" },
    { collection: "breweries" }
  ])
  var beers = useSelector(state => state.firestore.ordered.beers)

  function shuffle(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  var unshuffled = Object.keys({ ...beers })
  let beerMeIndex = shuffle(unshuffled)


  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleFilter();
    dispatch(action);
    const action2 = a.unselectQuery();
    dispatch(action2);
  }

  const handleTryAgain = () => {
    const { dispatch } = props;
    const action = a.toggleBeerSelector();
    dispatch(action);
    const action2 = a.unselectQuery();
    dispatch(action2);
  }

  const BEERME = () => {
    const { dispatch } = props;
    const action = a.toggleBeerSelector();
    dispatch(action);
  }
  if ((props.beerMeDetails) && (props.selectedBeerQuery == null)) {
    return (
      <React.Fragment>
        <hr />
        <h3>Home Component</h3>
        <hr />
        <Detail
          toggleSelector={handleTryAgain}
          // randomBeer={props.selectedBeerQuery}
          randomBeer={beers[beerMeIndex]}
        />
        <hr />
      </React.Fragment>
    )
  } else if ((props.beerMeDetails) && (props.selectedBeerQuery != null)) {
    return (
      <React.Fragment>
        <hr />
        <h3>Home Component</h3>
        <hr />
        <Detail
          toggleSelector={handleTryAgain}
          randomBeer={props.selectedBeerQuery}
        // randomBeer={beers[beerMeIndex]}
        />
        <hr />
      </React.Fragment>
    )
  } else if (isLoaded(beers)) {
    if (!props.filterVisible) {
      return (
        <React.Fragment>
          <hr />
          <h3>Home Component</h3>
          <hr />
          <p onClick={handleClick}>filter results</p>
          <button onClick={BEERME}>Beer Me!</button>
          {/* <Detail
          toggleSelector={}
        // randomBeer={props.selectedBeerQuery}
        /> */}
          <hr />
        </React.Fragment>
      )
    } else if (props.filterVisible) {
      return (
        <React.Fragment>
          <hr />
          <h3>Home Component</h3>
          <SelectorController />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h3>an error occured</h3>
        </React.Fragment>
      )
    }
  } else {
    return (
      <React.Fragment>
        <h3>loading...</h3>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    beerMeDetails: state.beerMeDetails,
    filterVisible: state.filterVisible
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;