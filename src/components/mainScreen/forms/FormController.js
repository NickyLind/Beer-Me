import React from 'react';
import NewBeerForm from "./NewBeerForm";
import EditBeerForm from "./EditBeerForm";
import NewBreweryForm from "./NewBreweryForm";
import EditBreweryForm from "./EditBreweryForm";
import BreweryList from "./BreweryList";
import Confirm from "./Confirm";
import { connect } from "react-redux";
import * as a from "../../../actions";

function FormController(props) {

  //* handle logic for switching between ReusableBeer, ReusableBrewery, BreweryList, Confirm components
  // ! state: beerEditing, breweryEditing, selectedBeer, selectedBrewery, beerFormVisibleOnPage, breweryFormVisibleOnPage, masterBreweryList, CUConfirm
  const toggleNewBeerForm = () => {
    const { dispatch } = props
    const action = a.toggleNewBeerForm();
    dispatch(action);
  }

  if (props.newBeerFormVisible) {
    return (
      <NewBeerForm />
    )
    // } else if () {
    //   return (
    //     <EditBeerForm />
    //       {/* beerEditing = true */ }
    //   )
    // } else if () {
    //   return (
    //     <NewBreweryForm />
    //     {/* breweryFormVisibleOnPage = true */ }
    // )
    // } else if () {
    //   return (
    //     <EditBreweryForm />
    //     {/* breweryEditing = true */ }
    //   )
    // } else if () {
    //   return (
    //     <Confirm />
    //     {/* CUConfirm = true */ }
    //   {//* probably want something here to display differently when something is updated vs created (IE  different functions that pass data from new/edit brewery/beer that dispatch an actiontype for confirm. Maybe have 4 seperate confirm components for each, ten refactor later OR a switch case for Confirm that fits different states and sets a variable to display different textS)//
    //   }
    // )
  } else {
    return (
      <BreweryList onAddNewBeer={toggleNewBeerForm} />
    )
  }
};

const mapStateToProps = state => {
  return {
    newBeerFormVisible: state.newBeerFormVisible
  }
};

FormController = connect(mapStateToProps)(FormController);

export default FormController;