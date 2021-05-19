import React from 'react';
import { useSelector } from 'react-redux';
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
    return props.onAddingQueryForRandomizer(

      event.target.selectedBeer.value,
      // event.target.selectedBrewery.value,
      // console.log(event.target.selectedBeer.value),
      // console.log(event.target.selectedBrewery.value)
    )
  }

  if ((isLoaded(beers)) && (isLoaded(breweries))) {
    let array = []
    beers.map((beer) => {
      array.push(beer.style)
    })
    const noBeerRepeat = [...new Set(array)]
    return (
      <React.Fragment>
        <form onSubmit={giveValuesToSearch}>
          <label>Beer Type</label>
          <select id={"selectedBeer"}>
            <option value={"N/A"}>Any</option>
            {(noBeerRepeat).map((beer) => {
              return (
                <option key={beer} value={beer}>{beer}</option>
              )
            })}
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
          <button type={'submit'}>Ok!</button>
        </form>
        <hr />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
};

export default Selector;