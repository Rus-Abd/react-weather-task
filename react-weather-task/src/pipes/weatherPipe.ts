import { IformattedWeather, Iweather } from '../types'

type Tacc = {
    icon: string
    id: string
}

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const formatWeather = (weatherObj: Iweather) => {
    const formattedWeather = weatherObj.list.reduce((acc, curr) => {
        const currDate = new Date(curr.dt_txt)
        const currDay = weekDays[currDate.getDay()]
        const currIcon = curr.weather[0].icon
        const currWeather = curr.main.temp

        return {
            ...acc,
            [currDay]: {
                icon: `http://openweathermap.org/img/wn/${currIcon}@2x.png`,
                weather: currWeather,
                id: curr.dt_txt,
            },
        }
    }, {})

    const res = (Object.entries(formattedWeather) as IformattedWeather[]).reduce(
        (acc: Tacc[], curr) => [
            ...acc,
            { time: curr[0], icon: curr[1].icon, id: curr[1].id, weather: curr[1].weather },
        ],
        []
    )

    return res
}

export default formatWeather
