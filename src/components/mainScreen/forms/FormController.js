import React from 'react';
import NewBeerForm from "./NewBeerForm";
import EditBeerForm from "./EditBeerForm";
import NewBreweryForm from "./NewBreweryForm";
import EditBreweryForm from "./EditBreweryForm";
import BreweryList from "./BreweryList";
import Confirm from "./Confirm";
import { connect } from "react-redux";
import * as a from "../../../actions/index.js";
import BreweryDetail from './BreweryDetail';

function FormController(props) {

  //* handle logic for switching between ReusableBeer, ReusableBrewery, BreweryList, Confirm components
  // ! state: beerEditing, breweryEditing, selectedBeer, selectedBrewery, beerFormVisibleOnPage, breweryFormVisibleOnPage, masterBreweryList, CUConfirm
  const toggleNewBeerForm = () => {
    const { dispatch } = props
    const action = a.toggleNewBeerForm();
    dispatch(action);
  };

  const toggleNewBreweryForm = () => {
    const { dispatch } = props
    const action = a.toggleNewBreweryForm();
    dispatch(action);
  };

  const unselectBrewery = () => {
    const { dispatch } = props
    const action = a.unselectBrewery();
    dispatch(action);
  }

  const handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = props;
    const action = a.addBeer(newBeer);
    dispatch(action);
    const action2 = a.toggleNewBeerForm();
    dispatch(action2);
  };

  const handleAddingNewBreweryToList = (newBrewery) => {
    const { dispatch } = props;
    const action = a.addBrewery(newBrewery);
    dispatch(action);
    const action2 = a.toggleNewBreweryForm();
    dispatch(action2);
  };

  const handleChangingSelectedBrewery = (id) => {
    const selectedBrewery = props.masterBreweryList[id];
    const { dispatch } = props;
    const action = a.selectedBrewery(selectedBrewery)
    dispatch(action);
  };

  const handleChangingSelectedBeer = (id) => {
    const selectedBeer = props.masterBeerList[id];
    const { dispatch } = props;
    const action = a.selectedBeer(selectedBeer)
    dispatch(action);
  }

  const handleBeerEditClick = () => {
    const { dispatch } = props;
    const action = a.toggleBeerEdit();
    dispatch(action)
  };

  const handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = props;
    const action = a.addBeer(beerToEdit);
    dispatch(action);
    const action2 = a.unselectBeer();
    dispatch(action2);
    if (props.beerEditing) {
      const action = a.toggleBeerEdit();
      dispatch(action);
    }
  }
  // ! we aren't using a BeerDetail so this will have to work differently

  if (props.newBeerFormVisible) {
    return (
      <NewBeerForm
        onAddNewBeer={toggleNewBeerForm}
        onNewBeerCreation={handleAddingNewBeerToList}
      />
    )
  } else if (props.selectedBrewery != null) {
    return (
      <BreweryDetail
        brewery={props.selectedBrewery}
        onUnselectBrewery={unselectBrewery}
      />
    )
  } else if (props.beerEditing) {
    return (
      <EditBeerForm
        beer={props.selectedBeer}
        onEditBeer={handleEditingBeerInList}
      />
    )
  } else if (props.newBreweryFormVisible) {
    return (
      <NewBreweryForm
        onAddNewBrewery={toggleNewBreweryForm}
        onNewBreweryCreation={handleAddingNewBreweryToList}
      />
    )
    // } else if (props.newBreweryFormVisible) {
    //   return (
    //     <EditBreweryForm  />
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
      <BreweryList
        onAddNewBeer={toggleNewBeerForm}
        onAddNewBrewery={toggleNewBreweryForm}
        beerList={props.masterBeerList}
        breweryList={props.masterBreweryList}
        onBrewerySelection={handleChangingSelectedBrewery}
        onBeerSelection={handleChangingSelectedBeer}
        onHandleBeerEditClick={handleBeerEditClick}
      />
    )
  }
};

const mapStateToProps = state => {
  return {
    newBeerFormVisible: state.newBeerFormVisible,
    newBreweryFormVisible: state.newBreweryFormVisible,
    masterBeerList: state.masterBeerList,
    masterBreweryList: state.masterBreweryList,
    selectedBrewery: state.selectedBrewery,
    selectedBeer: state.selectedBeer,
    beerEditing: state.beerEditing,
    breweryEditing: state.breweryEditing,
  }
};

FormController = connect(mapStateToProps)(FormController);

export default FormController;