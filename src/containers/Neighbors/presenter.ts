import { IMuseum, INeighborsCriteria } from '@/entities/Museum'
import MuseumRepository from '@/repositories/MuseumRepository'
import LocationRepository from '@/repositories/LocationRepository'

export interface IPresenter {
  locationRepository: LocationRepository
  museumRepository: MuseumRepository
}

export interface IPresenterState {
  items: IMuseum[],
  count: number,
  neighborParams: INeighborsCriteria,
}

export default ({ museumRepository, locationRepository }: IPresenter): IPresenterState => {
  const items = museumRepository.getItems()
  return {
    items,
    count: items ? items.length : 0,
    neighborParams: {
      lat: 35.6628711,
      lng: 139.7313041,
      distance: locationRepository.getDistance()
    }
  }
}
