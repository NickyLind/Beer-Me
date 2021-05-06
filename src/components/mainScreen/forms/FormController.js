import React from 'react';
import NewBeerForm from "./NewBeerForm";
import EditBeerForm from "./EditBeerForm";
import NewBreweryForm from "./NewBreweryForm";
import EditBreweryForm from "./EditBreweryForm";
import BreweryList from "./BreweryList";
import Confirm from "./Confirm";

function FormController() {

  //* handle logic for switching between ReusableBeer, ReusableBrewery, BreweryList, Confirm components
  // ! state: beerEditing, breweryEditing, selectedBeer, selectedBrewery, beerFormVisibleOnPage, breweryFormVisibleOnPage, masterBreweryList, CUConfirm
  return (
    <React.Fragment>
      <NewBeerForm />
      {/* beerFormVisibleOnPage = true */}

      <EditBeerForm />
      {/* beerEditing = true */}

      <NewBreweryForm />
      {/* breweryFormVisibleOnPage = true */}

      <EditBreweryForm />
      {/* breweryEditing = true */}

      <Confirm />
      {/* CUConfirm = true */}
      {//* probably want something here to display differently when something is updated vs created (IE  different functions that pass data from new/edit brewery/beer that dispatch an actiontype for confirm. Maybe have 4 seperate confirm components for each, ten refactor later)//
      }

      <BreweryList />
      {/* else statement for if nothing else is true */}
    </React.Fragment>
  );
};

export default FormController;