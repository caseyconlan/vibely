import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        Quotely
      </Link>
      <div className="navbar-flex-container">
        <div className="flex-item">
          <Link to="/">Home</Link>
        </div>
        <div className="flex-item">
          <Link to="/about">About</Link>
        </div>
        <div className="flex-item">
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
