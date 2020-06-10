import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 480,
    height: 480,
  },
  getters: {
    width(state) {
      return state.width;
    },
    height(state) {
      return state.height;
    },
  },
});
