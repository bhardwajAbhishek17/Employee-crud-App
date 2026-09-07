import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              to={"/"}
              className="nav-link active"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              CRUD
            </NavLink>
            <NavLink
              to={"/"}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <a className="nav-link" href="#" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a className="nav-link" href="#" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
