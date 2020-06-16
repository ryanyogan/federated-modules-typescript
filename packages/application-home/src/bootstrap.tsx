// To use Home as Host

import React from "react";
import ReactDOM from "react-dom";

import SayHelloFromB from "applicationCart/CartRemote";

import App from "./app";

ReactDOM.render(
  <>
    <App />
    <SayHelloFromB
      callback={() => {
        console.log("hi from callback");
      }}
    />
  </>,
  document.getElementById("root")
);
