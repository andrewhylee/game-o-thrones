import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Books from './components/Books'
import Houses from './components/Houses'
import Home from './Home'





export default () => {
  return(
  <Provider store = {store}>
    {/* <Home /> */}
    <Books />
    <Houses></Houses>
  </Provider>
  )
}