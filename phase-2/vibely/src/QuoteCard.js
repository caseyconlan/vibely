function QuoteCard({ id, quoteText, quoteAuthor }) {
  return (
    <div className="quote-container">
      <p className="quote-text">{quoteText}</p>
      <p className="quote-author">- {quoteAuthor}</p>
    </div>
  );
}

export default QuoteCard;
