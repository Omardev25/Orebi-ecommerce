import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import FeaturedProductImage from '../assets/featuredProductImage.png'
import Heading2 from '../Components/Heading2'
import Regular from '../Components/Regular'
import ShopButton from '../Components/ShopButton'


const FeaturedProduct = () => {
  return (
    <section className='py-[130px]'>
        <Container className="bg-[#F3F3F3]">
            <Flex >
               <div className="w-1/3 pl-[158px]">
                 <Image src={FeaturedProductImage}/>
               </div>
                
                <div className='pl-[49px] w-2/3'>
                    <Heading2 className="pt-15 pb-[33px]" text="Phone of the year"/>
                    <Regular className="w-[511px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."/>
                    <ShopButton className="mt-[30px]" text="Shop Now"/>
                </div>
            </Flex>
        </Container>

    </section>
  )
}

export default FeaturedProduct