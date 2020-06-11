<template>
  <div>
    <Coord v-for="n in 8" :key="n" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Coord from "./Coord/Coord.vue";

@Component({
  components: {
    Coord
  }
})
export default class Coords extends Vue {}
</script>

<style scoped>
.vert-coords {
  grid-area: left;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  align-items: center;
  justify-content: center;
}

.hor-coords {
  grid-area: bottom;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  justify-content: center;
}
</style>