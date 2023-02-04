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
      <div className=''>
        <div className='w-2/5'>
        {
          Links.map((link)=>(
        <div className='flex flex-col text-center gap-y-4 uppercase items-center justify-center py-[0.3rem] font-semibold text-sm md:flex-row md:w-2/5'>
        <a href={link.link} className='hover:text-[#FFCA05] class="w-full md:w-max mx-2 lg:mx-4 xl:mx-6 items-center transition-all'>{link.name}</a>
        </div>
          ))
        }
      </div>
        </div>
        <img
        src='img/logo2.svg'
        alt='RHR Consol Logo'
        className='lg:w-56 w-40 justify-center'/>
      <div className='md:w-2/5'>
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