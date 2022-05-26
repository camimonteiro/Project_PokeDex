import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState({});

  async function useFetch (name) {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const dataJson = await data.json();
      setPokemon(dataJson);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <input type='text' onChange={(event) => setName(event.target.value)}/>
      <button onClick={() => useFetch(name)}>Pesquisar</button>
      <br />
      {() => {
        if (pokemon.length > 0) {
          return <img src={pokemon.sprites.front_default} />
        } else {
          return
        }
      }}
      <h1>{pokemon.name}</h1>
    </div>
  );
}

export default App;
