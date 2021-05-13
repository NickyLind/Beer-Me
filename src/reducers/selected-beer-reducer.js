import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_BEER:
      return id;
    case c.UNSELECT_BEER:
      return state = null;
    default:
      return state;
  }
};