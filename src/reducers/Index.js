import sidebarVisibleReducer from "./siderbar-visible-reducer";
import selectorToggleReducer from "./selector-toggle-reducer";
import beerFormVisibleOnPage from "./beer-form-visible-reducer";
import breweryFormVisibleOnPage from "./brewery-form-visible-reducer";
import loginVisibleReducer from "./login-visible-reducer";
import selectorMainToggleReducer from "./selector-main-toggle-reducer";
import loginMainToggleReducer from "./login-main-toggle-reducer";
import formsMainToggleReducer from "./forms-main-toggle-reducer"
import { combineReducers } from "redux";
import selectedBreweryReducer from "./selected-brewery-reducer";
import beerEditReducer from "./beer-edit-reducer";
import breweryEditReducer from "./brewery-edit-reducer";
import selectedBeerReducer from "./selected-beer-reducer";
import { firestoreReducer } from "redux-firestore";


const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  beerMeDetails: selectorToggleReducer,
  newBeerFormVisible: beerFormVisibleOnPage,
  newBreweryFormVisible: breweryFormVisibleOnPage,
  loginVisible: loginVisibleReducer,
  displaySelectorOnMain: selectorMainToggleReducer,
  displayLoginOnMain: loginMainToggleReducer,
  displayFormsOnMain: formsMainToggleReducer,
  selectedBrewery: selectedBreweryReducer,
  selectedBeer: selectedBeerReducer,
  beerEditing: beerEditReducer,
  breweryEditing: breweryEditReducer,
  firestore: firestoreReducer
});

export default rootReducer;