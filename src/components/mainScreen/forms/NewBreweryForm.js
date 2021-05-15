import React from "react";
import ReusableBreweryForm from "./ReusableBreweryForm";
// import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/database";

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
        addedToDatabase: firestore.FieldValue.serverTimestamp(),
        userId: firebase.auth().currentUser.uid
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