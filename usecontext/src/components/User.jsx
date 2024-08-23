import React from 'react'

import {useContext} from 'react'
import {UserContext} from '../contexts/UserContext'

const User = () => {
  const [userName] = useContext(UserContext)

  return (
    <div><h1>{userName}</h1></div>
  )
}

export default User