import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div id="vibely">Vibely</div>
      <div className="navbar-flex-container">
        <div className="flex-item">Home</div>
        <div className="flex-item">About</div>
        <div className="flex-item">Favorites</div>
      </div>
    </div>
  );
}

export default NavBar;
