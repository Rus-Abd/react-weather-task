import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import expireIn from 'redux-persist-transform-expire-in'

import calendarSlice from '../slices/calendarSlice'
import RootSaga from '../sagas/rootSaga'
import weatherSlice from '../slices/weatherSlice'
import locationSlice from '../slices/locationSlice'

const rootReducer = combineReducers({
    calendar: calendarSlice,
    weather: weatherSlice,
    location: locationSlice,
})

const expireTime = 5 * 60 * 60 * 1000
const expirationKey = 'expirationKey'
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['calendar.isLoading', 'weather.isLoading', 'location.isLoading'],

    transforms: [expireIn(expireTime, expirationKey, [])],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware,
    ],
})

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
