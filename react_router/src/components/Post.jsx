import React from 'react'
import {useParams} from "react-router-dom"

const Post = () => {
    let params = useParams()    

  return (
    <div>
        <h3>You are viewing post:</h3>
        <p>{params.id}</p>
    </div>
  )
}

export default Post