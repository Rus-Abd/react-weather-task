import { createSlice } from '@reduxjs/toolkit'
import Login from '../../components/Login/Login'

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
            console.log('GETLOCATION')
            console.log(`getLocation payload:${payload}`)
            return {
                ...state,
                isLoading: true,
                location: { ...state.location, city: payload },
            }
        },

        loadLocation(state, { payload }) {
            console.log('LOADLOCATION')
            console.log(`loadLocation payload:`)
            console.log(payload)
            return { ...state, isLoading: false, long: payload.longitude, lat: payload.latitude }
        },

        failedLocation(state, { payload }) {
            return { ...state, isLoading: false, err: payload }
        },
    },
})

export const { getLocation, loadLocation, failedLocation } = locationSlice.actions
export default locationSlice.reducer
