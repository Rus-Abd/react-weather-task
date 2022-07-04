import { createSlice } from '@reduxjs/toolkit'

const initState = { events: [], isLoading: false }
const calendarSlice = createSlice({
    name: 'calendar',
    initialState: initState,
    reducers: {
        getEvents(state) {
            return { ...state, isLoading: false }
        },
        loadEvents(state, action) {
            return { ...state, isLoading: false, events: action.payload }
        },
    },
})
export default calendarSlice.reducer
