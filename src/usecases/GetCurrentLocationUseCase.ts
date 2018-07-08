import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import LocationRepository from '@/repositories/LocationRepository'
import LocationEntity from '@/entities/Location'
import { Position } from "@/entities/Position"

export interface IGetCurrentLocationUseCase {
  locationEntity: LocationEntity
  locationRepository: LocationRepository
  errorService: ErrorService
}

export default class GetCurrentLocationUseCase implements BaseUseCase {
  locationEntity: LocationEntity
  locationRepository: LocationRepository
  errorService: ErrorService

  constructor({ locationEntity, locationRepository, errorService }: IGetCurrentLocationUseCase) {
    this.locationEntity = locationEntity
    this.locationRepository = locationRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      const position = await this.locationEntity.getCurrentLocation() as Position
      console.log('position')
      console.log(position)
      const { latitude, longitude  } = position.coords
      const locationName = await this.locationEntity.getLocationName(latitude, longitude)
      this.locationRepository.saveLocation({
        lat: latitude,
        lng: longitude,
        locationName 
      })
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
