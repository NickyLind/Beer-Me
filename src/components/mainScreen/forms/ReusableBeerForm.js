import React from 'react';
import { connect } from "react-redux"
import classes from "./ReusableForm.module.css"


function ReusableBeerForm(props) {

  return (
    <React.Fragment>
      <h3><em>Reusable Beer Form</em></h3>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="Beverage Name"
          required
        />
        <input
          className={classes.input}
          type="text"
          name="style"
          placeholder="beverage style"
          required
        />
        <input
          className={classes.input}
          type="number"
          name="abv"
          placeholder="Alcohol Content"
          step=".1"
          required
        />
        <input
          className={classes.input}
          type="text"
          name="description"
          placeholder="beverage description"
          required
        />
        <button className={classes.button} type="submit">submit</button>
      </form>
      <hr />
      <button className={classes.button} onClick={props.onAddNewBeer}>Go back</button>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    newBeerFormVisible: state.newBeerFormVisible,
    masterBeerList: state.masterBeerList
  }
};

ReusableBeerForm = connect(mapStateToProps)(ReusableBeerForm);

export default ReusableBeerForm;