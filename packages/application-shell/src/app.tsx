import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppShell: React.FC<{ cartCount?: number }> = (params) => {
  return (
    <Router>
      <div className="app-shell">
        <div className="app-shell-nav">
          <h1>App Shell</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/Cart">Cart ({params.cartCount || 0})</Link>
          </nav>
        </div>
        <div className="app-shell-main-content">{params.children}</div>
      </div>
    </Router>
  );
};

export default AppShell;
