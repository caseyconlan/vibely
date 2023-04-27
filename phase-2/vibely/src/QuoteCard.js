import React, { useState } from "react";
import "./App.css";

function QuoteCard({ quote = {}, setQuote, quoteText, quoteAuthor }) {
  const [prevQuote, setPrevQuote] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuote = () => {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((r) => r.json())
      .then((returnData) => {
        setPrevQuote((prevQuote) => [...prevQuote, quote]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setQuote(returnData.data[0]);
      });
  };

  const handlePrevQuote = () => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex - 1);
    setQuote(prevQuote[currentIndex - 1]);
    setPrevQuote((prevQuote) => prevQuote.slice(0, -1));
  };

  return (
    <div className="quote-container">
      <p onClick={handlePrevQuote} className="backBtn">
        &#60;
      </p>
      <div className="quote">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-author">- {quoteAuthor}</p>
      </div>
      <p onClick={handleNextQuote} className="fwdBtn">
        &#62;
      </p>
    </div>
  );
}

export default QuoteCard;
