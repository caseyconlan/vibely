import React from "react";
import "./App.css";

function ImageCard({ image, onKeep }) {
  const handleKeepClick = () => {
    onKeep();
  };

  return (
    <div className="image-container">
      <button className="imgKeepBtn" onClick={handleKeepClick}>Keep</button>
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <button className="imgChangeBtn">Change</button>
    </div>
  );
}

export default ImageCard;
