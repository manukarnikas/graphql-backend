const graphql = require("graphql");
const ownerService = require("../Service/OwnerService");
const pokemonService = require("../Service/PokemonService");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const EvolutionType = new GraphQLObjectType({
  name: "Evolution",
  fields: () => ({
    num: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const PokemonType = new GraphQLObjectType({
  name: "Pokemon",
  fields: () => ({
    id: { type: GraphQLInt },
    num: { type: GraphQLString },
    name: { type: GraphQLString },
    img: { type: GraphQLString },
    type: { type: GraphQLList(GraphQLString) },
    height: { type: GraphQLString },
    weight: { type: GraphQLString },
    candy: { type: GraphQLString },
    candy_count: { type: GraphQLInt },
    egg: { type: GraphQLString },
    spawn_chance: { type: GraphQLInt },
    avg_spawns: { type: GraphQLInt },
    spawn_time: { type: GraphQLString },
    multipliers: { type: GraphQLList(GraphQLInt) },
    weaknesses: { type: GraphQLList(GraphQLString) },
    next_evolution: { type: GraphQLList(EvolutionType) },
  }),
});

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    owns: {
      type: GraphQLList(PokemonType),
      resolve(parent,args){
          return pokemonService.getPokemons(parent.owns)
      }
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    owners: {
      type: GraphQLList(OwnerType),
      resolve(parent, args) {
        return ownerService.getAllOwners();
      },
    },
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return ownerService.getOwner(args.id);
      },
    },
    pokemon: {
      type: GraphQLList(PokemonType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pokemonService.getPokemon(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
