import BaseRepository from '@/repositories/BaseRepository'
import store from '@/store'
import { APIClient } from '@/network/APIClient'
import { MuseumAPI } from '@/network/api/Museum'
import { StoreItems, ClearItems } from '@/store/modules/museum/types'
import { IMuseum, INeighborsCriteria } from '@/entities/Museum'

export default class MuseumRepository implements BaseRepository {

  constructor() {}

  async fetchItems(params: INeighborsCriteria) {
    return await APIClient.shared.request(new MuseumAPI.GetNeighbors(params))
  }

  saveItems(params: List<IMuseum>) {
    store.commit(new StoreItems(params))
  }

  clearItems(){
    store.commit(new ClearItems())
  }

  getItems(): IMuseum[] {
    return store.state.museum.items
  }
}
