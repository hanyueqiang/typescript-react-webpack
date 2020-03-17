import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import CounterComponent from './components/Counter'

ReactDom.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>
  ,
  document.getElementById("app"))