import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero2.png'
        className=' relative w-full h-auto lg:h-max'/>
        <div className='absolute'>
        <p>FAST,<span>RELIABLE</span></p>
        <p>TRANSPORTATION.</p>
        </div>
        </div>
    </div>
  )
}

export default Hero