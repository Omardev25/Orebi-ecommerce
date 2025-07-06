import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`py-4 px-10 border border-secondary text-sm font-dm font-bold hover:bg-secondary hover:text-white duration-300 ${className}`}>{text}</button>
  )
}

export default Button