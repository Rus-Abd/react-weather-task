// https://api.bigdatacloud.net/data/reverse-geocode?latitude=-34.93129&longitude=138.59669&localityLanguage=en&key=[YOUR API KEY]
// bdc_95f3bf29bed848adbdd7e190701d600d

type Tlocation = {
    city: string
    countryName: string
}

let latitude = 0
let longitude = 0
navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
})

const getLocation = (setLoc: (arg0: Tlocation) => void) => {
    fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_95f3bf29bed848adbdd7e190701d600d`
    )
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((result) => {
            console.log(result)
            setLoc(result)
        })
}

export default getLocation
