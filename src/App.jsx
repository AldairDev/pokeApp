import React from 'react'
import Button from '@material-ui/core/Button'
import Pokemon from './components/pokemonData'
function App() {

  return (
    <div>
      <h1>pokeApi</h1>
      <Button variant='outlined' >
        Hello
      </Button>
      <Pokemon />
    </div>
  );
}

export default App;
