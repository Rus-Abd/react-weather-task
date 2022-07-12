import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getEvents } from '@slices/calendarSlice'
import { getLocation } from '@slices/locationSlice'
import getEventsConfig from '@utils/getCalendarEvents'

import Loader from '../Loader/Loader'
import { Istate } from '../../types'

import { Form, FormButton, FormInput, FormLabel } from './styled'

export default function Login() {
    const dispatch = useDispatch()
    const calendarApi = getEventsConfig()
    const isLoading = useSelector((state: Istate) => state.calendar.isLoading)
    const [idInput, setIdInput] = useState('')
    const [cityInput, setCityInput] = useState('')

    const handleIdChange = (event: React.ChangeEvent) => {
        setIdInput((event.target as HTMLInputElement).value)
    }

    const handleCityChange = (event: React.ChangeEvent) => {
        setCityInput((event.target as HTMLInputElement).value)
    }

    const handleSubmit = () => () => {
        dispatch(getLocation(cityInput))
        dispatch(getEvents({ idInput, calendarApi }))
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Form>
                    <FormLabel>Calendar ID</FormLabel>
                    <FormInput type="text" id="calendarId" onChange={handleIdChange} />

                    <FormLabel>City</FormLabel>
                    <FormInput type="text" id="city" onChange={handleCityChange} />
                    <FormButton type="button" onClick={handleSubmit()}>
                        Enter
                    </FormButton>
                </Form>
            )}
        </>
    )
}
