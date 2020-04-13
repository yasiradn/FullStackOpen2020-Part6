import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormAnecdote from './components/AnecdoteForm'
const App = () => {
  const anecdotes = useSelector(state => state.sort((a,b)=>b.votes-a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    const getIndex = anecdotes.findIndex(anecdotes => anecdotes.id === id)
    const getVote = anecdotes[getIndex].votes +=1
    dispatch({type:'vote',content:anecdotes[getIndex].content, id:id, votes: getVote})
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <FormAnecdote/>
    </div>
  )
}

export default App