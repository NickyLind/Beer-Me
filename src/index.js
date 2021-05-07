import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/Index";

const store = createStore(rootReducer);
store.subscribe(() =>
  console.log(store.getState())
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
