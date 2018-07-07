import BaseUseCase from '@/usecases/BaseUseCase'
import MuseumRepository from '@/repositories/MuseumRepository'

export interface IDestroyContainerUseCase {
  museumRepository: MuseumRepository;
}

export default class DestroyContainerUseCase implements BaseUseCase {
  museumRepository: MuseumRepository;

  constructor({ museumRepository }: IDestroyContainerUseCase) {
    this.museumRepository = museumRepository
  }

  async execute() {
    await this.museumRepository.clearItems()
    return
  }
}
