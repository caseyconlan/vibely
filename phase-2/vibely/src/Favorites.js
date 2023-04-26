import React from "react";
import "./App.css";

function Favorites({ favorites, setFavorites }) {

  const handleRemoveFavorite = (favIndex) => {
    setFavorites((prevFavorites) => prevFavorites.filter((_, index) => index !== favIndex));
  };

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((fav, index) => (
          <div key={index} className="fav-card">
            <img src={fav.image} alt="Favorite" />
            <p>{fav.quoteText}</p>
            <p>{fav.quoteAuthor}</p>
            <button className="removeBtn" onClick={() => handleRemoveFavorite(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
