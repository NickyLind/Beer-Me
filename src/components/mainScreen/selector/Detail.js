import React from 'react';
import classes from "./Detail.module.css";
import * as a from "../../../actions/index.js";

function Detail(props) {
  const { randomBeer } = props
  return (
    <React.Fragment>
      <div className={classes.background}>
        <h3><em>{randomBeer.name}</em></h3>
        <p>{randomBeer.breweryId}</p>
        <p>Style: {randomBeer.style}</p>
        <p>ABV:{randomBeer.abv} </p>
        <p>{randomBeer.description}</p>
        <div className={classes.buttonRow}>
          <button className={classes.button} onClick={props.toggleSelector}>try something new!</button>
          <button className={classes.button} onClick={props.beerMeButton}>try again!</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Detail;