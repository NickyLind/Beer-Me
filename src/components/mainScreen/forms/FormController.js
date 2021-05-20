import React from 'react';
import NewBeerForm from "./NewBeerForm";
import EditBeerForm from "./EditBeerForm";
import NewBreweryForm from "./NewBreweryForm";
import EditBreweryForm from "./EditBreweryForm";
import BreweryList from "./BreweryList";
import { connect } from "react-redux";
import * as a from "../../../actions/index.js";
import BreweryDetail from './BreweryDetail';
import classes from "./FormController.module.css"
import { withFirestore, isLoaded } from "react-redux-firebase";

function FormController(props) {


  const auth = props.firebase.auth();

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
        addedToDatabase: brewery.get("addedToDatabase"),
        userId: brewery.userId
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
      <div className={classes.background}>
        <NewBeerForm
          onAddNewBeer={toggleNewBeerForm}
          onNewBeerCreation={handleAddingNewBeerToList}
        />
      </div>
    )
  } else if (props.beerEditing) {
    return (
      <div className={classes.background}>
        <EditBeerForm
          beer={props.selectedBeer}
          onEditBeer={handleEditingBeerInList}
          onClickBeerEdit={handleBeerEditClick}
        />
      </div>
    )

    //* RETURN LOGIC FOR DISPLAYING BREWERY COMPONENTS ~~~~~~~

  } else if (props.newBreweryFormVisible) {
    return (
      <div className={classes.background}>
        <NewBreweryForm
          onAddNewBrewery={toggleNewBreweryForm}
          onNewBreweryCreation={handleAddingNewBreweryToList}
        />
      </div>
    )
  } else if (props.breweryEditing) {
    return (
      <div className={classes.background}>
        <EditBreweryForm
          brewery={props.selectedBrewery}
          onEditBrewery={handleEditingBreweryInList}
          onClickBreweryEdit={handleEditGoBackButton}
        />
      </div>
    )
  } else if (props.selectedBrewery != null) {
    return (
      <div className={classes.background}>
        <BreweryDetail
          brewery={props.selectedBrewery}
          onUnselectBrewery={unselectBrewery}
        />
      </div>
    )

  } else {
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <div className={classes.background}>
            <h3>...Loading</h3>
          </div>
        </React.Fragment>
      )
    } else if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <div className={classes.background}>
            <h3>You must be logged in to view your breweries</h3>
          </div>
        </React.Fragment>
      )
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