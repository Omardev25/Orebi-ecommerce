import React from 'react'
import Heading2 from '../Components/Heading2'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import ProductCard from '../Components/ProductCard'
import BestSellerImage1 from '../assets/bestSellerImage1.png'
import BestSellerImage2 from '../assets/bestSellerImage2.png'
import BestSellerImage3 from '../assets/bestSellerImage3.png'
import BestSellerImage4 from '../assets/bestSellerImage4.png'

const Bestsellers = () => {
  return (
    <section className='pt-[100px]'>
        <Container>
            <Heading2 className="pb-6" text="Our Bestsellers"/>
            <Flex className="justify-between items-center">
              <ProductCard image={BestSellerImage1} title="Basic Crew Neck Tee" price="55.0"/>
              <ProductCard image={BestSellerImage2} title="Basic Crew Neck Tee" price="55.0"/>
              <ProductCard image={BestSellerImage3} title="Basic Crew Neck Tee" price="55.0"/>
              <ProductCard image={BestSellerImage4} title="Basic Crew Neck Tee" price="55.0"/>
            </Flex>
            
        </Container>
        
    </section>
  )
}

export default Bestsellers