export default async function getPokemonList(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            resolve(data);
        })
    })
}
export async function getPokemon(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
}