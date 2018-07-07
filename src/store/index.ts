import Vue from "vue";
import Vuex from "vuex";

// modules
import * as location from '@/store/modules/location'
import * as museum from '@/store/modules/museum'

Vue.use(Vuex);

export interface RootState {
  location: location.LocationState,
  museum: museum.MuseumState
}

export default new Vuex.Store<RootState>({
  modules: {
    location: location.store,
    museum: museum.store
  }
})
