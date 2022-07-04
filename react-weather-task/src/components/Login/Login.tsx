import React, { useState } from 'react'
import getEvents from '../../utils/getCalendarEvents'
import './login.css'

export default function Login() {
    const calendarApi = getEvents()

    const [idInput, setIdInput] = useState('')

    const handleIdChange = (event: React.ChangeEvent) => {
        setIdInput((event.target as HTMLInputElement).value)
    }

    console.log(calendarApi)

    const handleSubmit = () => () => {
        calendarApi.handleAuthClick()
        calendarApi.listUpcomingEvents(10, idInput).then(({ result }: any) => {
            console.log(result.items)
        })
    }
    return (
        <form className="login">
            <label className="login-label" htmlFor="username">
                Calendar ID
            </label>
            <input type="text" className="login-input" id="username" onChange={handleIdChange} />
            <label className="login-label" htmlFor="password">
                City
            </label>
            <input type="password" className="login-input" id="password" />
            <button type="button" className="login-button" onClick={handleSubmit()}>
                Enter
            </button>
        </form>
    )
}
