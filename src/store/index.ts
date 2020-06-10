import Vue from "vue";
import Vuex from "vuex";
import { createDirectStore } from "direct-vuex";

Vue.use(Vuex);

const { store } = createDirectStore({
  state: {
    width: 480,
    height: 480,
    ctx: null as null | CanvasRenderingContext2D,
  },
  mutations: {
    setContext(state, ctx: CanvasRenderingContext2D) {
      state.ctx = ctx;
    },
  },
});

export type AppStore = typeof store;
declare module "vuex" {
  interface Store<S> {
    direct: AppStore;
  }
}

export default store;
