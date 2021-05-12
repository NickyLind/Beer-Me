import React from 'react';
import Beer from "./Beer";

function BreweryList(props) {

  const scrollBox = {
    height: "100px",
    width: "200px",
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
        {Object.values(props.beerList).map((beer) =>
          <Beer
            name={beer.name}
            style={beer.style}
            abv={beer.abv}
            description={beer.description}
            id={beer.id}
            key={beer.id}
          />
        )}
      </div>
      <button onClick={props.onAddNewBeer}>Add new beer</button>
      <button onClick={props.onAddNewBrewery}>add new brewery</button>
      <hr />
    </React.Fragment>
  );
};

export default BreweryList;

