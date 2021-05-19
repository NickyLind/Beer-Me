import sidebarVisibleReducer from "./siderbar-visible-reducer";
import selectorToggleReducer from "./selector-toggle-reducer";
import beerFormVisibleOnPage from "./beer-form-visible-reducer";
import breweryFormVisibleOnPage from "./brewery-form-visible-reducer";
import loginVisibleReducer from "./login-visible-reducer";
import { combineReducers } from "redux";
import selectedBreweryReducer from "./selected-brewery-reducer";
import beerEditReducer from "./beer-edit-reducer";
import breweryEditReducer from "./brewery-edit-reducer";
import selectedBeerReducer from "./selected-beer-reducer";
import { firestoreReducer } from "redux-firestore";
import queriedBeerReducer from "./queried-beer-reducer";
import filterToggleReducer from "./filter-toggle-reducer";


const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  beerMeDetails: selectorToggleReducer,
  newBeerFormVisible: beerFormVisibleOnPage,
  newBreweryFormVisible: breweryFormVisibleOnPage,
  loginVisible: loginVisibleReducer,
  selectedBrewery: selectedBreweryReducer,
  selectedBeer: selectedBeerReducer,
  beerEditing: beerEditReducer,
  breweryEditing: breweryEditReducer,
  selectedBeerQuery: queriedBeerReducer,
  filterVisible: filterToggleReducer,
  firestore: firestoreReducer
});

export default rootReducer;