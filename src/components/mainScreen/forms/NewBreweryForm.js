import React from "react";
import ReusableBreweryForm from "./ReusableBreweryForm";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewBreweryForm(props) {

  function handleNewBreweryFormSubmission(event) {
    event.preventDefault();
    props.onNewBreweryCreation(
      {
        name: event.target.name.value,
        location: event.target.location.value,
        description: event.target.description.value,
        id: v4(),
      }
    );
  }

  return (
    <React.Fragment>
      <h3>New Brewery Form</h3>
      <ReusableBreweryForm
        onAddNewBrewery={props.onAddNewBrewery}
        formSubmissionHandler={handleNewBreweryFormSubmission}
      />
    </React.Fragment>
  );
};

export default NewBreweryForm;