import React, { useState, useEffect } from "react";
import LikeDislikeButtons from "./Buttons";
import "./App.css";

function Home() {
  const [img, setImg] = useState("");
  const [quote, setQuote] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetch("https://picsum.photos/500").then((r) => setImg(r.url));
      fetch("https://quote-garden.onrender.com/api/v3/quotes/random?count=1")
        .then((r) => r.json())
        .then(({ data }) => setQuote(data[0]));
    }
  }, [isMounted]);

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={img} alt="Random" />
      </div>
      <div className="quote-container">
        <p className="quote">{quote.quoteText}</p>
        <p className="author">- {quote.quoteAuthor}</p>
        <LikeDislikeButtons />
      </div>
    </div>
  );
}

export default Home;
