import React, { useState, useEffect } from "react";

function Home() {
  const [img, setImg] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetch("https://picsum.photos/500").then((r) => setImg(r.url));
      fetch("https://quote-garden.onrender.com/api/v3/quotes/random?count=3")
        .then((r) => r.json())
        .then(({ data }) => setQuotes(data));
    }
  }, [isMounted]);

  const quotesToDisplay = quotes.map(({ id, quoteText }) => {
    return <p key={id}>{quoteText}</p>;
  });

  return (
    <div>
      <img src={img}></img>
      <div class="quotes">{quotesToDisplay}</div>
    </div>
  );
}

export default Home;
