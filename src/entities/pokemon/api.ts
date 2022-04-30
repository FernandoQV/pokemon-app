const pokemonApi={
    getPokemonById:async(id:number)=>{
        const response=await fetch(`http://localhost:3000/api/pokemon/${id.toString()}`,{
            headers:{"Content-Type":"application/json"}
        })
        return response.json()
    }
}
export default pokemonApi