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
    console.log("running effect");
    fetch("https://picsum.photos/350").then((r) => setImage(r.url));
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((returnData) => setQuote(returnData.data[0]));
  }, []);

  const { id, quoteText, quoteAuthor } = quote;

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
      <div className="saveBtnContainer">
        <button className="saveBtn">Save</button>
      </div>
    </div>
  );
}

export default Home;
