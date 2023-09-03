import React from "react";
import "../styles/nav-bar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__all-artworks">
          <Link to="/">All Artworks</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
