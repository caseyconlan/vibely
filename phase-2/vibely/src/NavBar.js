import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const activeStyle = { backgroundColor: "yellowgreen" };

  return (
    <div className="navbar">
      <Link to="/">
        <div id="vibely">Quotely</div>
      </Link>
      <div className="navbar-flex-container">
        <div className="flex-item">
          <Link to="/" activeStyle={activeStyle}>
            Home
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/about" activeStyle={activeStyle}>
            About
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/favorites" activeStyle={activeStyle}>
            Favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
