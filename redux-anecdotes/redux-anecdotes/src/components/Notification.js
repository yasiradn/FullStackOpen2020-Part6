import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {clearMessage} from '../reducers/notificationReducer'
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const dispatch = useDispatch()
  const message = useSelector(state=>state.notification.message)
  console.log('From Notify Componet', message)
  const notify = () => {
    return (
      <div style={style}>
        {message}
        {clearMsg()}
      </div>
    )
  }

  const clearMsg = () => {
    setTimeout(()=>{dispatch(clearMessage())},5000)
  }

  const showMessage = message ? notify() : ''
  return (
    <div>
      {showMessage}
    </div>
  )
}

export default Notification