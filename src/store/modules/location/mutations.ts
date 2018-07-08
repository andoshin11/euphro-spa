import { MutationTree } from 'vuex'
import { LocationState } from './state'
import { Types, StoreDistance, StoreLocation } from './types'

export const mutations: MutationTree<LocationState> = {
  [Types.STORE_DISTANCE]: (state, action: StoreDistance) => {
    const distance = action.payload
    state.distance = distance
  },
  [Types.STORE_LOCATION]: (state, action: StoreLocation) => {
    const { lat, lng, locationName } = action.payload
    state.lat = lat
    state.lng = lng
    state.locationName = locationName
  }
}
