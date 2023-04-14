import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store , persister } from './store/store'
import { Elements } from '@stripe/react-stripe-js'
import { stripPromise } from './util/stripe/stripe.util'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persister}>
        <BrowserRouter>
          <Elements stripe={stripPromise}>
                <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
