export enum Types {
  STORE_DISTANCE = 'location/store_distance'
}

export class StoreDistance implements FluxStandardAction {
  type = Types.STORE_DISTANCE
  constructor(public payload: number){}
}
