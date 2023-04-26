import React, { useState, useEffect } from "react";
import LikeDislikeButtons from "./Buttons";
import "./App.css";
import "./QuoteCard";
import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";

function Home() {
  const [image, setImage] = useState("");
  const [quote, setQuote] = useState({});

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

  return (
    <div className="home-container">
      <ImageCard image={image} changeImg={changeImg} />
      <QuoteCard
        key={id}
        id={id}
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
      />
      <div className="saveBtnContainer">
        <button className="saveBtn">Save</button>
      </div>
    </div>
  );
}

export default Home;
