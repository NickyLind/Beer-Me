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
import { withFirestore } from "react-redux-firebase";

function FormController(props) {

  //* handle logic for switching between ReusableBeer, ReusableBrewery, BreweryList, Confirm components
  // ! state: beerEditing, breweryEditing, selectedBeer, selectedBrewery, beerFormVisibleOnPage, breweryFormVisibleOnPage, masterBreweryList, CUConfirm

  // * BREWERY COMPONENTS LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const toggleNewBreweryForm = () => {
    const { dispatch } = props
    const action = a.toggleNewBreweryForm();
    dispatch(action);
  };

  const handleChangingSelectedBrewery = (id) => {
    props.firestore.get({ collection: "breweries", doc: id }).then((brewery) => {
      const firestoreBrewery = {
        name: brewery.get("name"),
        location: brewery.get("location"),
        id: brewery.id,
        description: brewery.get("description"),
        addedToDatabase: brewery.get("addedToDatabase")
      }
      const { dispatch } = props;
      const action = a.selectedBrewery(firestoreBrewery);
      dispatch(action);
    });
  };
  // TODO: catch block here for error handling if id passed to function doesn't exist (lesson 10 React:NoSQL)

  const unselectBrewery = () => {
    const { dispatch } = props
    const action = a.unselectBrewery();
    dispatch(action);
  };

  const handleAddingNewBreweryToList = () => {
    const { dispatch } = props;
    const action = a.toggleNewBreweryForm();
    dispatch(action);
  };

  const handleBreweryEditClick = () => {
    const { dispatch } = props;
    const action = a.toggleBreweryEdit();
    dispatch(action)
  };

  const handleEditGoBackButton = () => {
    const { dispatch } = props;
    const action = a.toggleBreweryEdit();
    dispatch(action);
    const action2 = a.unselectBrewery();
    dispatch(action2);
  }

  const handleEditingBreweryInList = () => {
    const { dispatch } = props
    const action2 = a.unselectBrewery();
    dispatch(action2);
    if (props.breweryEditing) {
      const action = a.toggleBreweryEdit();
      dispatch(action);
    }
  };

  const handleDeletingBrewery = (id) => {
    const { dispatch } = props;
    props.firestore.delete({ collection: "breweries", doc: id });
    const action2 = a.unselectBrewery();
    dispatch(action2);
  };

  //* BEER COMPONENTS LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const toggleNewBeerForm = () => {
    const { dispatch } = props
    const action = a.toggleNewBeerForm();
    dispatch(action);
  };

  const handleAddingNewBeerToList = () => {
    const { dispatch } = props;
    const action = a.toggleNewBeerForm();
    dispatch(action);
    const action2 = a.unselectBrewery();
    dispatch(action2);
  };

  const handleChangingSelectedBeer = (id) => {
    props.firestore.get({ collection: "beers", doc: id }).then((beer) => {
      const firestoreBeer = {
        name: beer.get("name"),
        style: beer.get("style"),
        abv: beer.get("abv"),
        description: beer.get("description"),
        breweryId: beer.get("breweryId"),
        addedToDatabase: beer.get("addedToDatabase"),
        id: beer.id
      }
      const { dispatch } = props;
      const action = a.selectedBeer(firestoreBeer)
      dispatch(action);
    })
  };

  const handleBeerEditClick = () => {
    const { dispatch } = props;
    const action = a.toggleBeerEdit();
    dispatch(action)
  };

  const handleEditingBeerInList = () => {
    const { dispatch } = props;
    const action2 = a.unselectBeer();
    dispatch(action2);
    if (props.beerEditing) {
      const action = a.toggleBeerEdit();
      dispatch(action);
    }
  };

  const handleDeletingBeer = (id) => {
    const { dispatch } = props;
    props.firestore.delete({ collection: "beers", doc: id });
    const action2 = a.unselectBeer();
    dispatch(action2);
  };

  //* RETURN LOGIC FOR DISPLAYING BEER COMPONENTS ~~~~~~~~~~~~

  if (props.newBeerFormVisible) {
    return (
      <NewBeerForm
        onAddNewBeer={toggleNewBeerForm}
        onNewBeerCreation={handleAddingNewBeerToList}
      />
    )
  } else if (props.beerEditing) {
    return (
      <EditBeerForm
        beer={props.selectedBeer}
        onEditBeer={handleEditingBeerInList}
        onClickBeerEdit={handleBeerEditClick}
      />
    )

    //* RETURN LOGIC FOR DISPLAYING BREWERY COMPONENTS ~~~~~~~

  } else if (props.newBreweryFormVisible) {
    return (
      <NewBreweryForm
        onAddNewBrewery={toggleNewBreweryForm}
        onNewBreweryCreation={handleAddingNewBreweryToList}
      />
    )
  } else if (props.breweryEditing) {
    return (
      <EditBreweryForm
        brewery={props.selectedBrewery}
        onEditBrewery={handleEditingBreweryInList}
        onClickBreweryEdit={handleEditGoBackButton}
      />
    )
  } else if (props.selectedBrewery != null) {
    return (
      <BreweryDetail
        brewery={props.selectedBrewery}
        onUnselectBrewery={unselectBrewery}
      />
    )
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
        onBrewerySelection={handleChangingSelectedBrewery}
        onBeerSelection={handleChangingSelectedBeer}
        onHandleBeerEditClick={handleBeerEditClick}
        onHandleBreweryEditClick={handleBreweryEditClick}
        onClickingDeleteBeer={handleDeletingBeer}
        onClickingDeleteBrewery={handleDeletingBrewery}
      />
    )
  }
};

const mapStateToProps = state => {
  return {
    newBeerFormVisible: state.newBeerFormVisible,
    newBreweryFormVisible: state.newBreweryFormVisible,
    selectedBrewery: state.selectedBrewery,
    selectedBeer: state.selectedBeer,
    beerEditing: state.beerEditing,
    breweryEditing: state.breweryEditing,
  }
};

FormController = connect(mapStateToProps)(FormController);

export default withFirestore(FormController);