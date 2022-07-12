import formatWeather from '../../../pipes/weatherPipe'
import { IformattedWeather, Iweather } from '../../../types'
import store from '../../store/store'

const requestGetWeather = async () => {
    const storeState = store.getState()
    const { latitude, longitude } = storeState.location.location
    // let lat = 0
    // let long = 0
    let weatherArr
    console.log('REQUESTGETWEATHER STORE STATE:')
    console.log(store.getState())
    console.log(latitude)
    // navigator.geolocation.getCurrentPosition((position) => {
    //     lat = position.coords.latitude
    //     long = position.coords.longitude
    // })

    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&units=metric&APPID=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((result: Iweather) => {
            console.log(result)
            weatherArr = formatWeather(result) as IformattedWeather[]
        })

    return weatherArr
}

export default requestGetWeather
