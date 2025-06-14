import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import ProductCard from '../Components/ProductCard'
import newArrivalImage1 from '../assets/newArrivalImage1.jpg'
import newArrivalImage2 from '../assets/newArrivalImage2.jpg'
import newArrivalImage3 from '../assets/newArrivalImage3.jpg'
import newArrivalImage4 from '../assets/newArrivalImage4.png'
import Heading2 from '../Components/Heading2'

const NewArrivals = () => {
  return (
    <section className='bg-white'>
        <Container>
          <Heading2 className="pb-6" text="New Arrivals"/>
            <Flex className="justify-between items-center">
                <ProductCard image={newArrivalImage1} title="Basic Crew Neck Tee" price="44.00"/>
                <ProductCard image={newArrivalImage2} title="Basic Crew Neck Tee" price="44.00"/>
                <ProductCard image={newArrivalImage3} title="Basic Crew Neck Tee" price="44.00"/>
                <ProductCard image={newArrivalImage4} title="Basic Crew Neck Tee" price="44.00"/>
            </Flex>
        </Container>

    </section>
  )
}

export default NewArrivals