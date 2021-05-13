import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, style, abv, description, id, breweryId } = action;

  switch (action.type) {
    case c.ADD_BEER:
      return Object.assign({}, state, {
        [id]: {
          name,
          style,
          abv,
          description,
          id,
          breweryId,
        }
      });
    case c.DELETE_BEER:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}