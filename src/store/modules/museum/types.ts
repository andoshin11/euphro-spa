import { IMuseum } from '@/entities/Museum'

export enum Types {
  STORE_ITEM = 'product/store_item',
  CLEAR_ITEM = 'product/clear_item',
  STORE_ITEMS = 'product/store_items',
  CLEAR_ITEMS = 'product/clear_items'
}

export class StoreItem implements FluxStandardAction {
  type = Types.STORE_ITEM
  constructor(public payload: IMuseum){}
}

export class ClearItem implements FluxStandardAction {
  type = Types.CLEAR_ITEM
  payload = null
}

export class StoreItems implements FluxStandardAction {
  type = Types.STORE_ITEMS
  constructor(public payload: List<IMuseum>){}
}

export class ClearItems implements FluxStandardAction {
  type = Types.CLEAR_ITEMS
  payload = null
}
