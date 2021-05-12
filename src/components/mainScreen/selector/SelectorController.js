import React from 'react';
import Detail from "./Detail";
import Selector from "./Selector";
import { connect } from "react-redux";
import * as a from "../../../actions/index.js";

function SelectorController(props) {

  // * logic for displaying between Selector and Detail Components will go here
  const handleClick = () => {
    const { dispatch } = props;
    const action = a.toggleBeerMe();
    dispatch(action);
  }

  if (props.beerMeDetails) {
    return (
      <React.Fragment>
        <Detail toggleSelector={handleClick} />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Selector toggleSelector={handleClick} />
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