import store from "./redux/redux-store";
import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
let root = createRoot(rootElement);

let rerenderEntireTree = (state) => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
