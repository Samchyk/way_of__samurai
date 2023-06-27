import store from "./redux/redux-store";
import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
let root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
