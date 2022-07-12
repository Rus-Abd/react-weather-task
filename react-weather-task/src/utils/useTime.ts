import { useState, useEffect } from 'react'
import formatDate from '../pipes/datePipe'
import store from '../redux/store/store'

const storeState = store.getState()

export default function useTime() {
    const { long, lat } = storeState.location.location
    const [date, setDate] = useState(new Date())

    function refreshClock() {
        setDate(new Date())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)

        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return formatDate(date)
}
