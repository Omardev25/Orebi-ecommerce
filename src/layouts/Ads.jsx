import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import AdsImage1 from '../assets/offer1.png' // Assuming you have an ads image in your assets folder
import Heading2 from '../Components/Heading2'
import ShopButton from '../Components/ShopButton'
import AdsImage2 from '../assets/offer2.png' // Assuming you have another ads image in your assets folder
import AdsImage3 from '../assets/offer3.png'
import PromoText from '../Components/PromoText'

const Ads = () => {
  return (
    <section className='bg-[#ffffff] pt-[120px]'>
        <Container>
            <Flex>
                <div className='w-1/2 relative pr-5'>
                <div className='h-full'>
                    <Image  src={AdsImage1}/>
                <div className='absolute top-[60%] left-[64px] '>
                    <Heading2 text="Phones Sale"/>
                    <PromoText prefix="Up to" highlight="50%" suffix="sale for all phones!"/>
                    <ShopButton text="Shop Now"/>
                </div>
                </div>
                </div>
                <div className='w-1/2 pl-5 '>
                  <Flex className="flex-col justify-between h-full">
                    <div className='relative mb-8'>
                      <Image src={AdsImage2}/>
                      <div className='absolute top-[14%] left-[50px] '>
                        <Heading2 text="Electronics Sale"/>
                        <PromoText prefix="Up to" highlight="70%" suffix="ssale for all electronics!"/>
                        <ShopButton text="Shop Now"/>
                      </div>
                    </div>
                    <div className='relative'>
                      <Image src={AdsImage3}/>
                      <div className='absolute top-[14%] left-[50px] '>
                        <Heading2 text="Electronics Sale"/>
                        <PromoText prefix="Up to" highlight="50%" suffix="sale for all furniture items!"/>
                        <ShopButton text="Shop Now"/>
                      </div>
                    </div>
                  </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Ads



