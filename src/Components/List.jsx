import React from 'react'

const List = ({className, text}) => {
  return (
    <li className={`list-none font-dm font-normal text-sm text-primary hover:text-secondary hover:font-bold duration-500 ${className}`}>{text}</li>
  )
}

export default List