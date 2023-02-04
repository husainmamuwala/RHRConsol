import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero2.png'
        className=' relative w-full h-auto lg:h-max'/>
        <div className='absolute top-10 ml-10 mt-16'>
        <p className='font-mulish font-extrabold lg:text-6xl text-2xl tracking-wide'>FAST,<span className='text-[#FFCA05] tracking-wide'>RELIABLE</span></p>
        <p className='text-2xl lg:text-6xl tracking-wide'>TRANSPORTATION.</p>
        <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.4rem] text-[#1C2C5E] font-mulish font-semibold w-48
        drop-shadow-lg hover:scale-105 mt-10">
                Explore More
            </button>
        </div>
        </div>
    </div>
  )
}

export default Hero