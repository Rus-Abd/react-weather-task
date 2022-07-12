import React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from '../../types'

import useTime from '../../utils/useTime'
import Loader from '../Loader/Loader'
import Settings from '../Settings/Settings'

import { HeaderEl, HeaderH1, HeaderH2, Location } from './styled'

function Header() {
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const location = useSelector((state: Istate) => state.location.location)
    const date = useTime()

    return (
        <HeaderEl>
            <div>
                <HeaderH1>{date.time}</HeaderH1>
                <HeaderH2>{date.date}</HeaderH2>
            </div>
            <div>
                <Location>{isLoading ? <Loader /> : `${location.city || ''}`}</Location>{' '}
                <Settings />
            </div>
        </HeaderEl>
    )
}

export default Header
