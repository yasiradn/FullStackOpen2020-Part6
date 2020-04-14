import { combineReducers, createStore } from 'redux'
import reducer from './reducers/anecdoteReducer'
import notifyreducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducers = combineReducers({
    anecdotes: reducer,
    notification:notifyreducer,
    filter: filterReducer
    

})
const store = createStore(reducers)

export default store
