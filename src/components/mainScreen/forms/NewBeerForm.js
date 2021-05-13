import React from "react";
import ReusableBeerForm from "./ReusableBeerForm";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import { selectedBrewery } from "../../../actions/index.js";
import { connect } from "react-redux"

function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation(
      {
        name: event.target.name.value,
        style: event.target.style.value,
        abv: event.target.abv.value,
        description: event.target.description.value,
        id: v4(),
        breweryId: props.selectedBrewery.id
      }
    );
  }

  return (
    <React.Fragment>
      <h3>New Beer Form</h3>
      <ReusableBeerForm
        onAddNewBeer={props.onAddNewBeer}
        formSubmissionHandler={handleNewBeerFormSubmission}
      />
    </React.Fragment>
  );
};

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    selectedBrewery: state.selectedBrewery,
  }
};

NewBeerForm = connect(mapStateToProps)(NewBeerForm)

export default NewBeerForm;