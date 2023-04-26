import React from "react";
import "./App.css";

function QuoteCard({ id, quoteText, quoteAuthor }) {
  return (
    <div className="quote-container">
<<<<<<< HEAD
=======
      <p className="backBtn">&#60;</p>
>>>>>>> 9d63ee883ae5bc6613611ec17add552615ccde5e
      <div className="quote">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-author">- {quoteAuthor}</p>
      </div>
<<<<<<< HEAD
=======
      <p className="fwdBtn">&#62;</p>
>>>>>>> 9d63ee883ae5bc6613611ec17add552615ccde5e
    </div>
  );
}

export default QuoteCard;
