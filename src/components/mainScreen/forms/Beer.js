import React from "react";

function Beer(props) {

  // write a function that combines onHandleBeerEditClick and selected beer
  const editBeerButton = () => {
    props.whenBeerClicked(props.id);
    props.onHandleBeerEditClick();
  }

  const deleteBeerButton = () => {
    props.onClickingDeleteBeer(props.id);
  }

  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.style}</p>
      <p>{props.abv}</p>
      <p>{props.description}</p>
      <p>{props.breweryId}</p>
      <button onClick={editBeerButton}>Edit Beer</button>
      <button onClick={deleteBeerButton}>Remove Beer</button>
    </React.Fragment>
  );
};

export default Beer