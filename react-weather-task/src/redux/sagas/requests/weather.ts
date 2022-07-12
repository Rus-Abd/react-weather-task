import formatDailyWeather from '@pipes/dailyWeatherPipe'
import formatWeather from '@pipes/weatherPipe'
import { Iweather } from '../../../types'
import store from '../../store/store'

export const requestGetDailyWeather = async () => {
    const storeState = store.getState()
    const { lat, long } = storeState.location
    let weatherArr

    await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_WEATHERDAILY}&q=${lat},${long}&days=1&aqi=no&alerts=no`
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
        `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_LOCATION}`
    )
        .then((res) => res.json())
        .then((result: Iweather) => {
            weatherArr = formatWeather(result)
        })

    return weatherArr
}

export default requestGetWeather
