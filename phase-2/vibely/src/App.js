import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Favorites from "./Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

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
