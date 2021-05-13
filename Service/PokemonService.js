const pokemon = require('../MongooseSchema/Pokemon');


const getPokemon = async (id)=>{
    return await pokemon.find({id:id});
}

const getPokemons = async (data) =>{
    data = await Promise.all(data.map(async (val)=>{
        const result = await pokemon.find({id:val});
        if(result?.[0]){
            return result[0];
        }
        return;
    }));
    return data;
}


module.exports = {
    getPokemon:getPokemon,
    getPokemons: getPokemons
}