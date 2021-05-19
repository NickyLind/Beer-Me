import React from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function Selector(props) {

  useFirestoreConnect([
    { collection: "beers" },
    { collection: "breweries" }
  ]);

  const beers = useSelector(state => state.firestore.ordered.beers);

  const breweries = useSelector(state => state.firestore.ordered.breweries);

  const giveValuesToSearch = event => {
    event.preventDefault();
    // props.toggleSelector();
    return props.onAddingQueryForRandomizer(

      event.target.selectedBeer.value,
      // event.target.selectedBrewery.value,
      // console.log(event.target.selectedBeer.value),
      // console.log(event.target.selectedBrewery.value)
    )
  }

  if ((isLoaded(beers)) && (isLoaded(breweries))) {
    const array = beers.map((beer) =>
      console.log(beer.styles))
    console.log(array)
    const noBeerRepeat = [...new Set(array)]
    return (
      <React.Fragment>
        <hr />
        <h3><em>Selector</em></h3>
        <hr />
        <form onSubmit={giveValuesToSearch}>
          <label>Beer Type</label>
          <select id={"selectedBeer"}>
            <option value={"N/A"}>Any</option>

            {/* {(noBeerRepeat).map((beer) => {
              return (
                <option key={beer.id} value={beer.style}>{beer.style}</option>
              )
            })} */}
          </select>
          <br />
          <label>Brewery</label>
          <select id={"selectedBrewery"}>
            <option value={"N/A"}>Any</option>
            {breweries.map((brewery) => {
              return (
                <option key={brewery.id} value={brewery.name}>{brewery.name}</option>
              )
            })}
          </select>
          <br />
          <button type={'submit'}>Beer Me!</button>
        </form>
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
};

export default Selector;