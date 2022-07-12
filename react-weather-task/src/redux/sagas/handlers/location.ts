import { call, put } from 'redux-saga/effects'
import { YieldExpression } from 'typescript'
import { failedLocation, getLocation, loadLocation } from '../../slices/locationSlice'
import { loadWeather } from '../../slices/weatherSlice'
import requestGetLocation from '../requests/location'
import requestGetWeather from '../requests/weather'

export default function* handleGetLocation({ payload }: ReturnType<typeof getLocation>) {
    try {
        const cords: YieldExpression = yield call(requestGetLocation, payload)
        yield put(loadLocation(cords))
        const weatherArray: YieldExpression = yield call(requestGetWeather)

        yield put(loadWeather(weatherArray))
    } catch (error) {
        yield put(failedLocation(error))
    }
}
