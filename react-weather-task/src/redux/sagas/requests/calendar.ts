import formatEvents from '../../../pipes/eventsPipe'

interface Icalendar {
    handleAuthClick: () => void
    listUpcomingEvents: (arg0: number, arg1: string | undefined) => Promise<any>
}

export default function requestGetEvents(idInput: string, calendar: Icalendar) {
    console.log(idInput)
    console.log(calendar)
    calendar.handleAuthClick()
    calendar.listUpcomingEvents(10, idInput).then(({ result }: any) => {
        console.log(result.items)
        console.log(formatEvents(result.items))
        return formatEvents(result.items)
    })
}
