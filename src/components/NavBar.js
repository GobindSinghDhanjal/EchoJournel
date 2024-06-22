import React from "react";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./Drawer";
import logo from "../assests/logo.png";

const NavBar = () => {
  return (
    <div className="navbar-container">

 
    <nav className="navbar">
      <div className="menu-icon">
        <TemporaryDrawer />
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/technology" className="nav-link">Technology</Link>
        </li>
        <li>
          <Link to="/entertainment" className="nav-link">Entertainment</Link>
        </li>
        <li>
          <Link to="/science" className="nav-link">Science</Link>
        </li>
        <li>
          <Link to="/travel" className="nav-link">Travel</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
