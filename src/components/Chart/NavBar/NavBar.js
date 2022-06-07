import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/pairs/eur_usd">EUR/USD</Link>
      <Link to="/pairs/usd_gbp">USD/GBP</Link>
    </nav>
  );
};

export default NavBar;
