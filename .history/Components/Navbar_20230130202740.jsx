import React from "react";
import Link from "next/link";

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
  ];
  return <div className="w-full">
    <div>
        <div>
            #
        </div>
        <ul>
            {
                Links.map((link) => (
                    <li key={link.link} className="">
                        <Link href={link.link}>
                        {link.name}
                        </Link>
                    </li>
                ))
            }
           
        </ul>
    </div>
  </div>;
};

export default Navbar;
