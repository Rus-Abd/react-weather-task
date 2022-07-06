import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../redux/slices/weatherSlice'
import { Istate } from '../../types'

import Loader from '../Loader/Loader'
import './weather.css'

function Weather() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const weatherArr = useSelector((state: Istate) => state.weather.weatherArr)

    dispatch(getWeather())
    return (
        <div className="weather">
            <ul className="weather-list">
                {isLoading ? (
                    <Loader />
                ) : (
                    weatherArr.map((el) => (
                        <li key={el[1].id} className="weather-list__item">
                            <span> {el[0]}</span>
                            <img src={el[1].icon} alt="" />
                            <span>{el[1].weather}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Weather
