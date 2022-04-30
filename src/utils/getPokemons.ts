const  MAX_COUNT_POKEMON=493
export const getIdPokemon:(idPokemon1?:number)=>number=(idPokemon1)=>{
    const idPokemon=Math.floor((Math.random() *(MAX_COUNT_POKEMON))+1)
    if(idPokemon!==idPokemon1)return idPokemon
    return getIdPokemon(idPokemon)
}

export const getIdPokemons=()=>{
    const idPokemon1=getIdPokemon()
    const idPokemon2=getIdPokemon(idPokemon1)
    return [idPokemon1,idPokemon2]
}