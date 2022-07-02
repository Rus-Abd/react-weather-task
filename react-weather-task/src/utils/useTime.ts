import { useState, useEffect } from 'react'
import formatDate from '../pipes/datePipe'

export default function useTime() {
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
