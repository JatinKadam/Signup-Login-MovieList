import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import reducer from "./reducers/LoginReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(reducer);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
