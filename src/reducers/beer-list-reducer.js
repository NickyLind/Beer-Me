import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, style, abv, description, id } = action;

  switch (action.type) {
    case c.ADD_BEER:
      return Object.assign({}, state, {
        [id]: {
          name,
          style,
          abv,
          description,
          id,
        }
      });
    default:
      return state;
  }
}