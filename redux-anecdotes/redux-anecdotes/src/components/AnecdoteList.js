import React, {useEffect} from 'react'
import {setNotifyMessage} from '../reducers/notificationReducer'
import {initialAnecdotes, addVoting} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux' 

const AnecdoteList = (props) => {
    useEffect(() => {
        props.initialAnecdotes()
    },[])
    const anecdotes = props.anecdotes.sort((a,b)=>b.votes-a.votes)
    const filtering_content = props.filter.filter_content
    const vote = (id) => {
        const getIndex = anecdotes.findIndex(anecdotes => anecdotes.id === id)
        props.setNotifyMessage(`You have voted for '${anecdotes[getIndex].content}'`,5)
        const getVote = anecdotes[getIndex].votes +=1
        const changedanecdote = {
            content: anecdotes[getIndex].content,
            id:id,
            votes:getVote
          }
        props.addVoting(changedanecdote)
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
const mapDispatchToProps = {
    setNotifyMessage,initialAnecdotes,addVoting
 }
const mapStateToProps = (state) => {    
     console.log(state)
     return {
       anecdotes: state.anecdotes,
       filter: state.filter
     }
   }
const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdotes