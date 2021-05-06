import sidebarVisibleReducer from "./siderbar-visible-reducer";
import selectorToggleReducer from "./selector-toggle-reducer";
import beerFormVisibleOnPage from "./beer-form-visible-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  beerMeDetails: selectorToggleReducer,
  newBeerFormVisible: beerFormVisibleOnPage,
});

export default rootReducer;