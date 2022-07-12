import { IdailyWeather } from '../types'

type Tacc = {
    time: string
    weather: string
}

const formatDailyWeather = (weather: IdailyWeather) => {
    console.log(weather)
    const res = weather.forecast.forecastday[0].hour.reduce((acc: Tacc[], curr, index) => {
        if (index % 4 === 0) {
            const currDate = new Date(curr.time)
            const currTime =
                currDate.getHours() < 10
                    ? `0${currDate.getHours()} : 00`
                    : `${currDate.getHours()} : 00`

            return [
                ...acc,
                {
                    time: currTime,
                    weather: curr.temp_c,
                    icon: curr.condition.icon,
                    id: curr.time_epoch,
                },
            ]
        }
        return acc
    }, [])

    return res
}
export default formatDailyWeather
