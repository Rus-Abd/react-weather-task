import React, { useEffect, useState } from 'react'
import { IformattedWeather } from '../../types'

import fetchWeather from '../../utils/getWeather'
import './weather.css'

function Weather() {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [data, setData] = useState<IformattedWeather[]>([])

    useEffect(() => {
        fetchWeather(lat, setLat, long, setLong, setData)
    }, [lat, long])

    return (
        <div className="weather">
            <ul className="weather-list">
                {data.map((el) => (
                    <li key={el[1].id} className="weather-list__item">
                        <span> {el[0]}</span>
                        <img src={el[1].icon} alt="" />
                        <span>{el[1].weather}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Weather
