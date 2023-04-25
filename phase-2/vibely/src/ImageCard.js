function ImageCard({ image }) {
  return (
    <div className="image-container">
      <button className="keepBtn">Keep</button>
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <button className="changeBtn">Change</button>
    </div>
  );
}

export default ImageCard;
