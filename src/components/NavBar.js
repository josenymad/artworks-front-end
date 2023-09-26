import React from "react";
import "../styles/nav-bar.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ searchQuery, handleSearchInput, handleSearchSubmit }) => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link to="/" className="navbar__list__all-artworks__link">
            All Artworks
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link to="add-artwork" className="navbar__list__all-artworks__link">
            Add Artwork
          </Link>
        </li>
        {pathname === "/add-artwork" ? null : (
          <li className="navbar__list-item">
            <form
              className="navbar__list__search"
              onSubmit={handleSearchSubmit}
            >
              <label htmlFor="search">{}</label>
              <input
                placeholder="Company or Product code"
                className="navbar__list__search-text"
                type="search"
                id="search"
                value={searchQuery}
                onChange={handleSearchInput}
              />
              <label htmlFor="search-button">{}</label>
              <button
                type="submit"
                className="navbar__list__search-button"
                id="search-button"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
