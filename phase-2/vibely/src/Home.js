import React, { useState, useEffect } from "react";

function Home() {
  const [img, setImg] = useState("");
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/500").then((r) => setImg(r.url));
    fetch("https://api.goprogram.ai/inspiration")
      .then((r) => r.json())
      .then((data) => setQuote(data.quote));
  }, []);

  return (
    <div>
      <img src={img}></img>
      <p>{quote}</p>
    </div>
  );
}

export default Home;
