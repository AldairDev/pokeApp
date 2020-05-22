import React from "react";
import Card from "./components/card";
import Pokemon from "./components/pokemon";
import Nav from "./components/navbar";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>pokeApi</h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Card} />
        <Route exact path="/:pokemonId" component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
