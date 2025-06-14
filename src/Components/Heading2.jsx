import React from 'react'

const Heading2 = ({text,className}) => {
  return (
    <h2 className={`text-[39px] font-dm font-bold font-dm text-secondary ${className}`}>{text}</h2>
  )
}

export default Heading2