import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Istate } from '../../types'
import getLocation from '../../utils/getLocation'
import useTime from '../../utils/useTime'
import Loader from '../Loader/Loader'

import { HeaderEl, HeaderH1, HeaderH2, Location } from './styled'

function Header() {
    const [location, setLocation] = useState({ city: 'Unkown', countryName: 'unkown' })
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const date = useTime()

    useEffect(() => {
        getLocation(setLocation)
    }, [])

    return (
        <HeaderEl>
            <div>
                <HeaderH1>{date.time}</HeaderH1>
                <HeaderH2>{date.date}</HeaderH2>
            </div>
            <Location>
                {isLoading ? <Loader /> : `${location.city},${location.countryName}`}
            </Location>
        </HeaderEl>
    )
}

export default Header
