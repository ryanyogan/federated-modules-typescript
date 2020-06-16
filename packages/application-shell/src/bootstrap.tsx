import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SayHelloFromA from "applicationHome/SayHelloFromA";
import SayHelloFromB from "applicationCart/SayHelloFromB";

import App from "./app";

ReactDOM.render(
  <App>
    <Switch>
      <Route path="/cart">
        <h1>Cart</h1>
      </Route>
      <Route path="/products">
        <SayHelloFromB
          callback={() => {
            console.log("hi from callback");
          }}
        />
      </Route>
      <Route path="/">
        <SayHelloFromA />
      </Route>
    </Switch>
  </App>,
  document.getElementById("root")
);
