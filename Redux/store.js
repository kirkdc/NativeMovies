import { createStore, applyMiddleware } from 'redux'
import movieReducer from './reducers/quotesReducer'
import thunk from 'redux-thunk'

const store = createStore(movieReducer, applyMiddleware(thunk))

export default store;