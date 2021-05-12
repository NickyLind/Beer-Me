import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_BREWERY:
      return id;
    case c.UNSELECT_BREWERY:
      return state = null;
    default:
      return state;
  }
}