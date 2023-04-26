import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Favorites from "./Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  console.log(favorites);

  useEffect(() => {
    fetch("http://localhost:3001/inspirojis")
      .then((r) => r.json())
      .then((data) => setFavorites(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home favorites={favorites} setFavorites={setFavorites} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/favorites">
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
