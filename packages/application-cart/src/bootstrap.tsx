/* webpackChunkName: 'bootstrap-app-b' */
import React from "react";
import ReactDOM from "react-dom";

import SayHelloFromA from "applicationHome/SayHelloFromA";

import App from "./app";

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
  </>,
  document.getElementById("root")
);
