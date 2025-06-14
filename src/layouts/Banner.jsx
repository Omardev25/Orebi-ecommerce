import React from 'react'
import Container from '../Components/Container'
import Heading2 from '../Components/Heading2'
import ShopButton from '../Components/ShopButton'
import Regular from '../Components/Regular'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import bannerImage from '../assets/sales.png' // Assuming you have a banner image in assets folder
import PromoText from '../Components/PromoText'

const Banner = () => {
  return (
    <section className='bg-lightgray  py-50'>
        <Container >
            <Flex>
                <div className='w-1/2 '>
                <h1 className='text-[49px] font-dm font-bold text-secondary'>Final Offer</h1>
                <PromoText prefix="Up to" highlight="50%" suffix="sale for all phones!" />
                <ShopButton text="Shop Now"/>
                </div>
                <div className='w-1/2 '>
                <Image className='scale-200 pl-13 rotate-12 ' src={bannerImage}/>
                </div>
            </Flex>

        </Container>
        
    </section>
  )
}

export default Banner
/*
To center both sides vertically within the banner, update the Flex component usage by adding alignment classes. 
If Flex is a wrapper for a div, you can use Tailwind's `items-center` to center items vertically and `justify-center` if you want to center horizontally as well.

Example:
<Flex className="items-center h-full">

If Flex does not accept className, update its implementation to pass className to the underlying div.
*/