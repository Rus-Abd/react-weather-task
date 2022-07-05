// type Tevent={
//     start:{dateTime:string},summary:string
// }
// interface Ievents={}

export default function formatEvents(events) {
    const result = events.reduce(
        (acc, curr) => [...acc, { time: curr.start.dateTime, text: curr.summary, id: curr.id }],
        []
    )
    return result
}
