import React, { useState, useEffect } from "react";
import "./App.css";
import "./QuoteCard";
import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";

function Home({ setFavorites, favorites }) {
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

  function handleNextImg() {
    fetch("https://picsum.photos/350").then((r) => setImage(r.url));
  }

  function handleNextQuote() {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((returnData) => setQuote(returnData.data[0]));
  }

  const { id, quoteText, quoteAuthor } = quote;

  const newFavorite = {
    img: "",
    quote: "",
    author: "",
    likes: 0,
    dislikes: 0,
  };

  function handleClick() {
    const updateNewFavorite = {
      ...newFavorite,
      img: image,
      quote: quoteText,
      author: quoteAuthor,
    };
    fetch("http://localhost:3001/inspirojis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateNewFavorite),
    })
      .then((r) => r.json())
      .then((addedFavorite) => setFavorites([...favorites, addedFavorite]));
  }

  return (
    <div className="home-container">
      <ImageCard image={image} handleNextImg={handleNextImg} />
      <QuoteCard
        key={id}
        id={id}
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        handleNextQuote={handleNextQuote}
      />
      <div className="saveBtnContainer">
        <button className="saveBtn" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Home;
