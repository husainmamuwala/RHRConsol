import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
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
    }
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full top-0 px-5 bg-[#1C2C5E]">
      <div className="lg:flex justify-between lg:items-center flex py-2">
        <div className="flex items-center">
          <a href="/">
          <svg
          className="w-16 h-16 " width="auto" height="auto" viewBox="0 0 86 98" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="24" width="5" height="50" fill="white"/>
              <path d="M35 17L40 14V94H35V17Z" fill="white"/>
              <path d="M36.525 51L36 46H50V51H36.525Z" fill="white"/>
              <path d="M51 80L46 83L46 3L51 4L51 80Z" fill="white"/>
              <path d="M12 66.5375L17 69L17 29L12 29.4875L12 66.5375Z" fill="white"/>
              <path d="M24 49L29 46.3267V22L24 22.3506V49Z" fill="white"/>
              <path d="M24 73.8303L29 75V56L24 56.2316V73.8303Z" fill="white"/>
              <path d="M26.2657 60.4936L29 56L13.5833 47L13.5834 53L26.2657 60.4936Z" fill="white"/>
              <path d="M15.7343 53.7164L13 49.2227L28.4167 40.2227L28.4166 46.2227L15.7343 53.7164Z" fill="white"/>
              <path d="M14.7362 33.7152L12 29.2227L29.1541 19.1742L28.8523 25.3563L14.7362 33.7152Z" fill="white"/>
              <path d="M73.8083 66.586L68.8083 69.0485V29.0485L73.8083 29.536V66.586Z" fill="white"/>
              <path d="M61.8083 49.0485L56.8083 46.3752V22.0485L61.8083 22.3992V49.0485Z" fill="white"/>
              <path d="M61.8083 73.8788L56.8083 75.0485V56.0485L61.8083 56.2801V73.8788Z" fill="white"/>
              <path d="M59.5427 60.5422L56.8084 56.0485L72.225 47.0485L72.225 53.0485L59.5427 60.5422Z" fill="white"/>
              <path d="M70.074 53.7649L72.8083 49.2712L57.3917 40.2712L57.3917 46.2712L70.074 53.7649Z" fill="white"/>
              <path d="M71.0722 33.7638L73.8083 29.2712L56.6543 19.2227L56.9561 25.4048L71.0722 33.7638Z" fill="white"/>
              <rect x="81" y="24" width="5" height="50" fill="white"/>
              <path d="M40.5 1L40.5001 7.49999L3.33602 28.425L0.761346 24.1388L40.5 1Z" fill="white"/>
              <path d="M81 70L86.0001 73.5L46 96.5L46 90L81 70Z" fill="white"/>
              <path d="M83.1641 28.2111L85.7388 23.925L46.0001 0.999995L46.0001 4L46 6.5L83.1641 28.2111Z" fill="white"/>
              <path d="M40 96.5L40.0001 90L3.57476 70L1.00009 74.2861L40 96.5Z" fill="white"/>
        </svg>
          </a>
        <p className="text-white pl-2 font-semibold lg:font-bold lg:text-2xl lg:tracking-wider">RHR Consol India</p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer lg:hidden self-center place-content-end ml-auto mr-5"
        >
          {!open ? <Bars3Icon className="h-10 w-10 text-[#FFCA05]" /> : <XMarkIcon className="h-10 w-10 text-[#FFCA05]" />}
        </div>
        <div className="">
          <ul
            className={`lg:flex lg:flex-row lg:items-center font-Montserrat lg:pb-0 text-white 
            absolute lg:static bg-[#1C2C5E] lg:bg-transparent lg:z-auto w-full left-0  lg:pl-0 pl-9 lg:w-auto
            transition-all duration-1000 ease-in top-20 pb-5 rounded-b-2xl z-40  
            ${open ? "flex-col" : "hidden"}`}
          >
            {Links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.link} className="
              md:ml-8 text-xl md:text-lg my-7 hover:text-[#FFCA05] transition-all hover:top-1 pl-2">
                <Link href={link.link}>{link.name}</Link>
                <svg
              className="w-[10rem] lg:w-[15rem] lg:ml-14 lg:hidden"
              width="auto"
              height="10"
              viewBox="0 0 262 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.988506"y1="3.50004"x2="261.988"y2="1.50004"stroke="#FFCA05"stroke-width="3"/>
            </svg>
              </li>
            ))}
            <div>
              
            <button className="bg-[#FFCA05] rounded-xl px-5 py-1 text-[#1C2C5E] font-Montserrat md:text-lg 
            lg:ml-10 hover:scale-105">
                Contact Us
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
