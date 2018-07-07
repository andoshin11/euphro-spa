import { IMuseum } from '@/entities/Museum'
import MuseumRepository from '@/repositories/MuseumRepository'

export interface IPresenter {
  museumRepository: MuseumRepository
}

export interface IPresenterState {
  item: IMuseum
}

export default ({ museumRepository }: IPresenter): IPresenterState => {
  return {
    item: museumRepository.getItem(), // TODO: Manage with ID
  }
}
