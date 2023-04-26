import React, { useState, useEffect } from "react";
import "./App.css";
import "./QuoteCard";
import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";

function Home({ favorites, setFavorites }) {
  const [image, setImage] = useState("");
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch("https://picsum.photos/350").then((r) => {
      if (!ignore) {
        setImage(r.url);
      }
    });
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

  const handleKeep = () => {
    const newFavorite = { id, quoteText, quoteAuthor, image };
    setFavorites([...favorites, newFavorite]);
  };  

  return (
    <div className="home-container">
      <ImageCard image={image} onKeep={handleKeep} />
      <QuoteCard key={id} id={id} quoteText={quoteText} quoteAuthor={quoteAuthor} />
      <button className="saveBtn" onClick={handleKeep}>Save</button>
    </div>
  );
}

export default Home;
