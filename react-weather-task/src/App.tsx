import React from 'react'
import './App.css'
import Events from './components/Events/Events'

import Header from './components/Header/Header'
import Login from './components/Login/Login'

function App() {
    return (
        <div className="container">
            <Login />
            <Header />
            <Events />
        </div>
    )
}

export default App
