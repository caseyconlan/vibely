import React, { useState } from "react";
import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";
import "./App.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((f) => f.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      <div className="card-container">
        {favorites.map(({ id, quoteText, quoteAuthor, image }) => (
          <div key={id} className="card">
            <button
              className="remove-favorite-button"
              onClick={() => handleRemoveFavorite(id)}
            >
              X
            </button>
            <ImageCard image={image} />
            <QuoteCard id={id} quoteText={quoteText} quoteAuthor={quoteAuthor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
