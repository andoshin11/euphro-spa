export interface LocationState {
  lat: number
  lng: number
  distance: number
}

export const initialState = (): LocationState => {
  return {
    lat: 35.6811673,
    lng: 139.7670516,
    distance: 5
  }
}
