import React from "react";
import PropTypes from "prop-types";

function Brewery(props) {

  return (
    <React.Fragment>
      <h4 onClick={() => props.whenBreweryClicked(props.id)}>{props.name}</h4>
    </React.Fragment>
  )
};

export default Brewery;