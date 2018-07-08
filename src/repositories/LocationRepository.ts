// import BaseRepository from '@/repositories/BaseRepository'
import store from '@/store'
import { StoreDistance, StoreLocation } from '@/store/modules/location/types'

export default class LocationRepository {

  constructor() {}

  saveDistance(distance: number) {
    store.commit(new StoreDistance(distance))
  }

  saveLocation(params: { lat: number, lng: number, locationName: string }) {
    store.commit(new StoreLocation(params))
  }

  getLocation() {
    return store.state.location
  }
}
