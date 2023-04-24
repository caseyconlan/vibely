import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
