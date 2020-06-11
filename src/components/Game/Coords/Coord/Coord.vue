<template>
  <div class="coord">
    <span>{{value}}</span>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Coord extends Vue {
  @Prop([Number, String]) value!: number | string;
}
</script>

<style scoped>
.coord {
  font-size: 28px;
}
</style>