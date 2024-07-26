function PokemonCard({ details }) {
    const { name, height, sprites } = details;

    return (
        <div className="pokemonDetailsCard">
            <h2>
                {name}
            </h2>
            <div>Height: { height }</div>
            <div>
                <div>{sprites?.other.home.front_default}</div>
                <div></div>
            </div>
        </div>
    )
}
export default PokemonCard