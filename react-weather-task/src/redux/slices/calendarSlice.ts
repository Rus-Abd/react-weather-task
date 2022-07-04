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
            console.log('get events triggered')

            return {
                ...state,
                isLoading: true,
                calendarId: action.payload.idInput,
                calendar: action.payload.calendarApi,
            }
        },
        loadEvents(state, action) {
            console.log('load events triggeredd')
            console.log('UNDER THIS LINE IS LOADEVENTS PAYLOAD')
            console.log(action.payload)
            return { ...state, isLoading: false, events: action.payload }
        },
        failedEvents(state, action) {
            console.log('failed events triggeredd')
            return { ...state, isLoading: false, err: action.payload }
        },
    },
})

export const { getEvents, loadEvents, failedEvents } = calendarSlice.actions
export default calendarSlice.reducer
