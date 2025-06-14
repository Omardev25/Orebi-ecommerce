import React from 'react'


const ShopButton = ({text,className}) => {
  return (
   <button className={`py-4 px-15 bg-secondary text-white font-sm font-dm font-bold ${className}`}>{text}</button>
  )
}

export default ShopButton