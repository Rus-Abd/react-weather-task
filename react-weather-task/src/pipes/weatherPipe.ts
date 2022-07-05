import { Iweather } from '../types'

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const formatWeather = (weatherObj: Iweather) => {
    const formattedWeather = weatherObj.list.reduce((acc, curr, index) => {
        const currDate = new Date(curr.dt_txt)
        const currDay = weekDays[currDate.getDay()]
        const currIcon = curr.weather[0].icon
        const currWeather = curr.main.temp
        return {
            ...acc,
            [currDay]: {
                icon: `http://openweathermap.org/img/wn/${currIcon}@2x.png`,
                weather: currWeather,
            },
        }
    }, {})

    return Object.entries(formattedWeather)
}
export default formatWeather

// tueday:{
//     icon:...
//     weather:...
// }
