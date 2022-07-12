import React from 'react'
import { useSelector } from 'react-redux'
import { Istate } from '../../types'

import { List, ListItem } from './styled'

function Events() {
    const eventsArray = useSelector((state: Istate) => state.calendar.events)

    return (
        <List>
            {eventsArray && eventsArray.length > 0 ? (
                eventsArray.map(({ id, time, text }) => (
                    <ListItem key={id}>
                        <span>{time}</span>
                        <p>{text}</p>
                    </ListItem>
                ))
            ) : (
                <ListItem>NO EVENTS</ListItem>
            )}
        </List>
    )
}

export default Events
