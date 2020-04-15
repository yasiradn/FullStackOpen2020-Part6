import { combineReducers, createStore, applyMiddleware } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notifyreducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    anecdotes: reducer,
    notification:notifyreducer,
    filter: filterReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

export default store
