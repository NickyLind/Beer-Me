import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_BREWERY:
      return id;
    default:
      return state;
  }
}