import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import MuseumRepository from '@/repositories/MuseumRepository'
import { INeighborsCriteria } from '@/entities/Museum'

export interface ILoadContainerUseCase {
  museumRepository: MuseumRepository;
  request: INeighborsCriteria
  errorService: ErrorService
}

export default class LoadContainerUseCase implements BaseUseCase {
  museumRepository: MuseumRepository;
  request: INeighborsCriteria
  errorService: ErrorService

  constructor({ museumRepository, request, errorService }: ILoadContainerUseCase) {
    this.museumRepository = museumRepository
    this.request = request
    this.errorService = errorService
  }

  async execute() {
    try {
      const data = await this.museumRepository.fetchItems(this.request)
      this.museumRepository.saveItems(data)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
