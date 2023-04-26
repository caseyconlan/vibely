import React from "react";
import "./App.css";

function QuoteCard({ id, quoteText, quoteAuthor }) {
  return (
    <div className="quote-container">
      <div className="quote">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-author">- {quoteAuthor}</p>
      </div>
    </div>
  );
}

export default QuoteCard;
