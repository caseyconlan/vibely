import React, { useState, useEffect } from "react";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://musicbrainz.org/ws/2/artist/?query=ac%5C%2Fdcfmt=json")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}
export default App;
