import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";

function Brewery(props) {

  return (
    <React.Fragment>
      <h4 onClick={() => props.whenBreweryClicked(props.id)}>{props.name}</h4>
      <button>Edit brewery</button>
      <button>Remove brewery</button>
      <button onClick={props.onAddNewBeer}>Add new beer</button>
      {Object.values(props.beerList).map((beer) =>
        <Beer
          name={beer.name}
          style={beer.style}
          abv={beer.abv}
          description={beer.description}
          id={beer.id}
          key={beer.id}
          breweryId={props.id}
          onHandleBeerEditClick={props.onHandleBeerEditClick}
          whenBeerClicked={props.whenBeerClicked}
          onClickingDeleteBeer={props.onClickingDeleteBeer}
        />
      )}
    </React.Fragment>
  )
};

export default Brewery;