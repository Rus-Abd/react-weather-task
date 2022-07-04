import React from 'react'
import { useSelector } from 'react-redux'
import './events.css'

interface Istate {
    calendar: {
        events: string[]
    }
}

function Events() {
    const eventsArr = useSelector((state: Istate) => state.calendar.events)
    return (
        <div className="events">
            <ul>
                {eventsArr && eventsArr.length > 0
                    ? eventsArr.map((el: string) => <li key={el}>${el}</li>)
                    : null}
            </ul>
        </div>
    )
}

export default Events
