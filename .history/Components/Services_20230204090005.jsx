import React from 'react'

const Services = () => {
  return (
    <div className='px-10 py-5'>
      <div className='bg-secondary w-full rounded-[2rem] py-10 px-10'>
        <div className='flex flex-row justify-between'>
        <div className=' text-white'>
        <span className='md:text-6xl text-2xl font-bold'>Manage Your Package</span>
        <br/>
        <span className='text-6xl font-bold'>From Local to <span className='text-primary'> THE WORLD.</span></span>
        <br/>
        <span>RHR Consol is a logistics provider of integrated freight solutions .RHR provides dedicated freight solution including:</span>
        </div>
        <div className=''>
          <img
          src='img/arrow 1.png'
          alt=' '/>
        </div>

        </div>
        <div className='py-5 flex flex-row'>
          <div className='w-1/2'>
          <img
          src='img/service.png'
          className='h-3/4'/>
          </div>
        <div>
          hi
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services