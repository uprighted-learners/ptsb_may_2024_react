import React from 'react'

const Button = (props) => {
  return (
    <button style={{background: props.color}} onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button