import React, { useEffect, useState } from 'react'
import './weather.css'

function Weather() {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
            })

            await fetch(
                `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=a32fc8e429c811dbafb887d21cb6e1b8`
            )
                .then((res) => res.json())
                .then((result) => {
                    setData(result)
                    console.log(result)
                })
        }
        fetchData()
    }, [lat, long])
    return <div className="weather">Weather</div>
}

export default Weather
