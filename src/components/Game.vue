<template>
  <canvas :width="width" :height="height" ref="canvas"></canvas>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    width() {
      return this.$store.direct.state.width;
    },
    height() {
      return this.$store.direct.state.height;
    }
  },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      this.$store.direct.commit.setContext(ctx);
    }
  },
  methods: {}
});
</script>

<style scoped>
canvas {
  border: 1px solid red;
  margin-left: 25px;
  margin-top: 10px;
}
</style>