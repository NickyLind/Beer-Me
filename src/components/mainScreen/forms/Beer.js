import React from "react";

function Beer(props) {


  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.style}</p>
      <p>{props.abv}</p>
      <p>{props.description}</p>
      <p>{props.id}</p>
      <p>{props.breweryId}</p>
    </React.Fragment>
  );
};

export default Beer