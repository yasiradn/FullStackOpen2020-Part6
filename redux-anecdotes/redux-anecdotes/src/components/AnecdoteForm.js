import React from 'react'
import {addAnecdotes, asObject} from '../reducers/anecdoteReducer'
import {setNotifyMessage} from '../reducers/notificationReducer'
import { connect } from 'react-redux' 
const FormAnecdote = (props) => {

    const addNew = async e => {
        e.preventDefault()
        props.setNotifyMessage(`You have created ${e.target.anecdote.value}`,5)
        const anecdoteAsObject = asObject(e.target.anecdote.value)
        e.target.anecdote.value = '' 
        props.addAnecdotes(anecdoteAsObject)
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

const mapDispatchToProps = {
    addAnecdotes,setNotifyMessage
 }
 
const ConnectedAddAnecdotes = connect(
    null,
    mapDispatchToProps
  )(FormAnecdote)
export default ConnectedAddAnecdotes