<template>
  <div class="coord">
    <span>A</span>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Coord extends Vue {}
</script>

<style scoped>
.coord {
  font-size: 28px;
}
</style>