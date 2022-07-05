import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { loadEvents, failedEvents, getEvents } from '../../slices/calendarSlice'
import requestGetEvents from '../requests/calendar'

export default function* handleGetEvents({ payload }: ReturnType<typeof getEvents>) {
    try {
        const events: YieldExpression = yield call(
            requestGetEvents,
            payload.idInput,
            payload.calendarApi
        )

        yield put(loadEvents(events))
    } catch (error) {
        yield put(failedEvents(error))
    }
}

// [
//     {
//         time: '2022-07-06T04:30:00+03:00',
//         text: 'asdasdxvz',
//         id: '1eb5d3adhsuumumgdselmlluj0',
//     },
//     {
//         time: '2022-07-06T08:30:00+03:00',
//         text: '324ddf',
//         id: '7u739ut750ukf5gvi25hkl3un2',
//     },
//     {
//         time: '2022-07-06T15:00:00+03:00',
//         text: '4vvvvvvvv',
//         id: '7cqruj68td9m20i52i3rv81s8v',
//     },
// ]
