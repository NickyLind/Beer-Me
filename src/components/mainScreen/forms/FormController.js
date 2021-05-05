import React from 'react';
import ReusableBeerForm from "./ReusableBeerForm";
import ReusableBreweryForm from "./ReusableBreweryForm";
import BreweryList from "./BreweryList";
import Confirm from "./Confirm";

function FormController() {

  //* handle logic for switching between ReusableBeer, ReusableBrewery, BreweryList, Confirm components

  return (
    <React.Fragment>
      <ReusableBeerForm />
      <ReusableBreweryForm />
      <BreweryList />
      <Confirm />
    </React.Fragment>
  );
};

export default FormController;