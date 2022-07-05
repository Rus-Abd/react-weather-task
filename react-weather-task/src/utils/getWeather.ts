import formatWeather from '../pipes/weatherPipe'
import { IformattedWeather, Iweather } from '../types'

const fetchWeather = async (
    lat: number,
    setLat: (arg0: number) => void,
    long: number,
    setLong: (arg0: number) => void,
    setData: (arg0: IformattedWeather[]) => void
) => {
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    })

    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=a32fc8e429c811dbafb887d21cb6e1b8`
    )
        .then((res) => res.json())
        .then((result: Iweather) => {
            setData(formatWeather(result) as IformattedWeather[])
        })
}
export default fetchWeather
