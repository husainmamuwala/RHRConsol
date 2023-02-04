import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero2.png'
        className=' relative w-full h-auto lg:h-max'/>
        <div className='absolute top-10 ml-10 mt-10'>
        <p className='font-mulish font-extrabold text-6xl'>FAST,<span className='text-[#FFCA05]'>RELIABLE</span></p>
        <p className='text-6xl'>TRANSPORTATION.</p>
        </div>
        </div>
    </div>
  )
}

export default Hero