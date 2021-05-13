import React from "react";
import ReusableBeerForm from "./ReusableBeerForm";

function EditBeerForm(props) {
  const { beer } = props;

  function HandleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({
      name: event.target.name.value,
      style: event.target.style.value,
      abv: event.target.abv.value,
      description: event.target.description.value,
      id: beer.id,
      breweryId: beer.breweryId
    });
  }
  return (
    <React.Fragment>
      <h3>~Edit Beer Form~</h3>
      <ReusableBeerForm
        formSubmissionHandler={HandleEditBeerFormSubmission}
        onAddNewBeer={props.onClickBeerEdit}
      />
    </React.Fragment>
  );
};

export default EditBeerForm;