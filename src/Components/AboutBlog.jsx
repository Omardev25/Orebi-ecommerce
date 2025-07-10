import React from 'react'

const AboutBlog = ({title, text}) => {
  return (
    <div>
        <h4 className='text-2xl text-secondary font-bold font-dm leading-9'>{title}</h4>
        <p className='text-base text-primary font-dm font-normal pt-3 leading-7 text-justify'>{text}</p>
    </div>
  )
}

export default AboutBlog