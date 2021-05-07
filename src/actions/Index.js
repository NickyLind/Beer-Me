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

export const displaySelectorOnMain = () => ({
  type: c.DISPLAY_SELECTOR_ON_MAIN
});

export const displayLoginOnMain = () => ({
  type: c.DISPLAY_LOGIN_ON_MAIN
});

export const displayFormsOnMain = () => ({
  type: c.DISPLAY_FORMS_ON_MAIN
});