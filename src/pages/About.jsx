import React from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Image from '../Components/Image'
import AboutImage1 from '../assets/product/productImage3.png'
import AboutImage2 from '../assets/product/productImage2.png'
import AboutBlog from '../Components/AboutBlog'

// import { useParams } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>

      <section>
        <Container>
          <Flex className="justify-between pt-[136px] pb-32">
            <div className='w-[48%] relative'>
              <Image className="w-full" src={AboutImage1}/>
              <button className='py-7 px-24 bg-secondary text-white text-base font-bold font-dm absolute bottom-10 left-1/2 -translate-x-1/2'>Our Brands</button>
            </div>
            <div className='w-[48%] relative'>
              <Image className="w-full" src={AboutImage2}/>
              <button className='py-7 px-24 bg-secondary text-white text-base font-bold font-dm absolute bottom-10 left-1/2 -translate-x-1/2'>Our Brands</button>
            </div>
          </Flex>
          <p className='text-[39px] text-secondary font-normal font-dm leading-[52px] pb-28 w-full'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

          <Flex className="justify-between gap-x-10 pb-32">
            <AboutBlog title="Our vision" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>

            <AboutBlog title="Our Story" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>  
            <AboutBlog title="Our Brands" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>  
            
          </Flex>
 
        </Container>
      </section>
      





















      <Footer/>
    </div>
  )
}

export default About