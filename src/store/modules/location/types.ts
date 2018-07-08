export enum Types {
  STORE_DISTANCE = 'location/store_distance',
  STORE_LOCATION = 'location/store_location'
}

export class StoreDistance implements FluxStandardAction {
  type = Types.STORE_DISTANCE
  constructor(public payload: number){}
}

export class StoreLocation implements FluxStandardAction {
  type = Types.STORE_LOCATION
  constructor(public payload: {lat: number, lng: number, locationName: string}){}
}
