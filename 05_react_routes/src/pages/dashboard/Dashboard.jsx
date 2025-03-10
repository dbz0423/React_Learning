import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../../App.css";

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome：{username}</h3>
      <nav>
        <NavLink className="origin" to="profile" activeClassname="active">
          Profile
        </NavLink>
        <NavLink className="origin" to="setting" activeClassname="active">
          Setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
