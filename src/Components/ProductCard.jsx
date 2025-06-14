import React from 'react'
import Image from '../Components/Image'
import Flex from '../Components/Flex'
import Regular from '../Components/Regular'
import { IoMdHeart } from "react-icons/io";
import { FaRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";




const ProductCard = ({image,title,price}) => {
  return (
    <div className='w-[370px] h-[465px] relative '>
        <div className='w-full relative group overflow-hidden'>
            <Image className="w-full" src={image}/>
            <div className='h-[156px] w-full absolute -bottom-[156px] left-0 bg-white group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                <ul className='flex flex-col flex-end items-end py-[25px] px-[30px] gap-y-5 '>
                    <li className='font-dm text-sm font-normal text-primary transition-all duration-330 ease-out hover:text-secondary text-base hover:font-bold cursor-pointer '>Add to Wish List <IoMdHeart className='inline ml-4'/></li>
                    <li className='font-dm text-sm font-normal text-primary transition-all duration-330 ease-out hover:text-secondary text-base hover:font-bold cursor-pointer '>Compare <FaRotate className='inline ml-4'/></li>
                    <li className='font-dm text-sm font-normal text-primary transition-all duration-330 ease-out hover:text-secondary text-base hover:font-bold cursor-pointer '>Add to cart <FaShoppingCart className='inline ml-4'/></li>
                </ul>
            </div>    
        </div>
        <Flex className="justify-between items-center pt-6 pb-4">
            <h5 className='text-xl text-secondary font-bold font-dm '>{title}</h5>
            <h6 className='font-base text-[#6D6D6D] font-dm font-normal'>${price}</h6>

        </Flex>
        <Regular text="Black"/>
        <button className='px-8 py-2 bg-secondary text-white text-sm font-dm font-bold absolute top-5 left-5 '>New</button>
  
    </div>

    
    
    
    
  )
}

export default ProductCard


