<template>
  <div class="coord">
    <span>A</span>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Coord extends Vue {}
</script>

<style scoped>
.coord {
  font-size: 28px;
}
</style>