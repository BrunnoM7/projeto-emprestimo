import React from 'react'

const Button = ({ onClick, className, type = 'button', value, disabled}) => {
  return (
    <input type={type} onClick={onClick} className={className} value={value} disabled={disabled} />
  )
}

export default Button
