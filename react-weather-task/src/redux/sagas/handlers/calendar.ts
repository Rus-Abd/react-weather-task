import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { loadEvents, failedEvents, getEvents } from '@slices/calendarSlice'
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
