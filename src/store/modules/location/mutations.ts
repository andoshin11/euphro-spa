import { MutationTree } from 'vuex'
import { LocationState, initialState } from './state'
import { Types, StoreDistance } from './types'

export const mutations: MutationTree<LocationState> = {
  [Types.STORE_DISTANCE]: (state, action: StoreDistance) => {
    const distance = action.payload
    state.distance = distance
  }
}
