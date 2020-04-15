import anecService from '../service/anecdotesService'
const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const initialAnecdotes = () => {
  return async dispatch => {
    const anecdote = await anecService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdote
    })
  }
}

export const addAnecdotes = data => {
  return async dispatch => {
    const addedAnecdote = await anecService.createAnecdote(data)
    dispatch({
      type:'add',
      data: addedAnecdote
    })
  }
}

export const addVoting = data => {
  return async dispatch => {
    const updatedAnecdote = await anecService.updateAnecdote(data)
    dispatch({
      type:'vote',
      data: updatedAnecdote
    })
  }
}

const reducer = (state = [], action) => {
  if(action.type === 'vote') {
    return state.map(anecdote => anecdote.id === action.data.id ? action.data : anecdote)
  } else if(action.type === 'add'){
      return [...state, action.data]
  }else if(action.type === 'INIT'){
    return action.data
  }else{
    return state
  }
}
  


export default reducer