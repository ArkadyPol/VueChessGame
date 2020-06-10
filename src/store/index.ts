import Vue from "vue";
import Vuex from "vuex";
import game from "./modules/game";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    game
  },
});

export default store;
