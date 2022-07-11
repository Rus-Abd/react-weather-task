import React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from '../../types'

import { List, ListItem } from './styled'

function Events() {
    const eventsArray = useSelector((state: Istate) => state.calendar.events)

    return (
        <div className="events">
            <List>
                {eventsArray && eventsArray.length > 0
                    ? eventsArray.map(({ id, time, text }) => (
                          <ListItem key={id}>
                              <span>{time}</span>
                              <p>{text}</p>
                          </ListItem>
                      ))
                    : null}
            </List>
        </div>
    )
}

export default Events
