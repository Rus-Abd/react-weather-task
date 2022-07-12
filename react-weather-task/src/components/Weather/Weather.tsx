import React from 'react'
import { useSelector } from 'react-redux'

import { Istate } from '../../types'

import Loader from '../Loader/Loader'
import { List, ListItem, WeatherContainer } from './styled'

function Weather() {
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const weatherArr = useSelector((state: Istate) => state.weather.weatherArr)

    const renderedWeatherArr = weatherArr.map((el) => (
        <ListItem key={el.id}>
            <span> {el.time}</span>
            <img src={el.icon} alt="" />
            <span>{el.weather} C</span>
        </ListItem>
    ))

    return (
        <WeatherContainer>
            <List className="weather-list">{isLoading ? <Loader /> : renderedWeatherArr}</List>
        </WeatherContainer>
    )
}

export default Weather
