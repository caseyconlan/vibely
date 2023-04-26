import React, { useState, useEffect } from "react";

function ImageCard({ image, changeImg }) {
  const [prevImages, setPrevImages] = useState({
    imgUrl: "",
  });

  return (
    <div className="image-container">
      <p className="imgBackBtn">&#60;</p>
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <p className="imgFwdBtn">&#62;</p>
    </div>
  );
}

export default ImageCard;
