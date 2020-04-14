const notificationReducer = (state='', action) => {
    console.log('ACTION', action)
    if(action.type === 'SET'){
       return{...state, message:action.data}
    } else if(action.type === 'DEL') {
        return{...state, message:""}
    } else {
        return state
    }
}

export const setNotifyMessage = msg => {
    return { type: 'SET', data: msg}
}

export const clearMessage = () => {
    return { type: 'DEL', data: ""}
}

export default notificationReducer