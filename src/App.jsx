import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";

  async function getPokemonList(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  }
  async function getPokemon(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  }
  useEffect(() => {
    async function fetchData() {
      let response = await getPokemonList(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.revious);
      await loadingPokemon(response.results);
    }
    fetchData();
  }, []);

  async function nextPage() {
    let data = await getPokemonList(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }
  async function prevPage() {
    let data = await getPokemonList(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }
  async function loadingPokemon(data) {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonInfo = await getPokemon(pokemon.url);
        return pokemonInfo;
      })
    );
    setPokemonData(_pokemonData);
  }
  console.log(pokemonData);
  return (
    <>
      <h1>Choose your pokemon</h1>
      <div className="container">
        {pokemonData.map((pokemon, index) => {
          return <Card key={index} pokemon={pokemon} />;
        })}
      </div>
      <Footer
        nextPage={nextPage}
        prevPage={prevPage}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
      />
    </>
  );
}
export default App;
