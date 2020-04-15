const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const initialAnecdotes = data => {
  return { type: 'INIT', data: data}
}

export const addAnecdotes = data => {
  return { type: 'add', data:data}
}

const reducer = (state = [], action) => {
  if(action.type === 'vote') {
    const changedanecdote = {
      content: action.content,
      id:action.id,
      votes:action.votes
    }
    return state.map(anecdote => anecdote.id === action.id ? changedanecdote : anecdote)
  } else if(action.type === 'add'){
      return [...state, action.data]
  }else if(action.type === 'INIT'){
    return action.data
  }else{
    return state
  }
}
  


export default reducer