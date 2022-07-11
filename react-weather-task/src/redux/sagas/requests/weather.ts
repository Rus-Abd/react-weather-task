import formatWeather from '../../../pipes/weatherPipe'
import { IformattedWeather, Iweather } from '../../../types'
import store from '../../store/store'

const requestGethWeather = async () => {
    let lat = 0
    let long = 0
    let weatherArr
    console.log(store.getState())

    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude
        long = position.coords.longitude
    })

    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((result: Iweather) => {
            weatherArr = formatWeather(result) as IformattedWeather[]
        })

    return weatherArr
}

export default requestGethWeather
