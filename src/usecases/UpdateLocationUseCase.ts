import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import LocationRepository from '@/repositories/LocationRepository'
import LocationEntity from '@/entities/Location'

export interface IUpdateLocationUseCase {
  lat: number
  lng: number
  locationEntity: LocationEntity
  locationRepository: LocationRepository
  errorService: ErrorService
}

export default class UpdateLocationUseCase implements BaseUseCase {
  lat: number
  lng: number
  locationEntity: LocationEntity
  locationRepository: LocationRepository
  errorService: ErrorService

  constructor({ lat, lng, locationEntity, locationRepository, errorService }: IUpdateLocationUseCase) {
    this.lat = lat
    this.lng = lng
    this.locationEntity = locationEntity
    this.locationRepository = locationRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      const locationName = await this.locationEntity.getLocationName(this.lat, this.lng)
      this.locationRepository.saveLocation({
        lat: this.lat,
        lng: this.lng,
        locationName 
      })
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
