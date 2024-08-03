import pokemonType from "../PokemonTypes";
import { Link } from "react-router-dom";

function Card({ pokemon }) {
  console.log(pokemon);
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="card">
        <div className="number">{pokemon.id}</div>
        <div className="card-img">
          <img src={pokemon.sprites.front_default}></img>
        </div>
        <div className="name">{pokemon.name}</div>
        <div className="types">
          {pokemon.types.map((type) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                className="card-type"
                style={{ backgroundColor: pokemonType[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
        <div className="info">
          <div className=" weight">
            <p className="title">Weight</p>
            <p>{pokemon.weight}</p>
          </div>
          <div className=" height">
            <p className="title">Height</p>
            <p>{pokemon.height}</p>
          </div>
          <div className="ability">
            <p className="title">
              Ability: {pokemon.abilities[0].ability.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Card;
