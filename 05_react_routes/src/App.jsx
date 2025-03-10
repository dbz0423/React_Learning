import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
