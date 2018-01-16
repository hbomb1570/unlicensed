import promiseMiddleware from 'redux-promise-middleware'
import { createStore, applyMiddleware } from 'redux'
import reducer from './ducks/reducer'

export default createStore(reducer, applyMiddleware(promiseMiddleware()))
