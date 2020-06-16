import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppShell: React.FC<{ cartCount?: number }> = (params) => {
  return (
    <Router>
      <div style={{ background: "#efefef", minHeight: "100vh" }}>
        <div style={{ background: "#fcc", padding: "1em", margin: "0 0 1em" }}>
          <h1>Website</h1>
          <nav>
            <Link to="/">App1</Link>
            <Link to="/products">App2</Link>
            <a>Cart {params.cartCount || 0}</a>
          </nav>
        </div>
        <div>{params.children}</div>
      </div>
    </Router>
  );
};

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

// {/* A <Switch> looks through its children <Route>s and
//     renders the first one that matches the current URL. */}
// <Switch>
//   <Route path="/about">
//     <About />
//   </Route>
//   <Route path="/users">
//     <Users />
//   </Route>
//   <Route path="/">
//     <Home />
//   </Route>
// </Switch>
//       </div>
//     </Router>
//   );
// }

export default AppShell;
