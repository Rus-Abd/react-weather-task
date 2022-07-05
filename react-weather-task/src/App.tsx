import React from 'react'
import './App.css'
import Events from './components/Events/Events'

import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Weather from './components/Weather/Weather'

function App() {
    return (
        <div className="container">
            <Login />
            <Header />
            <Events />
            <Weather />
        </div>
    )
}

export default App
