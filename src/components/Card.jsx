

function Card({ pokemon }){
    return (
        <div className="card">
            <div className="card-img">
                <img src={pokemon.sprites.front_default}></img>
            </div>
            <div className="name">{pokemon.name}</div>
            <div className="types">
                {pokemon.types.map((type) => {
                    return (
                        <div className="card-type">

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Card