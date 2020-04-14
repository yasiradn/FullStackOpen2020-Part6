const filterReducer = (state='', action) => {
    if(action.type === "SET_FILTER"){
        return{...state, filter_content:action.data}
    }else{
        return state
    }
}

export const setFilter = filter => {
    return { type: 'SET_FILTER', data: filter}
}

export default filterReducer