import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Istate } from '../../types'
import getLocation from '../../utils/getLocation'
import useTime from '../../utils/useTime'
import Loader from '../Loader/Loader'
import './header.css'

function Header() {
    const [location, setLocation] = useState({ city: 'Unkown', countryName: 'unkown' })
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
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
            <div className="location">
                {isLoading ? <Loader /> : `${location.city},${location.countryName}`}
            </div>
        </header>
    )
}

export default Header
