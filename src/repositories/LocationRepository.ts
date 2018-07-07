// import BaseRepository from '@/repositories/BaseRepository'
import store from '@/store'
import { StoreDistance } from '@/store/modules/location/types'

export default class LocationRepository {

  constructor() {}

  saveDistance(distance: number) {
    store.commit(new StoreDistance(distance))
  }

  getDistance() {
    return store.state.location.distance
  }
}
