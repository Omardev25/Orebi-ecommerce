import React from 'react'

const PromoText = ({prefix,highlight,suffix}) => {
  return (
    <p className='font-base text-[#6D6D6D] font-dm font-normal flex items-center pt-[39px] pb-[49px]'>{prefix}<span className='text-[39px] font-dm font-bold font-dm text-secondary px-2'>{highlight}</span>{suffix}</p>
  )
}

export default PromoText