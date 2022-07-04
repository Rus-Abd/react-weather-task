import { all, takeEvery } from 'redux-saga/effects'

import { getEvents } from '../slices/calendarSlice'
import handleGetEvents from './handlers/calendar'

function* eventsWatcher() {
    console.log('events wtcher triggered')
    yield takeEvery(getEvents.type, handleGetEvents)
    console.log('events wtcher triggered After')
}
export default function* RootSaga() {
    yield all([eventsWatcher()])
}
