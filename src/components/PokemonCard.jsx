import pokemonType from "../PokemonTypes";

function PokemonCard({ details }) {
  const { name, height, sprites, types, abilities } = details;
  console.log(types);
  return (
    <div className="pokemonDetailsCard">
      <h2>{name}</h2>
      <div>Height: {height}</div>
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
              <div>{ability.ability.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokemonCard;
