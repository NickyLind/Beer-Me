import React from 'react';
import Brewery from "./Brewery";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";

function BreweryList(props) {

  const scrollBox = {
    height: "350px",
    width: "400px",
    border: "1px solid #ccc",
    font: "16px/26px Georgia, Garamond, Serif",
    overflow: "auto"
  }

  useFirestoreConnect([
    { collection: "breweries" }
  ]);

  const breweries = useSelector(state => state.firestore.ordered.breweries);

  if (isLoaded(breweries)) {
    return (
      <React.Fragment>
        <hr />
        <h3><em>Brewery List Component</em></h3>
        <hr />
        <div style={scrollBox}>
          {breweries.map((brewery) => {
            return (
              <Brewery
                whenBreweryClicked={props.onBrewerySelection}
                whenBeerClicked={props.onBeerSelection}
                name={brewery.name}
                location={brewery.location}
                description={brewery.description}
                id={brewery.id}
                key={brewery.id}
                onAddNewBeer={props.onAddNewBeer}
                beerList={props.beerList}
                onHandleBeerEditClick={props.onHandleBeerEditClick}
                onClickingDeleteBeer={props.onClickingDeleteBeer}
                onHandleBreweryEditClick={props.onHandleBreweryEditClick}
                onClickingDeleteBrewery={props.onClickingDeleteBrewery}
              />
            )
          })}
        </div>

        <button onClick={props.onAddNewBrewery}>add new brewery</button>
        <hr />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}
export default BreweryList;

