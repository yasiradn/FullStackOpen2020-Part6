import React from 'react'
import { useSelector} from 'react-redux'
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const message = useSelector(state=>state.notification.message)
  const notify = () => {
    return (
      <div style={style}>
        {message}
      </div>
    )
  }
  const showMessage = message ? notify() : ''
  return (
    <div>
      {showMessage}
    </div>
  )
}

export default Notification