import React from "react";
import ReusableBeerForm from "./ReusableBeerForm";

function NewBeerForm(props) {

  return (
    <React.Fragment>
      <h3>~New~</h3>
      <ReusableBeerForm onAddNewBeer={props.onAddNewBeer} />
    </React.Fragment>
  );
};

export default NewBeerForm;