import * as c from "./../actions/ActionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case c.DISPLAY_LOGIN_ON_MAIN:
      return !state;
    default:
      return state;
  }
};