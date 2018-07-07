import { IMuseum, INeighborsCriteria } from '@/entities/Museum'
import MuseumRepository from '@/repositories/MuseumRepository'

export interface IPresenter {
  museumRepository: MuseumRepository
}

export interface IPresenterState {
  items: IMuseum[],
  count: number,
  neighborParams: INeighborsCriteria
}

export default ({ museumRepository }: IPresenter): IPresenterState => {
  const items = museumRepository.getItems()
  return {
    items,
    count: items ? items.length : 0,
    neighborParams: {
      lat: 35.6628711,
      lng: 139.7313041,
      distance: 50
    }
  }
}
