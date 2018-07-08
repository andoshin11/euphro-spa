export interface IMuseum {
  address: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  img: string;
  entry: string;
  url: string;
}

export interface INeighborsCriteria {
  lat: number,
  lng: number,
  distance: number
}
