import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import { getEvents } from '../../redux/slices/calendarSlice'
import { Istate } from '../../types'
import getEventsConfig from '../../utils/getCalendarEvents'

import './login.css'

export default function Login() {
    const dispatch = useDispatch()
    const calendarApi = getEventsConfig()
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const [idInput, setIdInput] = useState('')

    const handleIdChange = (event: React.ChangeEvent) => {
        setIdInput((event.target as HTMLInputElement).value)
    }

    const handleSubmit = () => () => {
        dispatch(getEvents({ idInput, calendarApi }))
    }
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <form className="login">
                    <label className="login-label" htmlFor="username">
                        Calendar ID
                    </label>
                    <input
                        type="text"
                        className="login-input"
                        id="username"
                        onChange={handleIdChange}
                    />

                    <button type="button" className="login-button" onClick={handleSubmit()}>
                        Enter
                    </button>
                </form>
            )}
        </>
    )
}
