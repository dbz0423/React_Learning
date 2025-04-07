import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="glass-nav">
        <ul className="nav-list">
          <li>
            <Link to="/">文章列表</Link>
          </li>
          <li>
            <Link to="/create">新建文章</Link>
          </li>
          <li>
            <Link to="/films">影视资讯</Link>
          </li>
        </ul>
      </nav>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
