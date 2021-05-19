import React from 'react';

function Detail(props) {
  const { randomBeer } = props
  return (
    <React.Fragment>
      <hr />
      <h3><em>{randomBeer.name}</em></h3>
      <hr />
      <p>{randomBeer.breweryId}</p>
      <p>Style: {randomBeer.style}</p>
      <p>ABV:{randomBeer.abv} </p>
      <p>{randomBeer.description}</p>
      <button onClick={props.toggleSelector}>Go Back</button>
      <hr />
    </React.Fragment>
  );
};

export default Detail;