import React from 'react';
import Detail from "./Detail";
import SelectorController from "./SelectorController";
import * as a from "../../../actions/index.js";
import { connect } from "react-redux"

function Home(props) {

  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleBeerSelector();
    dispatch(action);
    const action2 = a.unselectQuery();
    dispatch(action2);
  }

  const BEERME = () => {

  }
  if (props.beerMeDetails) {
    return (
      <React.Fragment>
        <hr />
        <h3>Home Component</h3>
        <p onClick={handleClick}>filter results</p>
        <SelectorController />
        <button>Beer Me!</button>
        {/* <Detail
          toggleSelector={}
        // randomBeer={props.selectedBeerQuery}
        /> */}
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