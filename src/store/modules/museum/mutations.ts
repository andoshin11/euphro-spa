import { MutationTree } from 'vuex'
import { MuseumState, initialState } from './state'
import { Types, StoreItems, StoreItem } from './types'

export const mutations: MutationTree<MuseumState> = {
  [Types.STORE_ITEM]: (state, action: StoreItem) => {
    const item = action.payload
    state.item = item
  },
  [Types.CLEAR_ITEM]: (state) => {
    const initial = initialState()
    state.item = initial.item
  },
  [Types.STORE_ITEMS]: (state, action: StoreItems) => {
    const { items } = action.payload
    state.items = items
  },
  [Types.CLEAR_ITEMS]: (state) => {
    const initial = initialState()
    state.items = initial.items
  }
}
