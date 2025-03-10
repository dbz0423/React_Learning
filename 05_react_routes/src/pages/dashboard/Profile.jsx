import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../App.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile page</h2>
      <div className="profile-layout">
        <nav className="profile-nav">
          <NavLink className="origin" to="fans" activeClassName="active">
            我的粉丝
          </NavLink>
          <NavLink className="origin" to="follow" activeClassName="active">
            我的关注
          </NavLink>
        </nav>
        <div className="profile-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
