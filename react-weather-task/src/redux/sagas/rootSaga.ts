import { all, takeLatest } from 'redux-saga/effects'

import { getEvents } from '../slices/calendarSlice'
import { getLocation } from '../slices/locationSlice'
import { getWeather } from '../slices/weatherSlice'
import handleGetEvents from './handlers/calendar'
import handleGetLocation from './handlers/location'
import handleGetWeather from './handlers/weather'

function* eventsWatcher() {
    yield takeLatest(getEvents.type, handleGetEvents)
}
function* weatherWatcher() {
    yield takeLatest(getWeather.type, handleGetWeather)
}

function* LocationWatcher() {
    yield takeLatest(getLocation.type, handleGetLocation)
}

export default function* RootSaga() {
    yield all([eventsWatcher(), weatherWatcher(), LocationWatcher()])
}
