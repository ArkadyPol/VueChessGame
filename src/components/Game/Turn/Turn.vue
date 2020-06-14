<template>
  <div class="turn">
    <span>turn {{color}}</span>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Turn extends Vue {
  @Prop(String) color!: string;
}
</script>

<style scoped>
.turn {
  position: relative;
  top: -490px;
  left: 560px;
  border: 1px solid red;
  font-size: 22px;
  text-align: center;
  font-style: italic;
  min-width: fit-content;
}
.turn span {
  padding: 25px;
  white-space: pre;
}
</style>