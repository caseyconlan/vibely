function ImageCard({ image }) {
  return (
    <div className="image-container">
      <img src={image} alt="Randomly Generated Photo" />
    </div>
  );
}

export default ImageCard;
