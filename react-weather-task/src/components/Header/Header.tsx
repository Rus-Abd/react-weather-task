import React, { useEffect, useState } from 'react'
import getLocation from '../../utils/getLocation'
import useTime from '../../utils/useTime'
import './header.css'

function Header() {
    const [location, setLocation] = useState({ city: 'Unkown', countryName: 'unkown' })
    const date = useTime()
    useEffect(() => {
        getLocation(setLocation)
    }, [])

    return (
        <header>
            <div className="date">
                <h1>{date.time}</h1>
                <h2>{date.date}</h2>
            </div>
            <div className="location">{`${location.city},${location.countryName}`}</div>
        </header>
    )
}

export default Header
