import { Module } from 'vuex'
import { RootState } from '@/store'
import { mutations } from './mutations'
import { LocationState, initialState } from './state'

export * from './state'

export const store: Module<LocationState, RootState> = {
  state: initialState,
  mutations
}
