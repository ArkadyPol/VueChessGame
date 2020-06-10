<template>
  <canvas :width="width" :height="height"></canvas>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: mapGetters(["width", "height"])
});
</script>

<style scoped>
canvas {
  border: 1px solid red;
  margin: 5px;
}
</style>