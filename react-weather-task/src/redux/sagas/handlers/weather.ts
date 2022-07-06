import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { failedWeather, loadWeather } from '../../slices/weatherSlice'
import requestGethWeather from '../requests/weather'

export default function* handleGetWeather() {
    try {
        const events: YieldExpression = yield call(requestGethWeather)
        yield put(loadWeather(events))
    } catch (error) {
        yield put(failedWeather(error))
    }
}
