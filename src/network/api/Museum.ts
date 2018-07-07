import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest';
import { HTTPMethod } from '@/network/APIClient';
import { IMuseum, INeighborsCriteria } from '@/entities/Museum'

export namespace MuseumAPI {
  // List museums
  export class GetAll implements APIRequest<List<IMuseum>> {
    response: List<IMuseum>;
    path = '/museums';
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data
  }

  // Get neighbors
  export class GetNeighbors implements APIRequest<List<IMuseum>> {
    response: List<IMuseum>;
    path = '/neighbors';
    method = HTTPMethod.GET;
    parse = (data: AxiosResponse) => data.data
    constructor(public params: INeighborsCriteria) {}
  }
}
