import { createSlice } from '@reduxjs/toolkit'

const initState = {
    isLoading: false,
    err: null,
    location: { city: 'undefined', country: 'undefined' },
    lat: 0,
    long: 0,
}

const locationSlice = createSlice({
    name: 'location',
    initialState: initState,

    reducers: {
        getLocation(state, { payload }) {
            return {
                ...state,
                isLoading: true,
                location: { ...state.location, city: payload },
            }
        },

        loadLocation(state, { payload }) {
            return { ...state, isLoading: false, long: payload.longitude, lat: payload.latitude }
        },

        failedLocation(state, { payload }) {
            return { ...state, isLoading: false, err: payload }
        },
    },
})

export const { getLocation, loadLocation, failedLocation } = locationSlice.actions
export default locationSlice.reducer
