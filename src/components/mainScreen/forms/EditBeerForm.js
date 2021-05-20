import React from "react";
import ReusableBeerForm from "./ReusableBeerForm";
import { useFirestore } from "react-redux-firebase";


function EditBeerForm(props) {
  const { beer } = props;
  const firestore = useFirestore();


  function HandleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer();
    const propertiesToUpdate = {
      name: event.target.name.value,
      style: event.target.style.value,
      abv: event.target.abv.value,
      description: event.target.description.value,
    }
    return firestore.update({ collection: "beers", doc: beer.id }, propertiesToUpdate)
  }
  return (
    <React.Fragment>
      <h3>Edit Beer Form</h3>
      <ReusableBeerForm
        formSubmissionHandler={HandleEditBeerFormSubmission}
        onAddNewBeer={props.onClickBeerEdit}
      />
    </React.Fragment>
  );
};

export default EditBeerForm;