import React from 'react'

import Events from '@components/Events/Events'

import Header from '@components/Header/Header'
import Login from '@components/Login/Login'
import Weather from '@components/Weather/Weather'
import { Container } from './globalStyles'

function App() {
    return (
        <Container>
            <Header />
            <Events />
            <Weather />
            <Login />
        </Container>
    )
}

export default App
