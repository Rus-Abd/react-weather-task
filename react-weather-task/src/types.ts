export type TweatherList = {
    dt_txt: string
    main: { temp: string }
    weather: [{ id: number; main: string; description: string; icon: string }]
}

export interface Iweather {
    list: TweatherList[]
}
export interface IformattedWeather {
    0: string
    1: { icon: string; weather: number; id: string }
}
export type Tlocation = {
    city: string
    countryName: string
}
export type TeventItem = { start: { dateTime: string }; summary: string; id: string }
export type Tevent = {
    result: { items: TeventItem[] }
}

export type TformattedEvent = {
    time: string
    id: string
    text: string
}
export interface IhourlyWeather {
    temp_c: string
    time: string
    condition: { icon: string }
    time_epoch: string
}
export interface Istate {
    calendar: { isLoading: boolean; events: TformattedEvent[] }
    weather: {
        weatherArr: { time: string; id: string; icon: string; weather: string }[]
        isLoading: boolean
        err: Error
        weekly: boolean
    }
    location: { location: { city: string; country: string } }
}

export interface IdailyWeather {
    forecast: { forecastday: [{ hour: IhourlyWeather[] }] }
}
