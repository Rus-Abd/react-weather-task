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
        getEvents(state, action) {
            return {
                ...state,
                isLoading: true,
                calendarId: action.payload.idInput,
                calendar: action.payload.calendarApi,
            }
        },
        loadEvents(state, action) {
            return { ...state, isLoading: false, events: action.payload }
        },
        failedEvents(state, action) {
            return { ...state, isLoading: false, err: action.payload }
        },
    },
})

export const { getEvents, loadEvents, failedEvents } = calendarSlice.actions
export default calendarSlice.reducer
