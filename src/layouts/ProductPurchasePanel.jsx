import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Flex from '../Components/Flex'
import productImage1 from '../assets/product/productImage1.png' 
import productImage2 from '../assets/product/productImage2.png' 
import productImage3 from '../assets/product/productImage3.png' 
import productImage4 from '../assets/product/productImage4.png' 
import Heading2 from '../Components/Heading2'
import { FaStar } from "react-icons/fa";
import Price from '../Components/Price'
import Button from '../Components/Button'
import { GoPlus } from "react-icons/go";

const ProductPurchasePanel = () => {
  return (
    <section>
        <Container>
            <div className="flex flex-wrap gap-y-10 pt-36 pb-12">
         {[productImage1, productImage2, productImage3, productImage4].map((img, i) => (
           <div key={i} className="w-1/2">
             <Image className="w-[95%]" src={img} alt={`Product image ${i + 1}`} />
            </div>
          ))}
         </div>
       <Heading2 text="Product"/>
       <Flex className="items-center gap-x-6 pt-2">
        <ul className='flex text-[#FFD881]'>
          <li><FaStar/></li>
          <li><FaStar/></li>
          <li><FaStar/></li>
          <li><FaStar/></li>
          <li><FaStar/></li>
        </ul>
        <p className='text-sm text-[#767676] font-dm font-normal'>1 Review</p>
       </Flex>
       <Price original="$88.00" discounted="$44.00"/>

       <Flex className="gap-x-7 py-8 items-center">
        <h6 className='text-base font-dm font-bold'>COLOR:</h6>
        <ul className='flex gap-x-4'>
          <li className='w-5 h-5 rounded-full bg-gray-300 hover:scale-130 duration-300'></li>
          <li className='w-5 h-5 rounded-full bg-[#FF8686] hover:scale-130 duration-300'></li>
          <li className='w-5 h-5 rounded-full bg-[#7ED321] hover:scale-130 duration-300'></li>
          <li className='w-5 h-5 rounded-full bg-[#B6B6B6] hover:scale-130 duration-300'></li>
          <li className='w-5 h-5 rounded-full bg-[#15CBA5] hover:scale-130 duration-300'></li>
        </ul>
       </Flex>

       <Flex className="py-[30px] gap-x-[75px] items-center">
        <h6 className='text-base font-dm font-bold'>SIZE:</h6>
        <select className='border border-[#F0F0F0] px-10 py-2 rounded text-sm focus:outline-none focus:ring'>
          <option value="" disabled selected>Select Size</option>
          <option value="">S</option>
          <option value="">L</option>
          <option value="">M</option>
          <option value="XL" disabled >XL</option>
        </select>
       </Flex>

       <Flex className="py-[30px] gap-x-10 items-center border-b border-[#F0F0F0]">
        <h6 className='text-base font-dm font-bold'>Quantity:</h6>
        <select className='w-[170px] border border-[#F0F0F0] px-9 py-2 rounded text-sm focus:outline-none focus:ring'>
          
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
       </Flex>

       

       <Flex className="border-b border-[#F0F0F0] py-5 items-center gap-x-[26px] w-1/2">
        <h6 className='text-base font-dm font-bold'>STATUS:</h6>
        <p className=''>In stock</p>

       </Flex>

       <Flex className="border-b border-[#F0F0F0] py-[30px] items-center gap-x-5 w-1/2">
        <Button text="Add to Wish List"/>
        <Button text="Add to Cart"/>
       </Flex>

       <Flex className="border-b border-[#F0F0F0] py-6 items-center justify-between w-1/2">
        <h6 className='text-base font-dm font-bold'>FEATURES & DETAILS</h6>
        <GoPlus />
       </Flex>
       <Flex className="border-b border-[#F0F0F0] py-6 items-center justify-between w-1/2">
        <h6 className='text-base font-dm font-bold'>SHIPPING & RETURNS</h6>
        <GoPlus />
       </Flex>
       <p className='w-1/2 text-base text-primary font-normal font-dm pt-6 pb-[123px] leadind-[30px]'>Lozrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </Container>
    </section>
  )
}

export default ProductPurchasePanel