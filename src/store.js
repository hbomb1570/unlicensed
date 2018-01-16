import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './ducks/rootReducer'

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

