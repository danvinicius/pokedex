<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <div class="card" @click="changeImg">
        <h2>{{pokemon.name}}</h2>
        <img :src="isFront ? pokemon.frontImg : pokemon.backImg"
        :alt="pokemon.name" :title="pokemon.name">
        <h5>{{pokemon.id}}</h5>
        <div class="typesContainer">
            <div v-for="type in pokemon.types" :key="type.type.name"
            :class="type.type.name">{{type.type.name}}</div>
        </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    pokemon: Object,
  },
})
export default class PokemonCard extends Vue {
  isFront = true;

  changeImg() {
    this.isFront = !this.isFront;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$water: rgb(58, 143, 255);
$white: #fff;
$gray: rgb(204, 204, 181);
$rock: rgb(202, 172, 0);
$dark: rgb(31, 102, 73);

.card {
  background-image: linear-gradient(
    to right bottom,
    #c1e1ed,
    #cfffd0
  );
  height: 19em;
  border-radius: 1.25em;
  padding: 1.25em 0.3125em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: .3s;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 31.25em) {
    padding: 1.25em .625em;
  }

  h2 {
  font-size: .9em;

  @media (min-width: 31.25em) {
    font-size: 1.125em;
  }
}
 img {
  height: 9.375em;
  position: relative;
  cursor: pointer;
}
&::before {
    content: '';
    background: $white;
    border-radius: 50%;
    position: absolute;
    display: block;
    height: 6.25em;
    width: 6.25em;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
}
.typesContainer, .typesContainer div {
  display: inline-block;
  border-radius: .9375em;
  color: $white;
  text-transform: uppercase;
  padding: .3125em;
  display: flex;
  flex-wrap: wrap;
  font-size: .9375em;
  gap: .1875em;
  align-items: center;
  justify-content: center;
}
.normal {
  background: $gray;
}
.fighting {
  background: tomato;
}
.flying {
  background: linear-gradient(to bottom, lightblue 50%, $gray);
}
.poison {
  background: linear-gradient(to bottom, pink 50%, purple 50%);
}
.ground {
  background: linear-gradient(to bottom, gold 50%, $rock);
}
.rock {
  background: $rock;
}
.bug {
  background: gold;
}
.ghost {
  background: purple;
}
.steel {
  background: linear-gradient(
    to bottom,
    $gray 50%,
    $dark
  );
}
.fairy {
  background: linear-gradient(to bottom, lightblue 50%, pink);
}
.fire {
  background: orangered;
}
.water {
  background: $water;
}
.grass {
  background: lightgreen;
}
.electric {
  background: orange;
}
.psychic {
  background: pink;
}
.ice {
  background: lightblue;
}
.dragon {
  background: linear-gradient(to bottom, $water 50%, tomato);
}
.dark {
  background: $dark;
}
}
</style>
