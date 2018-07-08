export interface LocationState {
  lat: number
  lng: number
  locationName: string
  distance: number
}

export const initialState = (): LocationState => {
  return {
    lat: 35.6811673,
    lng: 139.7670516,
    locationName: '東京都千代田区',
    distance: 5
  }
}
