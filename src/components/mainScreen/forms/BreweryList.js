import React from 'react';
import Brewery from "./Brewery";

function BreweryList(props) {

  const scrollBox = {
    height: "100px",
    width: "400px",
    border: "1px solid #ccc",
    font: "16px/26px Georgia, Garamond, Serif",
    overflow: "auto"
  }

  return (
    <React.Fragment>
      <hr />
      <h3><em>Brewery List Component</em></h3>
      <hr />
      <div style={scrollBox}>
        {Object.values(props.breweryList).map((brewery =>
          <Brewery
            whenBreweryClicked={props.onBrewerySelection}
            name={brewery.name}
            location={brewery.location}
            description={brewery.description}
            id={brewery.id}
            key={brewery.id}
            onAddNewBeer={props.onAddNewBeer}
            beerList={props.beerList}
          />
        ))
        }
      </div>

      <button onClick={props.onAddNewBrewery}>add new brewery</button>
      <hr />
    </React.Fragment>
  );
};

export default BreweryList;

