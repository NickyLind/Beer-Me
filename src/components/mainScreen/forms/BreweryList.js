import React from 'react';
import Brewery from "./Brewery";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/database";

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
        <div style={scrollBox}>
          {breweries
            .filter(brewery => brewery.userId === firebase.auth().currentUser.uid)
            .map((brewery) => {
              return (
                <Brewery
                  whenBreweryClicked={props.onBrewerySelection}
                  whenBeerClicked={props.onBeerSelection}
                  name={brewery.name}
                  location={brewery.location}
                  description={brewery.description}
                  id={brewery.id}
                  key={brewery.id}
                  userId={brewery.userId}
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
  } else if (isEmpty(breweries)) {
    return (
      <React.Fragment>
        <hr />
        <h3><em>Brewery List Component</em></h3>
        <hr />
        <h1>Add your first brewery!</h1>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}
export default BreweryList;

