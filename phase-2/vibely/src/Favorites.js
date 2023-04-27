import React from "react";
import "./App.css";

function Favorites({ favorites, setFavorites }) {
  const handleRemoveFavorite = (prevId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(({ id }) => id !== prevId)
    );
    fetch(`http://localhost:3001/inspirojis/${prevId}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {favorites.map(({ id, img, quote, author, likes, dislikes }) => (
          <div key={id} className="fav-card">
            <img src={img} alt="Favorite" />
            <p>{quote}</p>
            <p>{author}</p>
            <button
              className="removeBtn"
              onClick={() => handleRemoveFavorite(id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
