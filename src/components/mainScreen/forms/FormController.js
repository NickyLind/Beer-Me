import React from 'react';
import NewBeerForm from "./NewBeerForm";
import EditBeerForm from "./EditBeerForm";
import NewBreweryForm from "./NewBreweryForm";
import EditBreweryForm from "./EditBreweryForm";
import BreweryList from "./BreweryList";
import Confirm from "./Confirm";

function FormController() {

  //* handle logic for switching between ReusableBeer, ReusableBrewery, BreweryList, Confirm components

  return (
    <React.Fragment>
      <NewBeerForm />
      <EditBeerForm />
      <NewBreweryForm />
      <EditBreweryForm />
      <BreweryList />
      <Confirm />
    </React.Fragment>
  );
};

export default FormController;