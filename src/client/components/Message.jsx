import React from 'react'

const Message = ({ text, user, added, id }) => {
  return (
    <div>
        <h2>{user}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Message