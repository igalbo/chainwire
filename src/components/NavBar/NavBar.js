import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "nav_link active" : "nav_link";

  return (
    <nav>
      <NavLink to="/pairs/eur_usd" className={navLinkStyle}>
        EUR/USD
      </NavLink>
      <NavLink to="/pairs/usd_gbp" className={navLinkStyle}>
        USD/GBP
      </NavLink>
    </nav>
  );
};

export default NavBar;
