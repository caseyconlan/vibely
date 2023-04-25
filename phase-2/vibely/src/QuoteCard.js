function QuoteCard({ id, quoteText, quoteAuthor }) {
  return (
    <div className="quote-container">
      <button className="keepBtn">Keep</button>
      <div className="quote">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-author">- {quoteAuthor}</p>
      </div>
      <button className="changeBtn">Change</button>
    </div>
  );
}

export default QuoteCard;
