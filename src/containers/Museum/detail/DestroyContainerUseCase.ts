import BaseUseCase from '@/usecases/BaseUseCase'
import MuseumRepository from '@/repositories/MuseumRepository'

export interface IDestroyContainerUseCase {
  museumRepository: MuseumRepository;
  id: string
}

export default class DestroyContainerUseCase implements BaseUseCase {
  museumRepository: MuseumRepository;
  id: string

  constructor({ museumRepository, id }: IDestroyContainerUseCase) {
    this.museumRepository = museumRepository
    this.id = id
  }

  async execute() {
    await this.museumRepository.clearItem()
    return
  }
}
