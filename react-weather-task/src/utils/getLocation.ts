// https://api.bigdatacloud.net/data/reverse-geocode?latitude=-34.93129&longitude=138.59669&localityLanguage=en&key=[YOUR API KEY]
// bdc_95f3bf29bed848adbdd7e190701d600d

import { Tlocation } from '../types'

let latitude = 0
let longitude = 0
navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
})

const getLocation = async () => {
    await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_95f3bf29bed848adbdd7e190701d600d`
    )
        .then((res) => res.json())
        .then((result: Tlocation) => {
            return result
        })
}

export default getLocation
