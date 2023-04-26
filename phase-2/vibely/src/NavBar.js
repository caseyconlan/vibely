import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div id="vibely">Quotely</div>
      <div className="navbar-flex-container">
        <div className="flex-item">Home</div>
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
