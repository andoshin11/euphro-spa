import { IMuseum, INeighborsCriteria } from '@/entities/Museum'
import MuseumRepository from '@/repositories/MuseumRepository'

export interface IPresenter {
  museumRepository: MuseumRepository
}

export interface IPresenterState {
  items: IMuseum[],
  neighborParams: INeighborsCriteria
}

export default ({ museumRepository }: IPresenter): IPresenterState => {
  return {
    items: museumRepository.getItems(),
    neighborParams: {
      lat: 35.6628711,
      lng: 139.7313041,
      distance: 2
    }
  }
}
