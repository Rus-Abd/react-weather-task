import React from 'react'
import useTime from '../../utils/useTime'
import './header.css'

function Header() {
    const date = useTime()

    return (
        <header>
            <h1>{date.date}</h1>
            <h2>{date.time}</h2>
        </header>
    )
}

export default Header
