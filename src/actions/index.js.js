import * as c from "./ActionTypes";

export const toggleSidebar = () => ({
  type: c.TOGGLE_SIDEBAR
});

export const toggleBeerSelector = () => ({
  type: c.TOGGLE_BEER_SELECTOR
});

export const toggleHomePage = () => ({
  type: c.TOGGLE_HOME_PAGE
})

export const toggleNewBeerForm = () => ({
  type: c.TOGGLE_BEER_FORM
});

export const toggleNewBreweryForm = () => ({
  type: c.TOGGLE_BREWERY_FORM
});

export const toggleLogin = () => ({
  type: c.TOGGLE_LOGIN
});

export const selectedBrewery = (id) => ({
  type: c.SELECT_BREWERY,
  id
});

export const unselectBrewery = () => ({
  type: c.UNSELECT_BREWERY
});

export const selectedQuery = (id) => ({
  type: c.SELECT_QUERY,
  id
});

export const unselectQuery = () => ({
  type: c.UNSELECT_QUERY
})

export const selectedBeer = (id) => ({
  type: c.SELECT_BEER,
  id
});

export const unselectBeer = () => ({
  type: c.UNSELECT_BEER
});

export const toggleBreweryEdit = () => ({
  type: c.TOGGLE_BREWERY_EDIT
});

export const toggleBeerEdit = () => ({
  type: c.TOGGLE_BEER_EDIT
});