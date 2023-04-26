import React, { useState, useEffect } from "react";
import LikeDislikeButtons from "./Buttons";
import "./App.css";
import "./QuoteCard";
import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";

function Home() {
  const [image, setImage] = useState("");
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/350").then((r) => setImage(r.url));
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((returnData) => setQuote(returnData.data[0]));
  }, []);

  const { id, quoteText, quoteAuthor } = quote;

  const handleFavorite = () => {
    const favoriteQuote = { id, quoteText, quoteAuthor };
    const favoriteImage = { url: image };
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, { quote: favoriteQuote, image: favoriteImage }])
    );
  };

  console.log(image);
  console.log(quote);

  return (
    <div className="home-container">
      <ImageCard image={image} />
      <QuoteCard
        key={id}
        id={id}
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
      />
    </div>
  );
}

export default Home;
