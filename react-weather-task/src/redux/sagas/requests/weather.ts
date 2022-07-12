import formatWeather from '../../../pipes/weatherPipe'
import { IformattedWeather, Iweather } from '../../../types'
import store from '../../store/store'

const requestGetWeather = async () => {
    const storeState = store.getState()
    const { lat, long } = storeState.location
    let weatherArr
    console.log('REQUESTGETWEATHER STORE STATE:')
    console.log(store.getState())
    console.log(lat)

    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((result: Iweather) => {
            console.log(result)
            weatherArr = formatWeather(result) as IformattedWeather[]
        })

    return weatherArr
}

export default requestGetWeather
