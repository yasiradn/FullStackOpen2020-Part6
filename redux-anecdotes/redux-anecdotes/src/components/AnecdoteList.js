import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {setNotifyMessage} from '../reducers/notificationReducer'
import {initialAnecdotes} from '../reducers/anecdoteReducer'
const AnecdoteList = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialAnecdotes())
    },[dispatch])
    const anecdotes = useSelector(state => state.anecdotes.sort((a,b)=>b.votes-a.votes))
    const filtering_content = useSelector(state=>state.filter.filter_content) 
    const vote = (id) => {
        const getIndex = anecdotes.findIndex(anecdotes => anecdotes.id === id)
        dispatch(setNotifyMessage(`You have voted for '${anecdotes[getIndex].content}'`))
        const getVote = anecdotes[getIndex].votes +=1
        dispatch({type:'vote',content:anecdotes[getIndex].content, id:id, votes: getVote})
      }
    const showAnecdotes = () =>{
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
    const filterdAnecdotes = () => {
        return (
            <div>
            {filtereddata.map(anecdote =>
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
    const filtereddata = filtering_content === undefined ? '': anecdotes.filter(item => item.content.includes(filtering_content));
    const showData = filtereddata === '' ? showAnecdotes(): filterdAnecdotes() 
    return (
        <div>
            {showData}
        </div>
    )
}
    export default AnecdoteList