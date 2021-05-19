import React, { useReducer, useState } from 'react';
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

  const [updateNow, setUpdateNow] = useState(true)

  const updateFunc = () => {
    setUpdateNow(!updateNow)
  }

  if (isLoaded(beers)) {
    if ((props.beerMeDetails) && (props.selectedBeerQuery != null)) {
      return (
        <React.Fragment>
          <hr />
          <h3>Home Component</h3>
          <p>filter results</p>
          <hr />
          <Detail
            toggleSelector={handleTryAgain}
            randomBeer={props.selectedBeerQuery}
          // randomBeer={beers[beerMeIndex]}
          />
          <hr />
        </React.Fragment>
      )
    } else if ((props.beerMeDetails) && (props.selectedBeerQuery == null)) {
      return (
        <React.Fragment>
          <hr />
          <h3>Home Component</h3>
          <hr />
          <p>filter results</p>
          <Detail
            toggleSelector={handleTryAgain}
            // randomBeer={props.selectedBeerQuery}
            randomBeer={beers[beerMeIndex]}
          />
          <hr />
        </React.Fragment>
      )
    } else
      if (!props.filterVisible) {
        return (
          <React.Fragment>
            <hr />
            <h3>Home Component</h3>
            <hr />
            <p onClick={handleClick}>filter results</p>
            <button onClick={BEERME}>Beer Me!</button>
            <hr />
          </React.Fragment>
        )
      } else if (props.filterVisible) {
        return (
          <React.Fragment>
            <hr />
            <h3>Home Component</h3>
            <SelectorController
              handleResetState={updateFunc}
            />
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
    filterVisible: state.filterVisible,
    selectedBeerQuery: state.selectedBeerQuery
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;