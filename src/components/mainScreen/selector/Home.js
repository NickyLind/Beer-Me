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
  const { dispatch } = props;
  const action = a.selectedQuery(beers[beerMeIndex]);
  dispatch(action);

  const handleClick = () => {
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
  if (props.beerMeDetails) {
    return (
      <React.Fragment>
        <hr />
        <h3>Home Component</h3>
        <p onClick={handleClick}>filter results</p>
        <SelectorController />
        <button onClick={BEERME}>Beer Me!</button>
        {/* <Detail
          toggleSelector={}
        // randomBeer={props.selectedBeerQuery}
        /> */}
        <hr />
        <hr />
      </React.Fragment>
    )
  } else if ((!props.beerMeDetails) && (props.selectedBeerQuery != null)) {
    return (
      <React.Fragment>
        <hr />
        <h3>Home Component</h3>
        <p>filter results</p>
        <Detail
          randomBeer={props.selectedBeerQuery}
        />
        <button onClick={BEERME}>Beer Me!</button>
        <hr />
        <hr />
      </React.Fragment>
    )
  } else {
    return (


      <React.Fragment>
        <hr />
        <h3>Home Component</h3>
        <p>filter results</p>
        <SelectorController />
        <button>Beer Me!</button>
        <hr />
        <hr />
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    beerMeDetails: state.beerMeDetails,
    selectedBeerQuery: state.selectedBeerQuery
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;