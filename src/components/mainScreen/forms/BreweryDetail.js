import React from "react";
import PropTypes from "prop-types";

function BreweryDetail(props) {
  const { brewery } = props;

  return (
    <React.Fragment>
      <h1>{brewery.name} Detail</h1>
      <h3>{brewery.location}</h3>
      <p>{brewery.description}</p>
    </React.Fragment>
  )
};

export default BreweryDetail;