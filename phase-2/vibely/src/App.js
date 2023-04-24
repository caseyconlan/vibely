import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    fetch(
      `https://theaudiodb.com/api/v1/json/${process.env.REACT_APP_API_KEY}/searchalbum.php?s=daft_punk`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
