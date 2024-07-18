import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getPokemonList from './components/pokemonList'
import getPokemon from './components/pokemonList'

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl]  = useState("");
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(()=> {
    async function fetchData(){
      let response = await getPokemonList(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.revious);   
      await loadingPokemon(response.results);
     
    }
    fetchData();
  }, []);
  async function loadingPokemon(data){
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonInfo = await getPokemon(pokemon.url);
      return pokemonInfo
    } ))
    setPokemonData(_pokemonData);
  }
  console.log(pokemonData);
  return (
    <>      
      <h1>hello vite</h1>
    </>
  )
}

export default App
