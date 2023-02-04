import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1C2C5E] text-white py-8 flex lg:flex-col flex-row'>
      <div className='w-1/3'>
        <img
        src='logo_rhr.svg'
        alt='RHR Consol Logo'
        className='w-32  '/>
      </div>
      <div className='w-1/3'>
        2
      </div>
      <div className='w-1/3'>
        3
      </div>
        {/* <div className="container mx-auto">
      <p className="text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} RHR Consol India Pvt. Ltd.
      </p>
    </div> */}
    </div>
  )
}

export default Footer