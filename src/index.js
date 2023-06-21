import store from './redux/state';
import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
let root = createRoot(rootElement); 

 let rerenderEntireTree = (state) => {
  root.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
    />
  );
};


rerenderEntireTree (store.getState());
store.subscribe(rerenderEntireTree)



