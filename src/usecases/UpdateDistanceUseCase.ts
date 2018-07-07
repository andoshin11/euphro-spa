import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import LocationRepository from '@/repositories/LocationRepository'

export interface IUpdateDistanceUseCase {
  locationRepository: LocationRepository
  distance: number
  errorService: ErrorService
}

export default class UpdateDistanceUseCase implements BaseUseCase {
  locationRepository: LocationRepository
  distance: number
  errorService: ErrorService

  constructor({ locationRepository, distance, errorService }: IUpdateDistanceUseCase) {
    this.locationRepository = locationRepository
    this.distance = distance
    this.errorService = errorService
  }

  async execute() {
    try {
      this.locationRepository.saveDistance(this.distance)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
