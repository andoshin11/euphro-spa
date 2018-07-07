import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import MuseumRepository from '@/repositories/MuseumRepository'

export interface ILoadContainerUseCase {
  museumRepository: MuseumRepository;
  id: string
  errorService: ErrorService
}

export default class LoadContainerUseCase implements BaseUseCase {
  museumRepository: MuseumRepository
  id: string
  errorService: ErrorService

  constructor({ museumRepository, id, errorService }: ILoadContainerUseCase) {
    this.museumRepository = museumRepository
    this.id = id
    this.errorService = errorService
  }

  async execute() {
    try {
      const { item } = await this.museumRepository.fetchItem(this.id)
      this.museumRepository.saveItem(item)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
