import { createClient } from '@google/maps'
import {} from '@types/googlemaps'

export default class LocationEntity {
  constructor() {}

  async getLocationName(lat: number, lng: number) {
    const client = createClient({
      key: process.env.VUE_APP_MAP_API_KEY || '',
      Promise: Promise
    })

    const res = await client.geocode({
      address: `${lat}, ${lng}`
    }).asPromise()
    const results = res.json.results

    // parse results
    const location = results.map(result => result.formatted_address.split(' '))
      .filter(address => address.length == 2)
      .map(address => address[1])[0]

    return location
  }
}
