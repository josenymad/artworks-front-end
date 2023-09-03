import React from "react";
import "../styles/nav-bar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__all-artworks">
          <Link to="/">All Artworks</Link>
        </li>
        <li>
          <Link to="add-artwork">Add Artwork</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
