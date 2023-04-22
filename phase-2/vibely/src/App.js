import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import LikeDislikeButtons from "./Buttons";
import CommentBox from "./CommentBox";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <LikeDislikeButtons />
      <CommentBox />
    </div>
  );
}

export default App;
