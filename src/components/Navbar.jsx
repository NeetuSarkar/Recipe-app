import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          F<span>oo</span>dParadise
        </h1>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          exact
          to="/"
          activeClassName="active"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          activeClassName="active"
          onClick={() => setIsMenuOpen(false)}
        >
          Recipes
        </NavLink>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
