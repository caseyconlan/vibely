<<<<<<< HEAD
import React from "react";
import "./App.css";

function ImageCard({ image, onKeep }) {
  const handleKeepClick = () => {
    onKeep();
  };

  return (
    <div className="image-container">
      <button className="imgKeepBtn" onClick={handleKeepClick}>Keep</button>
=======
import React, { useState, useEffect } from "react";

function ImageCard({ image, changeImg }) {
  const [prevImages, setPrevImages] = useState({
    imgUrl: "",
  });

  return (
    <div className="image-container">
      <p className="imgBackBtn">&#60;</p>
>>>>>>> 9d63ee883ae5bc6613611ec17add552615ccde5e
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <p className="imgFwdBtn">&#62;</p>
    </div>
  );
}

export default ImageCard;
