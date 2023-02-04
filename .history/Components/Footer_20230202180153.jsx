import React from 'react'
import Link from 'next/link';

const Footer = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Enquiry",
      link: "/enquiry",
    },
    {
        name:"Career",
        link:'/career',
    },
    {
        name:"Contact Us",
        link:"/contact"
    }
  ];
  return (
    <div className='bg-[#1C2C5E] text-white py-8 flex md:flex-row flex-col items-center gap-y-6 md:justify-around'>
      
        <img
        src='img/logo2.svg'
        alt='RHR Consol Logo'
        className='lg:w-56 w-24 justify-center'/>
        <div className='text-3xl mt-2 font-semibold'>  
      </div>
      <div className='md:w-2/5'>
        <span className='font-semibold text-xl'>Important Links:</span>
        <div className='mt-4'>
        {
          Links.map((link)=>(
        <div className='py-[0.2rem] gap-y-4 items-center justify-center'>
        <Link href={link.link} className='hover:text-[#FFCA05] uppercase gap-y-4'>{link.name}</Link>
        </div>
          ))
        }
      </div>
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