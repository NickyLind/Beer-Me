import React from "react";
import PropTypes from "prop-types";
import Beer from "./Beer";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function Brewery(props) {

  useFirestoreConnect([
    { collection: "beers" }
  ]);

  const beers = useSelector(state => state.firestore.ordered.beers);

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

  if (isLoaded(beers)) {

    return (
      <React.Fragment>
        <h4 onClick={() => props.whenBreweryClicked(props.id)}>{props.name}</h4>
        <button onClick={editBreweryButton}>Edit brewery</button>
        <button onClick={deleteBreweryButton}>Remove brewery</button>
        <button onClick={addNewBeerButton}>Add new beer</button>

        {beers.filter(beer => beer.breweryId === props.name).map((beer) => {
          return (
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
          )
        })}
        <hr />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
};

export default Brewery;