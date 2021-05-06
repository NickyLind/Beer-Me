import * as c from "./ActionTypes";

export const toggleSidebar = () => ({
  type: c.TOGGLE_SIDEBAR
});

export const toggleBeerMe = () => ({
  type: c.TOGGLE_BEER_SELECTOR
});

export const toggleNewBeerForm = () => ({
  type: c.TOGGLE_BEER_FORM
});

export const toggleNewBreweryForm = () => ({
  type: c.TOGGLE_BREWERY_FORM
});

export const toggleLogin = () => ({
  type: c.TOGGLE_LOGIN
});