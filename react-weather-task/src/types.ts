import { Location } from './components/Header/styled'

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
export interface Istate {
    calendar: { isLoading: boolean; events: TformattedEvent[] }
    weather: { weatherArr: IformattedWeather[]; isLoading: boolean; err: Error }
    location: { location: { city: string; country: string } }
}
