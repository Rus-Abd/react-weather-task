import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Loader from '@components/Loader/Loader'
import App from './App'

import store from './redux/store/store'
import GlobalStyles from './globalStyles'

const persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <GlobalStyles />
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
