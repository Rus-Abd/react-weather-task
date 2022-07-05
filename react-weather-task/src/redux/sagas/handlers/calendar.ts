import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { loadEvents, failedEvents } from '../../slices/calendarSlice'
import requestGetEvents from '../requests/calendar'

interface Iaction {
    payload: { idInput: string; calendarApi: any }
}

export default function* handleGetEvents(action: Iaction) {
    console.log('generator handle get events start')
    try {
        console.log('generator handle get events middle')
        const events: YieldExpression = yield call(
            requestGetEvents,
            action.payload.idInput,
            action.payload.calendarApi
        )
        yield put(loadEvents(events))
    } catch (error) {
        yield put(failedEvents(error))
        console.log(error)
    }
}
