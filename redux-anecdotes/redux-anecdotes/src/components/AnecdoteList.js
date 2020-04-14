import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {setNotifyMessage} from '../reducers/notificationReducer'
const AnecdoteList = (props) => {
   
    const anecdotes = useSelector(state => state.anecdotes.sort((a,b)=>b.votes-a.votes))
    const dispatch = useDispatch()
    const vote = (id) => {
        const getIndex = anecdotes.findIndex(anecdotes => anecdotes.id === id)
        dispatch(setNotifyMessage(`You have voted for '${anecdotes[getIndex].content}'`))
        const getVote = anecdotes[getIndex].votes +=1
        dispatch({type:'vote',content:anecdotes[getIndex].content, id:id, votes: getVote})
      }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                     <div>
                        has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>)}
        </div>
    )
}
    export default AnecdoteList