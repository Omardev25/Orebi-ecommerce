import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";







const Sidebar = () => {
  return (
    <section className='py-6 bg-[#F5F5F3] border border-[#979797]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-3/12 h-10 flex items-center gap-x-2.5 text-sm'>
                <HiMenuAlt2 />
                <p className='font-dm font-normal text-secondary'>Shop by Category</p>
                </div>
                <div className='relative w-6/12 py-5'>
                <input className='py-4 pl-6 pr-16 bg-[#FFFFFF] w-full placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-dm placeholder:font-normal' type="text" placeholder='Search Products' />
                <IoSearchOutline className='absolute top-1/2 right-5 -translate-y-1/2 text-[#262626]'/>
                </div>
                
                  <div className='w-3/12 h-10 
                   flex justify-end'>
                 <Flex className="gap-x-10">
                   <div className='flex gap-x-2.5'>
                    <FaUserAlt />
                    <RiArrowDropDownFill />

                    </div>
                    <div >
                    <FaShoppingCart />
                    </div>
                </Flex>
                    
                </div>
                
            </Flex>
        </Container>
    </section>

    
  )
}

export default Sidebar

