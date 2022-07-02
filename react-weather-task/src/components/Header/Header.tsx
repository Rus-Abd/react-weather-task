import React from 'react'
import useTime from '../../utils/useTime'
import './header.css'

function Header() {
    const date = useTime()

    return (
        <header>
            <div className="date">
                <h1>{date.time}</h1>
                <h2>{date.date}</h2>
            </div>
            <div className="location">Minsk</div>
        </header>
    )
}

export default Header
