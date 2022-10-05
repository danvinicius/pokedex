export type Pokemon = {
    id: number,
    name: string,
    frontImg: string,
    backImg: string,
    types: string[],
}

export default {
  state: {
    pokemon: new Array<Pokemon>(),
  },
  mutations: {
    setPokemon(state: any, pokemon: Array<Pokemon>) {
      state.pokemon = pokemon;
    },
    appendPokemon(state: any, pokemon: Pokemon) {
      state.pokemon.push(pokemon);
    },
  },
  actions: {
    async emptyList({ state, commit }: any) {
      commit('setPokemon', []);
    },
    async loadPokemon({ state, commit }: any, id: number) {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const buscaPokemon = await fetch(url);
      const data: any = await buscaPokemon.json();
      const newPoke: Pokemon = {
        id: data.id,
        name: data.name,
        frontImg: data.sprites.front_default,
        backImg: data.sprites.back_default,
        types: data.types,
      };
      commit('appendPokemon', newPoke);
    },
  },

};
