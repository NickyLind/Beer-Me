import React from 'react';
import * as a from "../../../actions/index.js";
import { connect } from "react-redux"


function ReusableBeerForm(props) {

  return (
    <React.Fragment>
      <h3><em>Reusable Beer Form</em></h3>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Beverage Name"
          required
        />
        <input
          type="text"
          name="style"
          placeholder="beverage style"
          required
        />
        <input
          type="number"
          name="abv"
          placeholder="Alcohol Content"
          step=".1"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="beverage description"
          required
        />
        {/* <input
          type="hidden"
          name="breweryId"
          value={props.selectedBrewery.id}
        /> */}
        <button type="submit">submit</button>
      </form>
      <hr />
      <button onClick={props.onAddNewBeer}>Go back</button>
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