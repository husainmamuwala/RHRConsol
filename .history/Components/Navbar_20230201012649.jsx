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
      <div className="lg:flex justify-between lg:items-center flex">
        <div>
          <a href="/">
            
          </a>
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
            transition-all duration-1000 ease-in top-14 pb-5 rounded-b-2xl z-40  
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
            <button className="bg-[#FFCA05] rounded-xl px-5 py-[0.4rem] text-[#1C2C5E] font-Montserrat md:text-lg 
            lg:ml-10">
                Contact Us
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
