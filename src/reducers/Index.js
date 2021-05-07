import sidebarVisibleReducer from "./siderbar-visible-reducer";
import selectorToggleReducer from "./selector-toggle-reducer";
import beerFormVisibleOnPage from "./beer-form-visible-reducer";
import breweryFormVisibleOnPage from "./brewery-form-visible-reducer";
import loginVisibleReducer from "./login-visible-reducer";
import selectorMainToggleReducer from "./selector-main-toggle-reducer";
import loginMainToggleReducer from "./login-main-toggle-reducer";
import formsMainToggleReducer from "./forms-main-toggle-reducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  beerMeDetails: selectorToggleReducer,
  newBeerFormVisible: beerFormVisibleOnPage,
  newBreweryFormVisible: breweryFormVisibleOnPage,
  loginVisible: loginVisibleReducer,
  displaySelectorOnMain: selectorMainToggleReducer,
  displayLoginOnMain: loginMainToggleReducer,
  displayFormsOnMain: formsMainToggleReducer,
});

export default rootReducer;