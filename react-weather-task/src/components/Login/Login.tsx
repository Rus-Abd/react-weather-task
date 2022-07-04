import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import requestGetEvents from '../../redux/sagas/requests/calendar'
import { getEvents, loadEvents } from '../../redux/slices/calendarSlice'
import getEventsConfig from '../../utils/getCalendarEvents'

import './login.css'

export default function Login() {
    const dispatch = useDispatch()
    const calendarApi = getEventsConfig()

    const [idInput, setIdInput] = useState('')

    const handleIdChange = (event: React.ChangeEvent) => {
        setIdInput((event.target as HTMLInputElement).value)
    }

    const handleSubmit = () => () => {
        // requestGetEvents(idInput, calendarApi)
        dispatch(getEvents({ idInput, calendarApi }))
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
