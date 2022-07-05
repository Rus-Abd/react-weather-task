import { Tevent } from '../types'

export default function formatEvents(events: Array<Tevent>) {
    const result = events.reduce((acc, curr) => {
        const minutes =
            new Date(curr.start.dateTime).getMinutes().toString().length === 1
                ? `0${new Date(curr.start.dateTime).getMinutes()}`
                : `${new Date(curr.start.dateTime).getMinutes()}`
        const currTime = `${new Date(curr.start.dateTime).getHours()} : ${minutes}`
        return [...acc, { time: currTime, text: curr.summary, id: curr.id }]
    }, [])
    return result
}
