export interface IMuseum {
  address: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface INeighborsCriteria {
  lat: number,
  lng: number,
  distance: number
}
