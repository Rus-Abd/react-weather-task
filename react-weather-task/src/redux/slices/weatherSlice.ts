import { createSlice } from '@reduxjs/toolkit'

const initState = {
    weatherArr: [],
    isLoading: false,
    err: null,
    weekly: true,
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
                weekly: true,
            }
        },

        getDailyWeather(state) {
            console.log('GET Daily WEATHER')

            return {
                ...state,
                isLoading: true,
                weekly: false,
            }
        },

        loadWeather(state, { payload }) {
            console.log('lOAD WEATHER')
            console.log(`weekly${state.weekly}`)
            console.log(payload)
            return { ...state, isLoading: false, weatherArr: payload }
        },

        failedWeather(state, { payload }) {
            return { ...state, isLoading: false, err: payload }
        },
    },
})

export const { getWeather, loadWeather, failedWeather, getDailyWeather } = weatherSlice.actions
export default weatherSlice.reducer
