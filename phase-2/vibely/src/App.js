import "./App.css";
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import CommentBox from "./CommentBox";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <CommentBox />
    </div>
  );
}

export default App;