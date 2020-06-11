import Vue from "vue";
import Vuex from "vuex";
import { IGameState } from "./modules/game";

Vue.use(Vuex);

export interface IRootState {
  game: IGameState;
}

export default new Vuex.Store<IRootState>({});
