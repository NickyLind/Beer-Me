import * as c from "../actions/ActionTypes";

export default (state = true, action) => {
  switch (action.type) {
    case c.TOGGLE_BEER_SELECTOR:
      return !state;
    default:
      return state;
  }
};