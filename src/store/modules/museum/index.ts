import { Module } from 'vuex'
import { RootState } from '@/store'
import { mutations } from './mutations'
import { MuseumState, initialState } from './state'

export * from './state'

export const store: Module<MuseumState, RootState> = {
  state: initialState,
  mutations
}
