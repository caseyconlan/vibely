import React, { useState } from "react";

function LikeDislikeButtons({ index }) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  function handleLikeClick() {
    setLikeCount((prevCount) => prevCount + 1);
  }

  function handleDislikeClick() {
    setDislikeCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <p>{likeCount}</p>
      <button onClick={handleDislikeClick}>Dislike</button>
      <p>{dislikeCount}</p>
    </div>
  );
}

export default LikeDislikeButtons;