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
        src="google.com/maps/place/Mahavir+Icon,+Sector+15,+CBD+Belapur,+Navi+Mumbai,+Maharashtra+400614/@19.0104658,73.0382486,17z/data=!4m6!3m5!1s0x3be7c3aa58401201:0xf0f9308bd73291f3!8m2!3d19.0105187!4d73.0382218!16s%2Fg%2F11cknf1pgl"></iframe>
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