const notificationReducer = (state='', action) => {
    if(action.type === 'SET'){
       return{...state, message:action.data}
    } else if(action.type === 'DEL') {
        return{...state, message:""}
    } else {
        return state
    }
}

export const setNotifyMessage = (msg, duration) => {
    return dispatch => {
      dispatch({
        type:'SET',
        data: msg
      })
      setTimeout(()=>{dispatch(clearMessage())},duration * 1000)
    }
  }
export const clearMessage = () => {
    return { type: 'DEL', data: ""}
}

export default notificationReducer