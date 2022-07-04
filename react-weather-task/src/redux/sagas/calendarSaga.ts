import { put, takeLatest } from 'redux-saga/effects'
import { loadEvents } from '../actions/calendar'

function* getEvents() {
    const events = yield fetch('https://api.github.com/users').then((r) => r.json())
    yield put(loadEvents(events))
}

export default function* eventsWatcher() {
    yield [takeLatest('GET_EVENTS', getEvents)]
}
