import React from "react";
import ReusableBreweryForm from "./ReusableBreweryForm";

function NewBreweryForm(props) {

  return (
    <React.Fragment>
      <h3>~New~</h3>
      <ReusableBreweryForm onAddNewBrewery={props.onAddNewBrewery} />
    </React.Fragment>
  );
};

export default NewBreweryForm;