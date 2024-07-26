function PokemonCard({ details }) {
    const { name, height, sprites } = details;

    return (
        <div className="pokemonDetailsCard">
            <h2>
                {name}
            </h2>
            <div>Height: { height }</div>
            <div>
                <div className="pokemon-img">
                    <img src={sprites?.other.home.front_default} alt={name} width="200px"></img>
                </div>
                <div>
                    <img src={sprites.front_default} alt={name} />
                    <img src={sprites.back_default} alt={name} />
                    <img src={sprites.front_shiny} alt={name} />
                    <img src={sprites.back_default} alt={name} />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default PokemonCard