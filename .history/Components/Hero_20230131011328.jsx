import React from 'react'
import from ''

const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero2.png'
        className=' relative w-full h-auto lg:h-max'/>
        <div className='absolute top-10 ml-10 text-4xl'>
        <p>FAST,<span className='text-[#FFCA05]'>RELIABLE</span></p>
        <p>TRANSPORTATION.</p>
        </div>
        </div>
    </div>
  )
}

export default Hero