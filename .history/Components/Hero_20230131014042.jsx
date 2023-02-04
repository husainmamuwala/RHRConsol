import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='hero2.png'
        className=' relative w-full bg-contain h-[20rem] lg:h-auto object-cover'/>

        <div className='zabsolute lg:top-10 top-0 ml-10 lg:mt-16 mt-24'>
        <p className='font-mulish font-extrabold lg:text-6xl text-3xl tracking-wide'>FAST,<span className='text-[#FFCA05] tracking-wide'>RELIABLE</span></p>
        <p className='text-3xl lg:text-6xl tracking-wide'>TRANSPORTATION.</p>
        <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.2rem] text-[#1C2C5E] font-mulish font-semibold lg:w-48 text-md
        drop-shadow-lg hover:scale-105 mt-10">
                Explore More
            </button>
        </div>
        </div>
    </div>
  )
}

export default Hero