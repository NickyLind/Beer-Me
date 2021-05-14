import React from "react";
import ReusableBreweryForm from "./ReusableBreweryForm";
import PropTypes from "prop-types"
import { useFirestore } from "react-redux-firebase";


function EditBreweryForm(props) {
  const firestore = useFirestore();
  const { brewery } = props;

  function HandleEditBreweryFormSubmission(event) {
    event.preventDefault();
    props.onEditBrewery();
    const propertiesToUpdate = {
      name: event.target.name.value,
      location: event.target.location.value,
      description: event.target.description.value,
    }
    // return firestore.collection("breweries").doc(brewery.id).update(propertiesToUpdate)
    return firestore.update({ collection: "breweries", doc: brewery.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <h3>~Edit Brewery Form~</h3>
      <ReusableBreweryForm
        formSubmissionHandler={HandleEditBreweryFormSubmission}
        onAddNewBrewery={props.onClickBreweryEdit}
      />
    </React.Fragment>
  );
};

EditBreweryForm.propTypes = {
  brewery: PropTypes.object,
  onEditBrewery: PropTypes.func
}

export default EditBreweryForm;