import { all, takeEvery } from 'redux-saga/effects'

import { getEvents } from '../slices/calendarSlice'
import { getWeather } from '../slices/weatherSlice'
import handleGetEvents from './handlers/calendar'
import handleGetWeather from './handlers/weather'

function* eventsWatcher() {
    yield takeEvery(getEvents.type, handleGetEvents)
}
function* weatherWatcher() {
    yield takeEvery(getWeather.type, handleGetWeather)
}
export default function* RootSaga() {
    yield all([eventsWatcher(), weatherWatcher()])
}
