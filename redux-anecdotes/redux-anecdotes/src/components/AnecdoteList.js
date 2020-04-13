import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

const AnecdoteList = (props) => {

    const anecdotes = useSelector(state => state.sort((a,b)=>b.votes-a.votes))
    
    const dispatch = useDispatch()
    const vote = (id) => {
        const getIndex = anecdotes.findIndex(anecdotes => anecdotes.id === id)
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