import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Logo from '../assets/logo.png'
import List from '../Components/List'


const Navbar = () => {
  return (
   <Container>
    <nav className='py-9'>
       <Flex>
         <div className='w-4/12'>
           <Image src={Logo}/>
        </div>
        <div className='w-8/12'>
            <ul className='flex gap-x-10'>
                <List className="cursor-pointer" text='Home'/>
                <List className="cursor-pointer" text='Shop'/>
                <List className="cursor-pointer" text='About'/>
                <List className="cursor-pointer" text='Contacts'/>
                <List className="cursor-pointer" text='Journal'/>
            </ul>
        </div>
       </Flex>
    </nav>
   </Container>
  )
}

export default Navbar

