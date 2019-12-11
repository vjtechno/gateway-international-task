import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import taskReducer from "./reducers/taskReducer";

import { Provider } from "react-redux";

let store = createStore(taskReducer, [
  {
    id: 1,
    name: "Anshul Porwal",
    email: "anshul@gmail.com",
    date: "1993/10/12",
    phone: "8956745625",
    status: "Done"
  },
  {
    id: 1,
    name: "Vijay Gehlot",
    email: "vijay@gmail.com",
    date: "1997/12/11",
    phone: "7845626529",
    status: "Not Done"
  },
  {
    id: 1,
    name: "rajesh kumar",
    email: "rajesh@gmail.com",
    date: "1994/11/10",
    phone: "8282908756",
    status: "Not Done"
  },
  {
    id: 1,
    name: "utkarsh gupta",
    email: "utkarsh23@gmail.com",
    date: "1999/4/2",
    phone: "9887562314",
    status: "Not Done"
  },
  {
    id: 1,
    name: "devendra singh",
    email: "singh12@gmail.com",
    date: "1998/2/5",
    phone: "8967854532",
    status: "Done"
  },
  {
    id: 1,
    name: "ramesh kumar",
    email: "kumar4@gmail.com",
    date: "1997/5/7",
    phone: "7857898388",
    status: "Not Done"
  }
]);

window.jQuery = $;
require("bootstrap/dist/js/bootstrap.min.js");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
