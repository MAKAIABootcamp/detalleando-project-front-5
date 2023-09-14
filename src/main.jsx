import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router.jsx'
import "./assets/styles/reset.scss"
import { Provider } from 'react-redux'
import store from './redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router/>
  </Provider>
)
