import { Tlocation } from '../../../types'

export default async function requestGetLocation(city: string) {
    console.log('REQUESTGETLOCATION')
    let latitude = 0
    let longitude = 0
    // navigator.geolocation.getCurrentPosition((position) => {
    //     latitude = position.coords.latitude
    //     longitude = position.coords.longitude
    // })
    await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((res) => {
            latitude = res[0].lat
            longitude = res[0].lon
        })
    // await fetch(
    //     `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_95f3bf29bed848adbdd7e190701d600d`
    // )
    //     .then((res) => res.json())
    //     .then((result: Tlocation) => {
    //         temp = result
    //     })
    // console.log(temp)
    return { latitude, longitude }
}
