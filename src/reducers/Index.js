import sidebarVisibleReducer from "./siderbar-visible-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidebarVisible: sidebarVisibleReducer,

});

export default rootReducer;