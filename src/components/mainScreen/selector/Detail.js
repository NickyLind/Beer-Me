import React from 'react';

function Detail(props) {
  const { randomBeer } = props
  return (
    <React.Fragment>
      <h3><em>{randomBeer.name}</em></h3>
      <hr />
      <p>{randomBeer.breweryId}</p>
      <p>Style: {randomBeer.style}</p>
      <p>ABV:{randomBeer.abv} </p>
      <p>{randomBeer.description}</p>
      <button onClick={props.toggleSelector}>try again!</button>
    </React.Fragment>
  );
};

export default Detail;