import formatEvents from '../../../pipes/eventsPipe'
import { Tevent } from '../../../types'

interface Icalendar {
    handleAuthClick: () => void
    listUpcomingEvents: (arg0: number, arg1: string | undefined) => Promise<Tevent>
}
type Tacc = {
    time: string
    text: string
    id: string
}
export default async function requestGetEvents(idInput: string, calendar: Icalendar) {
    let temp: Tacc[] = []

    calendar.handleAuthClick()

    await calendar.listUpcomingEvents(3, idInput).then(({ result }) => {
        temp = formatEvents(result.items)
    })

    return temp
}
