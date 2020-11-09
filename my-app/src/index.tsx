import React from "react";
import ReactDOM from "react-dom";
import "./styling/index.css";
import App from "./App";
import { store } from "./store/store";

//redux
import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
//import thunk from "redux-thunk"
//import reducer from "./store/reducer"

//redux
/*
const store: Store<MovieState, MovieAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))
*/

//redux slutt, redux -> provider

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);