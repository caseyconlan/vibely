import React, { useState } from "react";

function LikeDislikeButtons() {
  const [likeCounts, setLikeCounts] = useState([0, 0, 0]);
  const [dislikeCounts, setDislikeCounts] = useState([0, 0, 0]);

  function handleLikeClick(index) {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[index] += 1;
    setLikeCounts(newLikeCounts);
  }

  function handleDislikeClick(index) {
    const newDislikeCounts = [...dislikeCounts];
    newDislikeCounts[index] += 1;
    setDislikeCounts(newDislikeCounts);
  }

  return (
    <div>
      <div>
        <button onClick={() => handleLikeClick(0)}>Like</button>
        <p>{likeCounts[0]}</p>
        <button onClick={() => handleDislikeClick(0)}>Dislike</button>
        <p>{dislikeCounts[0]}</p>
      </div>
      <div>
        <button onClick={() => handleLikeClick(1)}>Like</button>
        <p>{likeCounts[1]}</p>
        <button onClick={() => handleDislikeClick(1)}>Dislike</button>
        <p>{dislikeCounts[1]}</p>
      </div>
      <div>
        <button onClick={() => handleLikeClick(2)}>Like</button>
        <p>{likeCounts[2]}</p>
        <button onClick={() => handleDislikeClick(2)}>Dislike</button>
        <p>{dislikeCounts[2]}</p>
      </div>
    </div>
  );
}

export default LikeDislikeButtons;
