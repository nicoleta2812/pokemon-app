import pokemonType from "../PokemonTypes";
import { Link } from "react-router-dom";

function PokemonCard({ details }) {
  const { name, sprites, types, abilities, stats } = details;
  console.log(types);
  return (
    <div className="pokemonDetailsCard">
      <h2>{name}</h2>
      <div>
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
      <div>
        <div className="pokemon-img">
          <img
            src={sprites?.other.home.front_default}
            alt={name}
            width="200px"
          ></img>
        </div>
        <div>
          <img src={sprites?.front_default} alt={name} />
          <img src={sprites?.back_default} alt={name} />
          <img src={sprites?.front_shiny} alt={name} />
          <img src={sprites?.back_shiny} alt={name} />
        </div>
        <div>
          <h2>Types</h2>
          <div className="types">
            {types?.map((type) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className="card-type"
                style={{ backgroundColor: pokemonType[type.type.name] }}
              >
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Abilitites</h2>
          <div className="abilities">
            {abilities?.map((ability) => (
              // eslint-disable-next-line react/jsx-key
              <div>{ability.ability.name}</div>
            ))}
          </div>
        </div>
        <div>
          <h2>Stats</h2>
          <div>
            {stats?.map((stat) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                {stat.stat.name}: {stat.base_stat}
                <div className="bar">
                  <div
                    className="progress-bar"
                    style={{ width: `${stat.base_stat}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokemonCard;
