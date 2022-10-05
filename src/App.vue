<!-- eslint-disable no-await-in-loop -->
<!-- eslint-disable no-await-in-loop -->
<template>
  <div id="app">
    <div class="container">
      <h1>My pokedex</h1>
      <div class="pokemon-container">
        <PokemonCard v-for="poke in pokemon" :pokemon="poke" :key="poke.id"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PokemonCard from './components/PokemonCard.vue';

@Options({
  components: {
    PokemonCard,
  },
})
export default class App extends Vue {
  get pokemon() {
    return this.$store.state.pokemon.pokemon;
  }

  created() {
    this.loadPokemon();
  }

  // eslint-disable-next-line class-methods-use-this
  async loadPokemon() {
    this.$store.dispatch('emptyList');
    for (let pokeId = 1; pokeId <= 898; pokeId += 1) {
      // eslint-disable-next-line no-await-in-loop
      await this.$store.dispatch('loadPokemon', pokeId);
    }
  }
}
</script>

<style lang="scss">
$primary_cyan: #cfffd0;
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Press Start 2P", display;
}
body {
    background-color: $primary_cyan;

    &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: .625em;
    background-color: rgb(161, 255, 250);
  }
  .container {
  background-color: $primary_cyan;
  text-align: center;
  padding: 1.25em .625em;

  @media (min-width: 31.25em) {
    padding: 1.875em 1.25em;
  }

  .pokemon-container {
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5em, 1fr));
  gap: 1.25em;
  padding: 3.125em 1.25em;
  @media (min-width: 31.25em) {
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
   }
  }
 }
}

</style>
