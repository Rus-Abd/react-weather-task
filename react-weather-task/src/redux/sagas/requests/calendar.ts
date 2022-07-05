import formatEvents from '../../../pipes/eventsPipe'
import { Tevent } from '../../../types'

interface Icalendar {
    handleAuthClick: () => void
    listUpcomingEvents: (arg0: number, arg1: string | undefined) => Promise<any>
}

export default async function requestGetEvents(idInput: string, calendar: Icalendar) {
    let temp: Tevent | [] = []

    calendar.handleAuthClick()
    await calendar.listUpcomingEvents(10, idInput).then(({ result }: any) => {
        temp = formatEvents(result.items)
    })

    return temp
}
