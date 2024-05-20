import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { combineReducers, createStore } from 'redux'
import './index.css'
import { Provider } from 'react-redux'
import { calculating, mathExprReducer } from './redux/reducers.js'

const rootReducer = combineReducers(
  {
    result: mathExprReducer,
    calculations: calculating,
  }
)

const store = createStore(rootReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
)
