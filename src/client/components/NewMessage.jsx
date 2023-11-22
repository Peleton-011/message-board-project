import React from 'react'

const NewMessage = () => {
  return (
    <form  action="http://localhost:9000/new" method="POST">
        <input type="text" name="text" />
        <input type="text" name="user" />
        <input type="submit" />
    </form>

  )
}

export default NewMessage