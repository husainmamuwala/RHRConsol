import React from 'react'


const Hero = () => {
  return (
    <div>
        <div className='relative'>
        <img
        src='https://ik.imagekit.io/elightlabs/RHR/hero1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675395196276'
        className=' relative w-full bg-contain h-[25rem] lg:h-auto object-cover'/>
        <div className='z-10 absolute lg:top-10 top-0 lg:ml-10 ml-5 py-20'>
        <p className='font-bold lg:text-6xl text-3xl tracking-wide text-white md:py-2'>FAST,{}<span className='text-primary tracking-wide'>RELIABLE</span></p>
        <p className='text-3xl lg:text-6xl tracking-wide text-white font-medium mt-1'>TRANSPORTATION.</p>
        <div className='grid grid-flow-row lg:grid-flow-col text-white mt-2 ml-2 lg:text-xl text-md py-2'>
          <li className='list-disc text-sm md:text-lg'>TRUCKING</li>
          <li className='list-disc text-sm md:text-lg'>SHIPPING</li>
          <li className='list-disc text-sm md:text-lg'>AIR TRANSPORT</li>
        </div>
        <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.3rem] text-[#1C2C5E] font-semibold lg:w-48 text-md
        drop-shadow-lg hover:scale-105 md:mt-10 mt-5">
                Explore More
            </button>
        </div>
        </div>
    </div>
  )
}

export default Hero