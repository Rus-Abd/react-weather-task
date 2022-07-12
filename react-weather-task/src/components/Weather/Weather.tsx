import React from 'react'
import { useSelector } from 'react-redux'

import { Istate } from '../../types'

import Loader from '../Loader/Loader'
import { List, ListItem, WeatherContainer } from './styled'

function Weather() {
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const weatherArr = useSelector((state: Istate) => state.weather.weatherArr)
    const showWeeklyWeather = useSelector((state: Istate) => state.weather.weekly)
    let renderedWeatherArr
    if (showWeeklyWeather) {
        renderedWeatherArr = weatherArr.map((el) => (
            <ListItem key={el[1].id}>
                <span> {el[0]}</span>
                <img src={el[1].icon} alt="" />
                <span>{el[1].weather}</span>
            </ListItem>
        ))
    } else {
        renderedWeatherArr = weatherArr.map((el) => (
            <ListItem key={el.id}>
                <span> {el.time}</span>
                <img src={el.icon} alt="" />
                <span>{el.weather} C</span>
            </ListItem>
        ))
    }

    return (
        <WeatherContainer>
            <List className="weather-list">{isLoading ? <Loader /> : renderedWeatherArr}</List>
        </WeatherContainer>
    )
}

export default Weather
