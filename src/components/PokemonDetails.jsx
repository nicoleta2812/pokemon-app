import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function PokemonDetails() {
  const [details, setDetails] = useState("");
  const { pokemonName } = useParams();
  console.log(pokemonName);
  console.log(details.sprites);

  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      );
      const data = await res.json();
      console.log(data);
      setDetails(data);
    }
    fetchDetails();
  }, [pokemonName]);

  return (
    <>
      <div>
        <div className="pokemonDetails">
          <h1>Pokemon Details</h1>
        </div>
        <PokemonCard details={details} />
      </div>
    </>
  );
}
export default PokemonDetails;
