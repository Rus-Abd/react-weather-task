import { createSlice } from '@reduxjs/toolkit'

const initState = {
    events: [],
    isLoading: false,
    err: null,
    calendarId: null,
    calendar: null,
}

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: initState,

    reducers: {
        getEvents(state, { payload }) {
            return {
                ...state,
                isLoading: true,
                calendarId: payload.idInput,
                calendar: payload.calendarApi,
            }
        },

        loadEvents(state, { payload }) {
            return { ...state, isLoading: false, events: payload }
        },

        failedEvents(state, { payload }) {
            return { ...state, isLoading: false, err: payload }
        },
    },
})

export const { getEvents, loadEvents, failedEvents } = calendarSlice.actions
export default calendarSlice.reducer
