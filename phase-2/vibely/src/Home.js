import React, { useState, useEffect } from "react";
import LikeDislikeButtons from "./Buttons";
import "./App.css";
import "./QuoteCard";
import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";

function Home({ favorites, setFavorites }) {
  const [image, setImage] = useState("");
  const [quote, setQuote] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://picsum.photos/350").then((r) => setImage(r.url));
=======
    let ignore = false;
    fetch("https://picsum.photos/350").then((r) => {
      if (!ignore) {
        setImage(r.url);
      }
    });
>>>>>>> 9d63ee883ae5bc6613611ec17add552615ccde5e
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((returnData) => {
        if (!ignore) {
          setQuote(returnData.data[0]);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  function changeImg(imgUrl) {
    setImage(imgUrl);
  }

  const { id, quoteText, quoteAuthor } = quote;

<<<<<<< HEAD
  const handleKeep = () => {
    const newFavorite = { id, quoteText, quoteAuthor, image };
    setFavorites([...favorites, newFavorite]);
  };

  return (
    <div className="home-container">
      <ImageCard image={image} onKeep={handleKeep} />
=======
  return (
    <div className="home-container">
      <ImageCard image={image} changeImg={changeImg} />
>>>>>>> 9d63ee883ae5bc6613611ec17add552615ccde5e
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
