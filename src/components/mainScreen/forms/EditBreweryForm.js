import React from "react";
import ReusableBreweryForm from "./ReusableBreweryForm";

function EditBreweryForm(props) {
  const { brewery } = props;

  function HandleEditBreweryFormSubmission(event) {
    event.preventDefault();
    props.onEditBrewery({
      name: event.target.name.value,
      location: event.target.location.value,
      description: event.target.description.value,
      id: brewery.id,
    });
  }

  return (
    <React.Fragment>
      <h3>~Edit Brewery Form~</h3>
      <ReusableBreweryForm
        formSubmissionHandler={HandleEditBreweryFormSubmission}
      />
    </React.Fragment>
  );
};

export default EditBreweryForm;