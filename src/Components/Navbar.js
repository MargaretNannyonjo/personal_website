import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logoName">
          Maggie
        </Link>

        <div className="navLinks">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About me
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
