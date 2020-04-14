import { combineReducers, createStore } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notifyreducer from './reducers/notificationReducer'

const reducers = combineReducers({
    anecdotes: reducer,
    notification:notifyreducer

})
const store = createStore(reducers)

export default store
