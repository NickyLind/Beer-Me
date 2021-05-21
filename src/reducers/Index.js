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
import selectedBeerStyleReducer from "./selected-beer-style-reducer";


const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  selectedBeerQuery: queriedBeerReducer,
  selectedBeerStyle: selectedBeerStyleReducer,
  beerMeDetails: selectorToggleReducer,
  newBeerFormVisible: beerFormVisibleOnPage,
  newBreweryFormVisible: breweryFormVisibleOnPage,
  loginVisible: loginVisibleReducer,
  selectedBrewery: selectedBreweryReducer,
  selectedBeer: selectedBeerReducer,
  beerEditing: beerEditReducer,
  breweryEditing: breweryEditReducer,
  filterVisible: filterToggleReducer,
  firestore: firestoreReducer
});

export default rootReducer;