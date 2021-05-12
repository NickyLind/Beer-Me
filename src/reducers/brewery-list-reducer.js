import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, location, description, id } = action

  switch (action.type) {
    case c.ADD_BREWERY:
      return Object.assign({}, state, {
        [id]: {
          name,
          location,
          description,
          id,
        }
      });
    default:
      return state;
  }
};