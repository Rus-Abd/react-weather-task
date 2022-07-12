import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { failedWeather, loadWeather } from '../../slices/weatherSlice'
import requestGetWeather, { requestGetDailyWeather } from '../requests/weather'

export default function* handleGetWeather() {
    try {
        const weatherArray: YieldExpression = yield call(requestGetWeather)
        yield put(loadWeather(weatherArray))
    } catch (error) {
        yield put(failedWeather(error))
    }
}

export function* handleGetDailyWeather() {
    try {
        const weatherArray: YieldExpression = yield call(requestGetDailyWeather)
        yield put(loadWeather(weatherArray))
    } catch (error) {
        yield put(failedWeather(error))
    }
}
