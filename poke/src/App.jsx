import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';

/* 
fetch data ✅
place into card props via drilling
render card component onto page
style cards and front end
*/

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemon(id) {
      // console.log("id", id);

      let response = await fetch (`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
      let data = await response.json();
      // console.log("all data", data);

      const newPokemon = {
        id: data.pokemon[`${id}`].id,
        num: data.pokemon[`${id}`].num,
        name: data.pokemon[`${id}`].name,
        image: data.pokemon[`${id}`].img,
        type: data.pokemon[`${id}`].type[0],
        type2: data.pokemon[`${id}`].type[1],        
      };  
      
      setPokemons((prev)=> [...prev, newPokemon]);
    }
    getPokemon();
  }, []);

  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
