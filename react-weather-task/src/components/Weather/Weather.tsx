import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../redux/slices/weatherSlice'
import { Istate } from '../../types'

import Loader from '../Loader/Loader'
import { List, ListItem, WeatherContainer } from './styled'

function Weather() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const weatherArr = useSelector((state: Istate) => state.weather.weatherArr)

    useEffect(() => {
        dispatch(getWeather())
    }, [])

    return (
        <WeatherContainer>
            <List className="weather-list">
                {isLoading ? (
                    <Loader />
                ) : (
                    weatherArr.map((el) => (
                        <ListItem key={el[1].id}>
                            <span> {el[0]}</span>
                            <img src={el[1].icon} alt="" />
                            <span>{el[1].weather}</span>
                        </ListItem>
                    ))
                )}
            </List>
        </WeatherContainer>
    )
}

export default Weather
