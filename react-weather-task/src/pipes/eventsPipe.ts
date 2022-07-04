export default function formatEvents(events) {
    const result = events.reduce(
        (acc, curr) => [...acc, { time: curr.start.dateTime, text: curr.summary }],
        []
    )
    return result
}
