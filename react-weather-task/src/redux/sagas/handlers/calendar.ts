import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { loadEvents, failedEvents } from '../../slices/calendarSlice'
import requestGetEvents from '../requests/calendar'

export default function* handleGetEvents(action) {
    try {
        const events: YieldExpression = yield call(requestGetEvents, action)
        yield put(loadEvents(events))
    } catch (error) {
        yield put(failedEvents(error))
    }
}
