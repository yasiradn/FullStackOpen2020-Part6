import axios from 'axios'

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async()=> {
    const res = await axios.get(baseUrl)
    return res.data
}

const createAnecdote = async (anecObject) => {
    const res = await axios.post(baseUrl,anecObject)
    return res.data
}
    

export default {getAll,createAnecdote}