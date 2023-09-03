import React from "react";
import "../styles/nav-bar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__all-artworks">
          <Link to="/" className="navbar__list__all-artworks__link">
            All Artworks
          </Link>
        </li>
        <li>
          <Link to="add-artwork" className="navbar__list__all-artworks__link">
            Add Artwork
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
