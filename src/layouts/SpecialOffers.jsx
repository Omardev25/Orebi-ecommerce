import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Heading2 from '../Components/Heading2'
import ProductCard from '../Components/ProductCard'
import specialOfferImage1 from '../assets/specialOffersImage1.png'
import specialOfferImage2 from '../assets/specialOffersImage2.png'
import specialOfferImage3 from '../assets/specialOffersImage3.png'
import specialOfferImage4 from '../assets/specialOffersImage4.png'

const SpecialOffers = () => {
  return (
    <section className='pb-[140px]'>
        <Container>
            <Heading2 className="pb-12" text="Special Offers"/>
            <Flex className="justify-between items-center">
                <div>
                    <ProductCard image={specialOfferImage1} title="Basic Crew Neck Tee" price="34.0"/>
                </div>
                <div>
                    <ProductCard image={specialOfferImage2} title="Basic Crew Neck Tee" price="34.0"/>
                </div>
                <div>
                    <ProductCard image={specialOfferImage3} title="Basic Crew Neck Tee" price="34.0"/>
                </div>
                <div>
                    <ProductCard image={specialOfferImage4} title="Basic Crew Neck Tee" price="34.0"/>
                </div>
               
            </Flex>

        </Container>
    </section>
  )
}

export default SpecialOffers