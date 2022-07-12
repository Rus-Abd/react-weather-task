import { createSlice } from '@reduxjs/toolkit'

const initState = {
    weatherArr: [],
    isLoading: false,
    err: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initState,

    reducers: {
        getWeather(state) {
            console.log('GET WEATHER')
            return {
                ...state,
                isLoading: true,
            }
        },

        loadWeather(state, { payload }) {
            console.log('lOAD WEATHER')
            console.log(payload)
            return { ...state, isLoading: false, weatherArr: payload }
        },

        failedWeather(state, { payload }) {
            return { ...state, isLoading: false, err: payload }
        },
    },
})

export const { getWeather, loadWeather, failedWeather } = weatherSlice.actions
export default weatherSlice.reducer
