import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-8'>
        <div className="container mx-auto">
      <p className="text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} Your Company
      </p>
    </div>
    </div>
  )
}

export default Footer