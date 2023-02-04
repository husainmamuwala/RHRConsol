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
      
        <div className='w-2/5'>
        {
          Links.map((link)=>(
        <div className=' flex flex-col md:flex-row text-center uppercase items-center justify-center py-[0.3rem] font-semibold text-sm'>
        <a href={link.link} className='hover:text-[#FFCA05] class="w-full md:w-max mx-2 lg:mx-4 xl:mx-6 items-center transition-all'>{link.name}</a>
        </div>
          ))
        }
      </div>
        <img
        src='img/logo2.svg'
        alt='RHR Consol Logo'
        className='lg:w-56 w-40 justify-center'/>
      <div className='md:w-2/5'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7850.630637991672!2d72.83307354475072!3d18.982201511278518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3e8b5a8789%3A0x518069b484cb46f8!2sAnnamaya%20-%20Multi%20Cuisine%20Veg%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1638088361848!5m2!1sen!2sin"'></iframe>
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