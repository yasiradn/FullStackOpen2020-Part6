import React from 'react'
import { useDispatch } from 'react-redux'
import {addAnecdotes, asObject} from '../reducers/anecdoteReducer'
import {setNotifyMessage} from '../reducers/notificationReducer'
import anecdoteService from '../service/anecdotesService'
const FormAnecdote = (props) => {

    const dispatch = useDispatch()
    const addNew = async e => {
        e.preventDefault()
        dispatch(setNotifyMessage(`You have created ${e.target.anecdote.value}`))
        const anecdoteAsObject = asObject(e.target.anecdote.value)
        e.target.anecdote.value = '' 
        const newAnecdote = await anecdoteService.createAnecdote(anecdoteAsObject)
        dispatch(addAnecdotes(newAnecdote))
      }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addNew}>
            <div><input name="anecdote"/></div>
            <button>create</button>
            </form>
        </div>
    )
}

export default FormAnecdote