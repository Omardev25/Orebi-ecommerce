import React from 'react'
import Flex from '../Components/Flex'
import { RiStarSFill } from "react-icons/ri";
import Container from '../Components/Container';

const ProductReviews = () => {
  return (
    <section className='pb-85'>
      <Container>
             <Flex className='items-center gap-x-15 pb-10'>
      <div className='text-xl text-primary font-dm font-normal '>Description</div>
      <div className='text-xl text-primary font-dm font-normal'>Reviews (1)</div>
      </Flex> 

      {/*Review count*/}
      <p className='text-sm text-primary font-dm font-normal border-b border-[#F0F0F0] pb-4 w-1/2'>1 review for Product</p>

      {/* Review message */}

      <Flex className="gap-x-10 items-center pt-8 justify-between">
         <div className='flex items-center gap-x-4'>
         <p className='text-base text-secondary font-dm font-normal'>Abubakar Warsame</p>
        <ul className='text-[#FFD881] flex'>
          <li><RiStarSFill /></li>
          <li><RiStarSFill /></li>
          <li><RiStarSFill /></li>
          <li><RiStarSFill /></li>
          <li><RiStarSFill /></li>
        </ul>
         </div>
         <div>
        <p className='text-base text-primary font-dm font-normal'>6 months ago</p>
         </div>
      </Flex>
        <p className='text-base text-primary font-dm font-normal border-b border-[#F0F0F0] pb-4 pt-4 leading-[30px] w-full'>I recently purchased the FitPro fitness tracker, and I'm quite impressed with it. The design is sleek and modern, and the device is comfortable to wear. The battery life is excellent, lasting for several days on a single charge, which is a huge plus. I found the step counting and heart rate monitoring to be accurate, and the sleep tracking feature is also very helpful.</p>

        {/* Add Review Form*/}

       <h5 className='text-xl text-secondary font-dm font-bold py-12'>Add a Review</h5> 

       {/* Add Review Form   --- I was supposed to use map so that my code would be functional, but now I don't have the knowledge of map */}
       <form action="">
        <label htmlFor="Name">
          <p className='text-base text-secondary font-dm font-bold pb-2'>Name <span className='text-red-500'>*</span></p>
          <input type="text" id='Name' placeholder='Enter your name' className='w-[48%]  border-b border-[#F0F0F0] rounded-lg focus:outline-none focus:border-primary pb-4' />
        </label>
        <label htmlFor="Email">
          <p className='text-base text-secondary font-dm font-bold pb-2 pt-5'>Email <span className='text-red-500'>*</span></p>
          <input type="text" id='Email' placeholder='Enter your Email' className='w-[48%]  border-b border-[#F0F0F0] rounded-lg focus:outline-none focus:border-primary pb-4' />
        </label>
       </form>

       <label htmlFor="Review">
        <p className='text-base text-secondary font-dm font-bold pb-2 pt-5'>Review<span className='text-red-500'>*</span></p>


        <textarea name="Review" id="Review" cols="30" rows="5" placeholder='Write your review here' className='w-[48%] border-b border-[#F0F0F0] rounded-lg focus:outline-none focus:border-primary pb-4 block'></textarea>


        <button className='bg-primary text-white font-dm font-bold text-base px-6 py-3 rounded-lg mt-4'>Submit</button>
       </label>

      </Container>
    </section>
  )
}

export default ProductReviews