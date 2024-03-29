import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const activestyle = { backgroundColor: "yellowgreen" };

  return (
    <div className="navbar">
      <Link to="/">
        <div id="vibely">Quotely</div>
      </Link>
      <div className="navbar-flex-container">
        <div className="flex-item">
          <Link to="/" activestyle={activestyle}>
            Home
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/about" activestyle={activestyle}>
            About
          </Link>
        </div>
        <div className="flex-item">
          <Link to="/favorites" activestyle={activestyle}>
            Favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
