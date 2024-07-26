import { useState, useEffect } from "react";
import { useParams } from "react-router-dom" 

function PokemonDetails({ }){
    const [details, setDetails] = useState("");
    const { pokemonName } = useParams();
    console.log(pokemonName);

    useEffect(()=>{
        async function fetchDetails(){
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
            const data = await res.json();
            // console.log(data);
            setDetails(data);
        } 
        fetchDetails()
    }, [pokemonName])

    return (
        <div className="pokemonDetailsCard">
            <h1>Pokemon Details</h1>
            <h2>{details.name}</h2>
            <div>{details.height}</div>            
            <div>
               <img src={details.sprites.other.front_default} width="150px"></img>
               <img src={details.sprites.other.back_default} width="150px"></img>
            </div>    
            </div>
    )
}
export default PokemonDetails;