<template>
  <div>
    <Coord v-for="value in values" :key="value" :value="value" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Coord from "./Coord/Coord.vue";

@Component({
  components: {
    Coord
  }
})
export default class Coords extends Vue {
  @Prop(Array) values!: number[] | string[];
}
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