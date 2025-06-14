import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import Regular from '../Components/Regular';
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";




const Information = () => {
  return (
    <section className='bg-[#ffffff] pt-[29px]'>
        <Container>
            <Flex className="justify-between items-center">
                <div className='flex gap-x-3.5 items-center'>
                    <PiNumberTwoBold className='scale-140'/>
                    <Regular text='Two years warranty'/>

                </div>
                <div className='flex gap-x-3.5 items-center'>
                    <FaTruck className='scale-130'/>
                    <Regular text="Free shipping"/>
                </div>
                <div className='flex gap-x-3.5 items-center'>
                    <FaArrowRotateLeft className='scale-150'/>
                    <Regular text="30 days return policy"/>


                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Information