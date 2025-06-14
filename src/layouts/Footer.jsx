import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import List from '../Components/List'
import Image from '../Components/Image'
import Logo from '../assets/logo.png' // Assuming you have a logo image
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";



const Footer = () => {
  return (
    <footer className='py-[59px] bg-[#F5F5F3]'>
        <Container>
            <Flex>
                <div className='w-[44%]'>
                <Flex className="justify-normal gap-x-[143px]">
                <div>
                    <h6 className='text-base font-bold font-dm text-secondary leading-6 pb-4'>MENU</h6>
                 <ul>
                    
                    <li>
                            <a href="/home" className="text-[#6D6D6D] mb-[6px]">Home</a>
                    </li>
                     <li>
                        <a href="/shop" className="text-[#6D6D6D] mb-[6px]">Shop</a>
                     </li>
                     <li>
                           <a href="/about" className="text-[#6D6D6D] mb-[6px]">About</a>
                     </li>
                     <li>
                           <a href="/contacts" className="text-[#6D6D6D] mb-[6px]">Contact</a>
                     </li>
                      <li>
                         <a href="/journal" className="text-[#6D6D6D] mb-[6px]">Journal</a>
                     </li>
                 </ul>
                </div>
                <div>
                    <h6 className='text-base font-bold font-dm text-secondary leading-6 pb-4'>Shop </h6>
                    <ul>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Category1"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Category2"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Category3"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Category4"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Category5"/>
                    </ul>
                </div>
                <div>
                    <h6 className='text-base font-bold font-dm text-secondary leading-6 pb-4'>Help</h6>
                    <ul>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Privacy Policy"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Terms & conditions"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Special E-shop"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Shipping"/>
                         <List className="text-[#6D6D6D] mb-[6px] cursor-pointer" text="Secure payments"/>
                    </ul>
                </div>
                </Flex>
                </div>
                <div className='w-[56%]'>
                <div className='flex justify-between items-center'>
                    <address className='w-[54%]'>
                      <p className='text-base font-dm font-bold text-[#262626] leading-[27px]'>
                          <a href="tel:+10526115711">(052) 611-5711</a>
                      </p>
                      <p className='text-base font-dm font-bold text-[#262626] leading-[27px]'>
                          <a href="mailto:company@domain.com">company@domain.com</a>
                      </p>
                      <p className='text-base font-dm font-bold text-[#6D6D6D] leading-[23px] py-4'>
                      575 Crescent Ave. Quakertown, PA 18951
                      </p>
                      </address>

                    <div className='w-[46%]'>
                        <a className='cursor-pointer' href="#"><Image src={Logo} alt="Orebi Logo" /></a>
                    </div>
            
                </div>
                </div>
            </Flex>
            
               <div className='py-[64px] flex justify-between items-center'>
                 <nav aria-label="Social media" >
                <ul className='flex gap-x-6 items-center'>
                    <li>
                        <a href="#" aria-label="Facebook" className="flex items-center">
                            <LiaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="LinkedIn" className="flex items-center">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Instagram" className="flex items-center">
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>

            </nav>

            <small className='text-sm font-dm font-normal text-[#6D6D6D]'>2020 Orebi Minimal eCommerce      Figma Template by Adveits</small>
            </div>
            
        </Container>
        
    </footer>
  )
}

export default Footer

