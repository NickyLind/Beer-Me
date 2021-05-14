import React from "react";
import ReusableBreweryForm from "./ReusableBreweryForm";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function NewBreweryForm(props) {

  const firestore = useFirestore();

  function addBreweryToFirestore(event) {
    event.preventDefault();
    props.onNewBreweryCreation();

    return firestore.collection("breweries").add(
      {
        name: event.target.name.value,
        location: event.target.location.value,
        description: event.target.description.value,
        addedToDatabase: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <h3>New Brewery Form</h3>
      <ReusableBreweryForm
        onAddNewBrewery={props.onAddNewBrewery}
        formSubmissionHandler={addBreweryToFirestore}
      />
    </React.Fragment>
  );
};

export default NewBreweryForm;