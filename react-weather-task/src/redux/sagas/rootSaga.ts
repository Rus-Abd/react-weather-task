import { all, takeEvery } from 'redux-saga/effects'

import { getEvents } from '../slices/calendarSlice'
import handleGetEvents from './handlers/calendar'

function* eventsWatcher() {
    yield takeEvery(getEvents.type, handleGetEvents)
}
export default function* RootSaga() {
    yield all([eventsWatcher()])
}
