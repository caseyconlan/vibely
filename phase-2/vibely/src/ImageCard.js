function ImageCard({ image }) {
  return (
    <div className="image-container">
      <button className="imgKeepBtn">Keep</button>
      <div className="image">
        <img src={image} alt="Randomly Generated Photo" />
      </div>
      <button className="imgChangeBtn">Change</button>
    </div>
  );
}

export default ImageCard;
