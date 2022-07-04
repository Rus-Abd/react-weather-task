import { all, fork } from 'redux-saga/effects'
import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import calendarSlice from '../slices/calendarSlice'
import eventsWatcher from '../sagas/calendarSaga'

const rootReducer = combineReducers({ calendar: calendarSlice })

function* RootSaga() {
    yield all([fork(eventsWatcher)])
}
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            thunk: false,
        }).concat(sagaMiddleware),
})

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
