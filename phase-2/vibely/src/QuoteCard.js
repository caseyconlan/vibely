function QuoteCard({ id, quoteText, quoteAuthor }) {
  return (
    <div className="quote-container">
      <p className="backBtn">&#60;</p>
      <div className="quote">
        <p className="quote-text">{quoteText}</p>
        <p className="quote-author">- {quoteAuthor}</p>
      </div>
      <p className="fwdBtn">&#62;</p>
    </div>
  );
}

export default QuoteCard;
