import React from 'react'
import useTime from '../../utils/useTime'
import './header.css'

function Header() {
    const date = useTime()
    return (
        <header>
            <h1>{date.toUTCString()}</h1>
        </header>
    )
}

export default Header
