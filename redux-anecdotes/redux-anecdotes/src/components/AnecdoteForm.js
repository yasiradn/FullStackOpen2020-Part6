import React from 'react'
import { useDispatch } from 'react-redux'
import {asObject} from '../reducers/anecdoteReducer'

const FormAnecdote = (props) => {

    const dispatch = useDispatch()
    const addNew = e => {
        e.preventDefault()   
        dispatch({type:'add', data:asObject(e.target.anecdote.value)})
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