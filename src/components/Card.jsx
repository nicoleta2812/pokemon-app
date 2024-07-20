import pokemonType from "../PokemonTypes"

function Card({ pokemon }){
    return (
        <div className="card">
            <div className="number">{pokemon.id}</div>
            <div className="card-img">
                <img src={pokemon.sprites.front_default}></img>
            </div>
            <div className="name">{pokemon.name}</div>
            <div className="types">
                {pokemon.types.map((type) => {
                    return (
                        <div className="card-type" style={{ backgroundColor: pokemonType[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )
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
            <div className=" ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}
export default Card