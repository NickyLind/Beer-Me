import React from "react";
import classes from "./BreweryDetail.module.css"

function BreweryDetail(props) {
  const { brewery } = props;

  return (
    <React.Fragment>
      <h1>{brewery.name} Detail</h1>
      <h3>{brewery.location}</h3>
      <p>{brewery.description}</p>
      <p>{brewery.id}</p>
      <p>{brewery.userId}</p>
      <button className={classes.button} onClick={props.onUnselectBrewery}>Back to Brewery List</button>
    </React.Fragment>
  )
};

export default BreweryDetail;