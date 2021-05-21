import React from 'react';
import Detail from "./Detail";
import SelectorController from "./SelectorController";
import * as a from "../../../actions/index.js";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux"
import classes from "./Home.module.css"


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
    shuffleFunction();
    const { dispatch } = props;
    const action = a.toggleBeerSelector();
    dispatch(action);
  }

  const shuffleFunction = () => {
    if ((props.selectedBeerStyle === null) || (props.selectedBeerStyle === "N/A")) {
      let beerMeIndex = shuffle(Object.keys({ ...beers }))
      const { dispatch } = props;
      const action = a.selectedQuery(beers[beerMeIndex]);
      dispatch(action);
    } else {
      var shuffleArray = []
      for (let i = 0; i < props.selectedBeerStyle.length; i++) {
        shuffleArray.push(i)
      }
      console.log(shuffleArray);
      var shuffled = shuffleArray[Math.floor(Math.random() * shuffleArray.length)]
      var result = beers.filter(beer => beer.id === props.selectedBeerStyle[shuffled])
      console.log(result)
      const { dispatch } = props;
      const action = a.selectedQuery(result[0]);
      dispatch(action);
    }
    //TODO also set this new function so the same beer wont be generated 2x in a row in this function later (maybe pop up a dialogue that says there's only the one beer if the array.length is 1)
  }

  if (isLoaded(beers)) {
    if ((props.beerMeDetails) && (props.selectedBeerQuery != null)) {
      return (
        <React.Fragment >
          <div >
            <Detail
              toggleSelector={handleTryAgain}
              beerMeButton={shuffleFunction}
              randomBeer={props.selectedBeerQuery}
            />
          </div>
        </React.Fragment>
      )
    } else if ((props.beerMeDetails) && (props.selectedBeerQuery == null)) {
      return (
        <React.Fragment>
          <Detail
            toggleSelector={handleTryAgain}
            randomBeer={beers[beerMeIndex]}
          />
        </React.Fragment>
      )
    } else
      if (!props.filterVisible) {
        return (
          <React.Fragment>
            <div className={classes.background}>
              <button className={classes.beerMeButton} onClick={BEERME}>Beer Me!</button>
              <div className={classes.filterResults}>
                <p onClick={handleClick}>filter results</p>
              </div>
            </div>
          </React.Fragment>
        )
      } else if (props.filterVisible) {
        return (
          <React.Fragment>
            <SelectorController
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
    selectedBeerQuery: state.selectedBeerQuery,
    // * name of the single beer that is picked
    selectedBeerStyle: state.selectedBeerStyle
    // * name of the array of beers of a specific style
  }
}

Home = connect(mapStateToProps)(Home);

export default Home;