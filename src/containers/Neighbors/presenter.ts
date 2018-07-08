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
  locationName: string
}

export default ({ museumRepository, locationRepository }: IPresenter): IPresenterState => {
  const items = museumRepository.getItems()
  const { lat, lng, locationName, distance } = locationRepository.getLocation()
  return {
    items,
    count: items ? items.length : 0,
    neighborParams: {
      lat,
      lng,
      distance
    },
    locationName
  }
}
