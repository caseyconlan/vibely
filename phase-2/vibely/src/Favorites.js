import React from "react";
import "./App.css";

function Favorites({ favorites, setFavorites }) {
  const handleRemoveFavorite = (favIndex) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((_, index) => index !== favIndex)
    );
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
            <button className="removeBtn" onClick={() => handleRemoveFavorite(id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
