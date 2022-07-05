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
    1: { icon: string; weather: number }
}
export type Tlocation = {
    city: string
    countryName: string
}
export type Tevent = {
    start: { dateTime: string }
    summary: string
    id: string
}
export type TformattedEvent = {
    time: string
    id: string
    text: string
}
export interface Istate {
    calendar: { isLoading: boolean; events: TformattedEvent[] }
}
