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
    <div className='bg-[#1C2C5E] text-white py-8 flex lg:flex-row flex-col my-8'>
      <div className='w-1/3'>
        <div className='w-full grid place-items-center '>
        <img
        src='logo_rhr.svg'
        alt='RHR Consol Logo'
        className='lg:w-32 w-24'/>
        <div className='text-3xl mt-2 font-semibold'>
        <p className='text-center'>
          RHR Consol India
        </p>
        <p className='text-center'>
          Pvt Ltd.
        </p>
        </div>
        </div>
      </div>
      <div className='w-1/3'>
        <span className='font-semibold text-xl'>Important Links:</span>
        <div className='mt-4'>
        {
          Links.map((link)=>(
        <div className='py-[0.2rem]'>
        <Link href={link.link} className='hover:text-[#FFCA05]'>{link.name}</Link>
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