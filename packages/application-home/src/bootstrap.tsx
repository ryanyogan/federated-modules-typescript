// To use Home as Host

import React from "react";
import ReactDOM from "react-dom";

import Cart from "applicationCart/CartRemote";

import App from "./app";

ReactDOM.render(
  <>
    <App />
    <Cart
      callback={() => {
        console.log("hi from callback");
      }}
    />
  </>,
  document.getElementById("root")
);
