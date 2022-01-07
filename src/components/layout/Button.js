import React from 'react'

const Button = ({ onClick, className, type = 'button', value}) => {
  return (
    <input type={type} onClick={onClick} className={className} value={value} />
  )
}

export default Button
