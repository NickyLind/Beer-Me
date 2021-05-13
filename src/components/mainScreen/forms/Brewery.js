import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";

function Brewery(props) {

  const editBreweryButton = () => {
    props.whenBreweryClicked(props.id);
    props.onHandleBreweryEditClick();
  };

  const deleteBreweryButton = () => {
    props.onClickingDeleteBrewery(props.id)
  };

  const addNewBeerButton = () => {
    props.onAddNewBeer();
    props.whenBreweryClicked(props.id);
  }

  //* i'm thinking a function here that passes props.id into props.onAddNewBeer and sets it equal to breweryId


  return (
    <React.Fragment>
      <h4 onClick={() => props.whenBreweryClicked(props.id)}>{props.name}</h4>
      <button onClick={editBreweryButton}>Edit brewery</button>
      <button onClick={deleteBreweryButton}>Remove brewery</button>
      <button onClick={addNewBeerButton}>Add new beer</button>
      {/* maybe try to map through beers where breweryId === props.id */}
      {Object.values(props.beerList).filter(beer => beer.breweryId === props.id).map((beer) =>
        <Beer
          name={beer.name}
          style={beer.style}
          abv={beer.abv}
          description={beer.description}
          id={beer.id}
          key={beer.id}
          breweryId={beer.breweryId}
          onHandleBeerEditClick={props.onHandleBeerEditClick}
          whenBeerClicked={props.whenBeerClicked}
          onClickingDeleteBeer={props.onClickingDeleteBeer}
        />
      )};
    </React.Fragment>
  )
};

export default Brewery;