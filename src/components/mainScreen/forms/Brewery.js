import React from "react";
import PropTypes from "prop-types";

function Brewery(props) {

  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.location}</p>
      <p>{props.description}</p>
    </React.Fragment>
  )
};

export default Brewery;