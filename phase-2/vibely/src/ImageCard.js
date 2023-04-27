import React, { useState, useEffect } from "react";

function ImageCard({ image, setImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevImages, setPrevImages] = useState([]);

  const handleNext = () => {
    fetch("https://picsum.photos/350").then((r) => {
      setPrevImages((prevImages) => [...prevImages, image]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setImage(r.url);
    });
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setImage(prevImages[currentIndex - 1]);
    setPrevImages((prevImages) => prevImages.slice(0, -1));
  };

  return (
    <div className="image-container">
      <p onClick={handlePrev} className="imgBackBtn">
        &#60;
      </p>
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <p onClick={handleNext} className="imgFwdBtn">
        &#62;
      </p>
    </div>
  );
}

export default ImageCard;
