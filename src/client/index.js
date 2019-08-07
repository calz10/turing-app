/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes'
import configureStore from './configStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root')
)
