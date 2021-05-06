import sidebarVisibleReducer from "./siderbar-visible-reducer";
import selectorToggleReducer from "./selector-toggle-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,
  beerMeDetails: selectorToggleReducer,
});

export default rootReducer;