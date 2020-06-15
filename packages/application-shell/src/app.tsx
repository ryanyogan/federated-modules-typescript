import React from "react";

const AppShell: React.FC<{ cartCount?: number }> = (params) => {
  return (
    <div style={{ background: "#efefef", minHeight: "100vh" }}>
      <div style={{ background: "#fcc", padding: "1em", margin: "0 0 1em" }}>
        <h1>Website</h1>
        <nav>
          <a>App 1</a>
          <a>App 2</a>
          <a>Cart {params.cartCount || 0}</a>
        </nav>
      </div>
      <div>{params.children}</div>
    </div>
  );
};

export default AppShell;
