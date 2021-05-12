import React from "react";
import ReusableBeerForm from "./ReusableBeerForm";
import { v4 } from "uuid";
import PropTypes from "prop-types";

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

export default NewBeerForm;