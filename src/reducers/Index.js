import sidebarVisibleReducer from "./siderbar-visible-reducer";
import selectorToggleReducer from "./selector-toggle-reducer";
import beerFormVisibleOnPage from "./beer-form-visible-reducer";
import breweryFormVisibleOnPage from "./brewery-form-visible-reducer";
import loginVisibleReducer from "./login-visible-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  beerMeDetails: selectorToggleReducer,
  newBeerFormVisible: beerFormVisibleOnPage,
  newBreweryFormVisible: breweryFormVisibleOnPage,
  loginVisible: loginVisibleReducer,
});

export default rootReducer;