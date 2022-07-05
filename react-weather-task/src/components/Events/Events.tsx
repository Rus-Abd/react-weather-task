import React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from '../../types'
import './events.css'

function Events() {
    const eventsArr = useSelector((state: Istate) => state.calendar.events)

    return (
        <div className="events">
            <ul>
                {eventsArr && eventsArr.length > 0
                    ? eventsArr.map((el) => (
                          <li key={el.id}>
                              <span>{el.time}</span>
                              <p>{el.text}</p>
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    )
}

export default Events
