import React from "react";
import classes from "./Beer.module.css";

function Beer(props) {

  const editBeerButton = () => {
    props.whenBeerClicked(props.id);
    props.onHandleBeerEditClick();
  }

  const deleteBeerButton = () => {
    props.onClickingDeleteBeer(props.id);
  }

  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p>{props.style}</p>
      <p>{props.abv}</p>
      <div className={classes.buttonRow}>
        <button className={classes.button} onClick={editBeerButton}>Edit Beer</button>
        <button className={classes.button} onClick={deleteBeerButton}>Remove Beer</button>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Beer