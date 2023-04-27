import React, { useState, useEffect } from "react";

function ImageCard({ image, handleNextImg }) {
  return (
    <div className="image-container">
      <p className="imgBackBtn">&#60;</p>
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <p className="imgFwdBtn" onClick={handleNextImg}>
        &#62;
      </p>
    </div>
  );
}

export default ImageCard;
