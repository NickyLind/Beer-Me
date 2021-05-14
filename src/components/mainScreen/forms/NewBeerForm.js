import React from "react";
import ReusableBeerForm from "./ReusableBeerForm";
import PropTypes from "prop-types";
import { selectedBrewery } from "../../../actions/index.js";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";


function NewBeerForm(props) {

  const firestore = useFirestore();

  function addBeerToFirestore(event) {
    event.preventDefault();
    props.onNewBeerCreation();
    return firestore.collection("beers").add(
      {
        name: event.target.name.value,
        style: event.target.style.value,
        abv: event.target.abv.value,
        description: event.target.description.value,
        breweryId: props.selectedBrewery.name,
        addedToDatabase: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <h3>New Beer Form</h3>
      <ReusableBeerForm
        onAddNewBeer={props.onAddNewBeer}
        formSubmissionHandler={addBeerToFirestore}
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