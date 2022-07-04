import { all, fork } from 'redux-saga/effects'
import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import calendarSlice from '../slices/calendarSlice'

import RootSaga from '../sagas/rootSaga'

const rootReducer = combineReducers({ calendar: calendarSlice })

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
        sagaMiddleware,
    ],
})

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
