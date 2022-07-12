import formatDailyWeather from '../../../pipes/dailyWeatherPipe'
import formatWeather from '../../../pipes/weatherPipe'
import { Iweather } from '../../../types'
import store from '../../store/store'

export const requestGetDailyWeather = async () => {
    const storeState = store.getState()
    const { lat, long } = storeState.location
    let weatherArr

    await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=9bbf9087b94741caacf105755221207&q=${lat},${long}&days=1&aqi=no&alerts=no`
    )
        .then((res) => res.json())
        .then((result) => {
            weatherArr = formatDailyWeather(result)
        })

    return weatherArr
}

const requestGetWeather = async () => {
    const storeState = store.getState()
    const { lat, long } = storeState.location
    let weatherArr

    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((result: Iweather) => {
            weatherArr = formatWeather(result)
        })

    return weatherArr
}

export default requestGetWeather
