import React from 'react'
import FormAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteList/>
      <FormAnecdote/>
    </div>
  )
}

export default App