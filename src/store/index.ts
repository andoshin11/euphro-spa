import Vue from "vue";
import Vuex from "vuex";

// modules
import * as museum from '@/store/modules/museum'

Vue.use(Vuex);

export interface RootState {
  museum: museum.MuseumState
}

export default new Vuex.Store<RootState>({
  modules: {
    product: museum.store
  }
})
