import React from 'react'

interface ButtonProps {
  label: string
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className='sds-button__container'> {label}</button>
}

export default Button
