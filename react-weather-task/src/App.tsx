import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import getEvents from './utils/getCalendarEvents'

function App() {
    const calendarApi = getEvents('jokerk58@gmail.com')
    console.log(calendarApi)
    console.log(new Date().toUTCString().split(' '))
    return (
        <div className="container">
            <Login />
            <Header />
            <button
                type="button"
                onClick={() => {
                    calendarApi.handleAuthClick()
                }}
            >
                a
            </button>
            <button
                type="button"
                onClick={() => {
                    console.log(
                        calendarApi
                            .listEvents(
                                {
                                    timeMin: new Date().toISOString(),

                                    showDeleted: true,
                                    maxResults: 10,
                                    orderBy: 'updated',
                                },
                                'jokerk58@gmail.com'
                            )
                            .then(({ result }: any) => {
                                console.log(result.items)
                            })
                    )
                }}
            >
                bbbbbb
            </button>
        </div>
    )
}

export default App
