import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
