import React from 'react'
import Container from '../Components/Container'
import Heading2 from '../Components/Heading2'
import Button from '../Components/Button'

const Contacts = () => {
  return (
    <section className=''>
      <Container>
        <Heading2 className="pt-32" text="Fill up a Form"/>
        <form className='pt-10 pb-[140px]'>
          <label className='text-base text-gray-700 font-dm font-bold leading-6'   htmlFor="name">Name<span className='text-red-500'>*</span> <br />
            <input type="text" id='name' placeholder='Enter your name' className='px-4 text-sm text-primary font-dm font-normal border-b border-[#F0F0F0] w-1/2 pt-3 pb-4 focus:outline-none focus:ring-1 focus:ring-secondary ' />
          
          </label>
          <label className='block py-6 text-base text-gray-700 font-dm font-bold leading-6'   htmlFor="Email">Email<span className='text-red-500'>*</span> <br />
            <input type="text" id='Email' placeholder='Enter your name' className='px-4 text-sm text-primary font-dm font-normal border-b border-[#F0F0F0] w-1/2 pt-3 pb-4 focus:outline-none focus:ring-1 focus:ring-secondary ' />
          </label>
          <label className="block text-secondry font-bold text-gray-700 mb-5">Message</label>
          <textarea
            placeholder="Your message here"
            rows="4"
            className="px-4 w-1/2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 block"
          />

          <Button className="mt-7" text="Post"/>
        </form>

        <iframe className='pb-[140px] w-full h-[570px] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12423.448857043255!2d36.88620827591288!3d-1.2947644290866769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13bd95a385df%3A0xf603c3e52eabaca9!2sDonholm%2C%20Nairobi%2C%20Kenya!5e1!3m2!1sen!2sbd!4v1752388308052!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
 
    </section>
  )
}

export default Contacts