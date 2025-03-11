import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location]);

  // 登出功能
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <NavLink className="origin" to="/home" activeClassName="active">
            Home
          </NavLink>
          <NavLink
            className="origin"
            to="/about?username=zhuhaoran&age=20"
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink className="origin" to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink className="origin" to="/book/123" activeClassName="active">
            Book
          </NavLink>
        </div>
        <div className="user-info">
          {user ? (
            <div>
              <span>Welcome, {user.username} </span>
              <button type="primary" onClick={handleLogout}>
                登出
              </button>
            </div>
          ) : (
            <NavLink className="origin" to="/login" activeClassName="active">
              登录
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
